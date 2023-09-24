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
import { setTier1Comp } from '../store';

const QuizPopup1 = () => {
  const [open, setOpen] = React.useState(true);
  const [answers, setAnswers] = React.useState({
    question1: '',
    question2: '',
    question3: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { info1 } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (
      answers.question1 !== '' &&
      answers.question2 !== '' &&
      answers.question3 !== ''
    ) {
      if (info1.Quiz?.Answers) {
        if (
          answers.question1 === info1.Quiz.Answers[0] &&
          answers.question2 === info1.Quiz.Answers[1] &&
          answers.question3 === info1.Quiz.Answers[2]
        ) {
          console.log('Correct, bitch!');
          dispatch(setTier1Comp(true));
        } else {
          console.log('YOU WRONG, BITCH!');
        }
      } else if (info1.Quiz?.Question1) {
        if (info1.Quiz.Question1.Answer) {
          if (
            answers.question1 === info1.Quiz.Question1.Answer &&
            answers.question2 === info1.Quiz.Question2.Answer &&
            answers.question3 === info1.Quiz.Question3.Answer
          ) {
            console.log('Correct, bitch!');
            dispatch(setTier1Comp(true));
          } else {
            console.log('YOU WRONG, BITCH!');
          }
        } else if (info1.Quiz?.Answer1) {
          if (
            answers.question1 === info1.Quiz.Answer1 &&
            answers.question2 === info1.Quiz.Answer2 &&
            answers.question3 === info1.Quiz.Answer3
          ) {
            console.log('Correct, bitch!');
            dispatch(setTier1Comp(true));
          } else {
            console.log('YOU WRONG, BITCH!');
          }
        } else if (typeof info1.Quiz?.Questions[0]) {
          if (
            answers.question1 === info1.Quiz.Questions[0].Answer &&
            answers.question2 === info1.Quiz.Questions[1].Answer &&
            answers.question3 === info1.Quiz.Questions[2].Answer
          ) {
            console.log('Correct, bitch!');
            dispatch(setTier1Comp(true));
          } else {
            console.log('YOU WRONG, BITCH!');
          }
        }
      }
    } else {
      console.log('Complete the quiz, BITCH');
    }
  }, [submitted]);

  const updateAnswers = (ev) => {
    if (ev.target.name === ':r0:') {
      setAnswers({ ...answers, question1: ev.target.value });
    } else if (ev.target.name === ':r1:') {
      setAnswers({ ...answers, question2: ev.target.value });
    } else if (ev.target.name === ':r2:') {
      setAnswers({ ...answers, question3: ev.target.value });
    }
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
              ev.preventDefault();
              if (submitted) {
                setSubmitted(false);
              } else setSubmitted(true);
            }}
          >
            <FormControl>
              <div>
                {info1?.Quiz?.Questions ? (
                  <div>
                    {info1.Quiz.Questions.map((question, index) => {
                      return (
                        <div key={index}>
                          <FormLabel>
                            {question.Question ? question.Question : question}
                          </FormLabel>
                          <RadioGroup>
                            {info1.Quiz.Options
                              ? info1.Quiz.Options[index]
                                ? info1.Quiz.Options[index].map((option) => {
                                    return (
                                      <FormControlLabel
                                        value={option}
                                        control={
                                          <Radio
                                            onClick={(ev) => updateAnswers(ev)}
                                          />
                                        }
                                        label={option}
                                        key={option}
                                      />
                                    );
                                  })
                                : info1.Quiz.Options.map((option) => {
                                    return (
                                      <FormControlLabel
                                        value={option}
                                        control={
                                          <Radio
                                            onClick={(ev) => updateAnswers(ev)}
                                          />
                                        }
                                        label={option}
                                        key={option}
                                      />
                                    );
                                  })
                              : question.Options.map((option) => {
                                  return (
                                    <FormControlLabel
                                      value={option}
                                      control={
                                        <Radio
                                          onClick={(ev) => updateAnswers(ev)}
                                        />
                                      }
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
                            ? info1.Quiz.Question1.Options.map(
                                (option, index2) => (
                                  <FormControlLabel
                                    value={option}
                                    control={
                                      <Radio
                                        onClick={(ev) => updateAnswers(ev)}
                                        label={index2}
                                      />
                                    }
                                    label={option}
                                    key={option}
                                  />
                                )
                              )
                            : info1.Quiz.Options1.map((option, index2) => (
                                <FormControlLabel
                                  value={option}
                                  control={
                                    <Radio
                                      onClick={(ev) => updateAnswers(ev)}
                                      label={index2}
                                    />
                                  }
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
                            ? info1.Quiz.Question2.Options.map(
                                (option, index2) => (
                                  <FormControlLabel
                                    value={option}
                                    control={
                                      <Radio
                                        onClick={(ev) => updateAnswers(ev)}
                                        label={index2}
                                      />
                                    }
                                    label={option}
                                    key={option}
                                  />
                                )
                              )
                            : info1.Quiz.Options2.map((option, index2) => (
                                <FormControlLabel
                                  value={option}
                                  control={
                                    <Radio
                                      onClick={(ev) => updateAnswers(ev)}
                                      label={index2}
                                    />
                                  }
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
                            ? info1.Quiz.Question3.Options.map(
                                (option, index2) => (
                                  <FormControlLabel
                                    value={option}
                                    control={
                                      <Radio
                                        onClick={(ev) => updateAnswers(ev)}
                                        label={index2}
                                      />
                                    }
                                    label={option}
                                    key={option}
                                  />
                                )
                              )
                            : info1.Quiz.Options3.map((option, index2) => (
                                <FormControlLabel
                                  value={option}
                                  control={
                                    <Radio
                                      onClick={(ev) => updateAnswers(ev)}
                                      label={index2}
                                    />
                                  }
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

export default QuizPopup1;
