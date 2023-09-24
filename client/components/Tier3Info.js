import React from 'react';
import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const InfoComp3 = (props) => {
  const { language, tier2complete, info3 } = useSelector((state) => state);
  // const { info3 } = useSelector((state) => state);

  // console.log("HERE IS INFO3 updated:", info3);

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
          Open Info Token 3
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
          {tier2complete === false ? (
            <div id="info-title">Need to complete Quiz 2 first!</div>
          ) : (
            <div>
              <div id="info-title">
                Tier 3 - Asking for Information<hr id="bold-hr"></hr>
              </div>
              <div className="row">
                <div className="col">
                  {'English'}
                  <hr id="body-hr"></hr>
                  {loading === false &&
                  info3?.Info?.English['0'] !== undefined ? (
                    info3.Info.English.map((word) => (
                      <ul
                        className="list-unstyled"
                        key={word}
                      >
                        <li>
                          <i className="fa-solid fa-globe"> </i>
                          {word}
                          {` `}
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
                  {loading === false &&
                  info3?.Info?.English['0'] !== undefined ? (
                    info3.Info.Language.map((word) => (
                      <ul className="list-unstyled">
                        <li>
                          <i class="fa-solid fa-earth-americas"> </i>
                          {word}
                          {` `}
                        </li>
                      </ul>
                    ))
                  ) : (
                    <i className="fa-solid fa-spinner"> Loading </i>
                  )}
                </div>
              </div>
              <hr></hr>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

const mapState = (state) => {
  return {
    info3: state.info3,
  };
};

export default connect(mapState)(InfoComp3);
