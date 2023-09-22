import React from 'react';
import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const InfoComp = (props) => {
  const { language } = useSelector((state) => state.reduxStore);
  const { info1 } = useSelector((state) => state);

  console.log('HERE IS INFO1 updated:', info1);

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loading = false;
  return (
    <div>
      <Box textAlign="center">
        <Button
          onClick={handleOpen}
          variant="contained"
        >
          Open Info Token 1
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            borderRadius: '15px',
            p: 4,
          }}
        >
          <div id="info-title">Tier 1 - Introductory Phrases & Greetings</div>
          <hr></hr>
          <div className="row">
            <div className="col">
              {'English'}
              <hr></hr>
              {loading === false && info1?.Info?.English['0'] !== undefined ? (
                info1.Info.English.map((word) => (
                  <ul
                    className="list-unstyled"
                    key={word}
                  >
                    <li>
                      <i className="fa-solid fa-globe"> </i>
                      {word}
                    </li>
                  </ul>
                ))
              ) : (
                <i className="fa-solid fa-spinner"> Loading </i>
              )}
            </div>
            <div className="col">
              {language}
              <hr></hr>
              {loading === false && info1?.Info?.English['0'] !== undefined ? (
                info1.Info.Language.map((word) => (
                  <ul
                    className="list-unstyled"
                    key={word}
                  >
                    <li>
                      <i className="fa-solid fa-earth-americas"> </i>
                      {word}
                    </li>
                  </ul>
                ))
              ) : (
                <i className="fa-solid fa-spinner"> Loading </i>
              )}
            </div>
          </div>
          <hr></hr>
        </Box>
      </Modal>
    </div>
  );
};

const mapState = (state) => {
  return {
    info1: state.info1,
  };
};

export default connect(mapState)(InfoComp);
