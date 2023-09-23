import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import QuizPopup1 from './QuizPopup1';
import UserInfo from './UserInfo';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { setPosition } from '../store/store';
import Tier1Info from './Tier1Info.js';
import Tier2Info from './Tier2Info.js';
import Tier3Info from './Tier3Info.js';
import { setInfo1, setInfo2, setInfo3 } from '../store';

const GameBoard = () => {
  const dispatch = useDispatch();
  const { position, character, language } = useSelector(
    (state) => state.reduxStore
  );
  // const [progress, setProgress] = useState({
  //   info1: false,
  //   quiz1: false,
  //   info2: false,
  //   quiz2: false,
  //   info3: false,
  //   quiz3: false,
  // });

  let imgsrc = '';
  if (character === 'char1') {
    imgsrc = './images/20230907_180304.jpg';
  } else if (character === 'char2') {
    imgsrc = './images/20230907_180322.jpg';
  } else if (character === 'char3') {
    imgsrc = './images/20230907_180337.jpg';
  } else if (character === 'char4') {
    imgsrc = './images/20230907_180348.jpg';
  }

  const [loading, setLoading] = useState(true);
  const [health, setHealth] = useState(3);

  const spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const onKeyDown = (ev) => {
    if (ev.code === 'ArrowLeft') {
      if (position > 0) {
        dispatch(setPosition(position - 1));
      }
    }
    if (ev.code === 'ArrowRight') {
      if (position < 9) {
        dispatch(setPosition(position + 1));
      }
    }
  };

  useEffect(() => {
    dispatch(setInfo1(language));
    dispatch(setInfo2(language));
    dispatch(setInfo3(language));
    setLoading(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  //add state (true or false) if user is on position, render popup

  const gameItems = spaces.map((space) => (
    <TableCell
      id="board"
      key={space}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '100px',
        }}
      >
        {space === position ? (
          <img
            src={imgsrc}
            alt={''}
            style={{
              width: '100%',
              justifyContent: 'center',
              borderRadius: '15px',
              boxShadow: '5px 5px 5px black',
              minHeight: '40.5px',
              minWidth: '40.5px',
            }}
          />
        ) : (
          <Button
            variant="outlined"
            sx={{
              justifyContent: 'center',
              borderRadius: '15px',
              background: 'white',
              borderColor: 'black',
              borderWidth: '3px',
              color: 'black',
              fontWeight: 'bold',
              padding: '5px',
            }}
          >
            {space}
          </Button>
        )}

        {space === 2 && position === 2 ? (
          <Modal open={true}>
            <Tier1Info />
          </Modal>
        ) : (
          <p></p>
        )}

        {space === 5 && position === 5 ? (
          <Modal open={true}>
            <Tier2Info />
          </Modal>
        ) : (
          <p></p>
        )}

        {space === 8 && position === 8 ? (
          <Modal open={true}>
            <Tier3Info />
          </Modal>
        ) : (
          <p></p>
        )}
      </Box>
    </TableCell>
  ));

  return (
    <div id="gameboard">
      {/* <UserInfo health={health} /> */}
      <h2 id="language">Language: {language}</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>{gameItems}</TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <hr />

      {position === 4 ? <QuizPopup1 /> : <div />}
    </div>
  );
};

export default GameBoard;
