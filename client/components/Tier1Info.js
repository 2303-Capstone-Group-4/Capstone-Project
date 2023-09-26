import React from 'react';
import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const InfoComp = () => {
  const { language, info1 } = useSelector((state) => state);

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            flexWrap: 'no-wrap',
            mt: 10,
            width: 500,
            height: '80%',
            bgcolor: 'background.paper',
            zIndex: 'modal',
            fontSize: '1rem',
            fontWeight: '500',
            border: '2px solid #000',
            boxShadow: 24,
            borderRadius: '15px',
            p: 4,
            overflowY: 'scroll',
          }}
        >
          <div id="info-title">
            Tier 1 - Introductory Phrases & Greetings <hr id="bold-hr"></hr>
          </div>
          <div className="row">
            <div className="col">
              {'English'}
              <hr id="body-hr"></hr>
              {info1?.Info?.English['0'] !== undefined ? (
                info1.Info.English.map((word) => (
                  <ul
                    className="list-unstyled"
                    key={word}
                  >
                    <li>
                      <i className="fa-solid fa-globe"> </i>
                      {` `}
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
              <hr id="body-hr"></hr>
              {info1?.Info?.English['0'] !== undefined ? (
                info1.Info.Language?.map((word) => (
                  <ul
                    className="list-unstyled"
                    key={word}
                  >
                    <li>
                      <i className="fa-solid fa-earth-americas"> </i>
                      {` `}
                      {word}
                    </li>
                  </ul>
                ))
              ) : (
                <i className="fa-solid fa-spinner"> Loading </i>
              )}
            </div>
          </div>
          <hr id="body-hr"></hr>
        </Box>
      </Modal>
    </div>
  );
};

export default InfoComp;
