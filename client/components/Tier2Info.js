import React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const InfoComp2 = (props) => {
  const { language, tier1complete } = useSelector((state) => state.reduxStore);
  const { info2 } = useSelector((state) => state);

  console.log("HERE IS INFO2 updated:", info2);

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loading = false;
  return (
    <div>
      <Box textAlign="center">
        <Button onClick={handleOpen} variant="contained">
          Open Info Token 2
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            flexWrap: "no-wrap",
            mt: 10,
            width: 500,
            height: "80%",
            bgcolor: "background.paper",
            zIndex: "modal",
            fontSize: "1rem",
            fontWeight: "500",
            border: "2px solid #000",
            boxShadow: 24,
            borderRadius: "15px",
            p: 4,
            overflowY: "scroll",
          }}
        >
          {tier1complete === false ? (
            <div id="info-title">Need to complete Quiz 1 first!</div>
          ) : (
            <div>
              <div id="info-title">
                Tier 2 - Objects & Places<hr id="bold-hr"></hr>
              </div>
              <div class="row">
                <div class="col">
                  {"English"}
                  <hr id="body-hr"></hr>
                  {loading === false &&
                  info2?.Info?.English["0"] !== undefined ? (
                    info2.Info.English.map((word) => (
                      <ul class="list-unstyled">
                        <li>
                          <i class="fa-solid fa-globe"> </i>
                          {` `}
                          {word}
                        </li>
                      </ul>
                    ))
                  ) : (
                    <i class="fa-solid fa-spinner"> Loading </i>
                  )}
                </div>
                <div class="col">
                  {language}
                  <hr id="body-hr"></hr>
                  {loading === false &&
                  info2?.Info?.English["0"] !== undefined ? (
                    info2.Info.Language.map((word) => (
                      <ul class="list-unstyled">
                        <li>
                          <i class="fa-solid fa-earth-americas"> </i>
                          {` `}
                          {word}
                        </li>
                      </ul>
                    ))
                  ) : (
                    <i class="fa-solid fa-spinner"> Loading </i>
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
    info2: state.info2,
  };
};

export default connect(mapState)(InfoComp2);
