
import * as React from 'react';
import Popup from 'reactjs-popup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo1 } from '../store';

const QuizPopup = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { language } = useSelector((state) => state.reduxStore);
  const info1 = useSelector((state) => state.reduxStore.info1);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setInfo1(language));
  }, []);

  const testAnswers = (ev) => {
    ev.preventDefault();
    console.log('FUCKNUTS');
  };

  return (
    <div>
      <Box textAlign="center">

        <Button
          onClick={handleOpen}
          variant="contained"
        >
          Re-Open Quiz Session
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
          {info1?.Quiz?.Questions ? (
            <div>
              {info1.Quiz.Questions.map((question, index) => {
                return (
                  <FormControl key={index}>
                    <FormLabel>{question}</FormLabel>
                    <RadioGroup>
                      {info1.Quiz.Options
                        ? info1.Quiz.Options[index].map((option) => {
                            return (
                              <FormControlLabel
                                value={option}
                                control={<Radio />}
                                label={option}
                                key={option}
                              />
                            );
                          })
                        : info1.Quiz.Questions.Options.map((option) => {
                            return (
                              <FormControlLabel
                                value={option}
                                control={<Radio />}
                                label={option}
                                key={option}
                              />
                            );
                          })}
                    </RadioGroup>
                  </FormControl>
                );
              })}
              <div>
                <Button>Submit</Button>
              </div>
            </div>
          ) : (
            <div>
              {info1?.Quiz?.Question1 ? (
                <div>
                  <FormControl key={1}>
                    <FormLabel>{info1.Quiz.Question1.Question}</FormLabel>
                    <RadioGroup>
                      {info1.Quiz.Question1.Options.map((option) => (
                        <FormControlLabel
                          value={option}
                          control={<Radio />}
                          label={option}
                          key={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormControl key={2}>
                    <FormLabel>{info1.Quiz.Question2.Question}</FormLabel>
                    <RadioGroup>
                      {info1.Quiz.Question2.Options.map((option) => (
                        <FormControlLabel
                          value={option}
                          control={<Radio />}
                          label={option}
                          key={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormControl key={3}>
                    <FormLabel>{info1.Quiz.Question3.Question}</FormLabel>
                    <RadioGroup>
                      {info1.Quiz.Question3.Options.map((option) => (
                        <FormControlLabel
                          value={option}
                          control={<Radio />}
                          label={option}
                          key={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <div>
                    <Button type="submit">Submit</Button>
                  </div>
                </div>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default QuizPopup;
