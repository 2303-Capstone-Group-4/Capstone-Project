import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { setTier2Comp } from "../store";

const QuizPopup2 = () => {
  const [open, setOpen] = React.useState(true);
  const [answers, setAnswers] = React.useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { info2 } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (
      answers.question1 !== "" &&
      answers.question2 !== "" &&
      answers.question3 !== ""
    ) {
      if (info2.Quiz?.Answers) {
        if (
          answers.question1 === info2.Quiz.Answers[0] &&
          answers.question2 === info2.Quiz.Answers[1] &&
          answers.question3 === info2.Quiz.Answers[2]
        ) {
          alert("Correct, you may now proceed!");
          handleClose();
          dispatch(setTier2Comp(true));
        } else {
          alert("Incorrect, you must try again!");
        }
      } else if (info2.Quiz?.Question1) {
        if (info2.Quiz.Question1.Answer) {
          if (
            answers.question1 === info2.Quiz.Question1.Answer &&
            answers.question2 === info2.Quiz.Question2.Answer &&
            answers.question3 === info2.Quiz.Question3.Answer
          ) {
            alert("Correct, you may now proceed!");
            handleClose();
            dispatch(setTier2Comp(true));
          } else {
            alert("Incorrect, you must try again!");
          }
        } else if (info2.Quiz?.Answer1) {
          if (
            answers.question1 === info2.Quiz.Answer1 &&
            answers.question2 === info2.Quiz.Answer2 &&
            answers.question3 === info2.Quiz.Answer3
          ) {
            alert("Correct, you may now proceed!");
            handleClose();
            dispatch(setTier2Comp(true));
          } else {
            alert("Incorrect, you must try again!");
          }
        }
      } else if (info2.Quiz?.Questions[0]) {
        if (
          answers.question1 === info2.Quiz.Questions[0].Answer &&
          answers.question2 === info2.Quiz.Questions[1].Answer &&
          answers.question3 === info2.Quiz.Questions[2].Answer
        ) {
          alert("Correct, you may now proceed!");
          handleClose();
          dispatch(setTier2Comp(true));
        } else {
          alert("Incorrect, you must try again!");
        }
      }
    }
  }, [submitted]);

  const updateAnswers = (ev) => {
    if (ev.target.name === ":r0:" || parseInt(ev.target.name[2]) % 3 === 0) {
      setAnswers({ ...answers, question1: ev.target.value });
    } else if (
      ev.target.name === ":r1:" ||
      (parseInt(ev.target.name[2]) - 1) % 3 === 0
    ) {
      setAnswers({ ...answers, question2: ev.target.value });
    } else if (
      ev.target.name === ":r2:" ||
      (parseInt(ev.target.name[2]) - 2) % 3 === 0
    ) {
      setAnswers({ ...answers, question3: ev.target.value });
    }
  };

  return (
    <div>
      <Box textAlign="center">
        <Button onClick={handleOpen} variant="contained">
          Re-Open Quiz 2
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
                <div id="info-title">
                  Tier 2 Quiz <hr id="bold-hr"></hr>
                </div>
                {info2?.Quiz?.Questions ? (
                  <div>
                    <hr id="body-hr"></hr>
                    {info2.Quiz.Questions.map((question, index) => {
                      return (
                        <div key={index}>
                          <FormLabel>
                            {question.Question ? question.Question : question}
                          </FormLabel>
                          <RadioGroup name={`:r${index}:`}>
                            {info2.Quiz.Options
                              ? info2.Quiz.Options[index]
                                ? info2.Quiz.Options[index].map((option) => {
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
                                : info2.Quiz.Options.map((option) => {
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
                      <hr id="body-hr"></hr>

                      <button type="submit">Submit</button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <hr id="body-hr"></hr>

                    {info2?.Quiz?.Question1 ? (
                      <div>
                        <FormLabel>
                          {info2.Quiz.Question1.Question
                            ? info2.Quiz.Question1.Question
                            : info2.Quiz.Question1}
                        </FormLabel>
                        <RadioGroup name=":r0:">
                          {info2.Quiz.Question1.Options
                            ? info2.Quiz.Question1.Options.map(
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
                            : info2.Quiz.Options1.map((option, index2) => (
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
                          {info2.Quiz.Question2.Question
                            ? info2.Quiz.Question2.Question
                            : info2.Quiz.Question2}
                        </FormLabel>
                        <RadioGroup name=":r1:">
                          {info2.Quiz.Question2.Options
                            ? info2.Quiz.Question2.Options.map(
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
                            : info2.Quiz.Options2.map((option, index2) => (
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
                          {info2.Quiz.Question3.Question
                            ? info2.Quiz.Question3.Question
                            : info2.Quiz.Question3}
                        </FormLabel>
                        <RadioGroup name=":r2:">
                          {info2.Quiz.Question3.Options
                            ? info2.Quiz.Question3.Options.map(
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
                            : info2.Quiz.Options3.map((option, index2) => (
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
                          <hr id="body-hr"></hr>

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

export default QuizPopup2;
