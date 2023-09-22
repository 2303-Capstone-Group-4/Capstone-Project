import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo1 } from '../store';

const QuizPopup = () => {
  const [open, setOpen] = React.useState(true);
  const [answers, setAnswers] = React.useState({
    question1: '',
    question2: '',
    question3: '',
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { language, info1 } = useSelector((state) => state.reduxStore);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(answers);
  }, [answers]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    for (let i = 0; i < 12; i++) {
      if (ev.target.elements[i].checked === true) {
        if (i >= 0 && i < 4) {
          setAnswers({
            ...answers,
            question1: ev.target.elements[i].value,
          });
        } else if (i >= 4 && i < 8) {
          setAnswers({
            ...answers,
            question2: ev.target.elements[i].value,
          });
        } else if (i >= 8 && i < 12) {
          setAnswers({
            ...answers,
            question3: ev.target.elements[i].value,
          });
        }
      }
    }
    console.log(answers);
  };

  return (
    <div>
      <Box textAlign="center">
        <Button
          onClick={handleOpen}
          variant="contained"
        >
          Re-Open Quiz 1
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
          <form
            onSubmit={(ev) => {
              handleSubmit(ev);
            }}
          >
            <FormControl>
              <div>
                {info1?.Quiz?.Questions ? (
                  <div>
                    {info1.Quiz.Questions.map((question, index) => {
                      return (
                        <div key={question}>
                          <FormLabel>{question}</FormLabel>
                          <RadioGroup>
                            {info1.Quiz.Options
                              ? info1.Quiz.Options[index]
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
                                : info1.Quiz.Options.map((option) => {
                                    return (
                                      <FormControlLabel
                                        value={option}
                                        control={<Radio />}
                                        label={option}
                                        key={option}
                                      />
                                    );
                                  })
                              : question.Options.map((option) => {
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
                        </div>
                      );
                    })}
                    <div>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {info1?.Quiz?.Question1 ? (
                      <div>
                        <FormLabel>
                          {info1.Quiz.Question1.Question
                            ? info1.Quiz.Question1.Question
                            : info1.Quiz.Question1}
                        </FormLabel>
                        <RadioGroup>
                          {info1.Quiz.Question1.Options
                            ? info1.Quiz.Question1.Options.map((option) => (
                                <FormControlLabel
                                  value={option}
                                  control={<Radio />}
                                  label={option}
                                  key={option}
                                />
                              ))
                            : info1.Quiz.Options1.map((option) => (
                                <FormControlLabel
                                  value={option}
                                  control={<Radio />}
                                  label={option}
                                  key={option}
                                />
                              ))}
                        </RadioGroup>
                        <FormLabel>
                          {info1.Quiz.Question2.Question
                            ? info1.Quiz.Question2.Question
                            : info1.Quiz.Question2}
                        </FormLabel>
                        <RadioGroup>
                          {info1.Quiz.Question2.Options
                            ? info1.Quiz.Question2.Options.map((option) => (
                                <FormControlLabel
                                  value={option}
                                  control={<Radio />}
                                  label={option}
                                  key={option}
                                />
                              ))
                            : info1.Quiz.Options2.map((option) => (
                                <FormControlLabel
                                  value={option}
                                  control={<Radio />}
                                  label={option}
                                  key={option}
                                />
                              ))}
                        </RadioGroup>
                        <FormLabel>
                          {info1.Quiz.Question3.Question
                            ? info1.Quiz.Question3.Question
                            : info1.Quiz.Question3}
                        </FormLabel>
                        <RadioGroup>
                          {info1.Quiz.Question3.Options
                            ? info1.Quiz.Question3.Options.map((option) => (
                                <FormControlLabel
                                  value={option}
                                  control={<Radio />}
                                  label={option}
                                  key={option}
                                />
                              ))
                            : info1.Quiz.Options3.map((option) => (
                                <FormControlLabel
                                  value={option}
                                  control={<Radio />}
                                  label={option}
                                  key={option}
                                />
                              ))}
                        </RadioGroup>
                        <div>
                          <button type="submit">Submit</button>
                        </div>
                      </div>
                    ) : (
                      <div>Loading...</div>
                    )}
                  </div>
                )}
              </div>
            </FormControl>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default QuizPopup;
