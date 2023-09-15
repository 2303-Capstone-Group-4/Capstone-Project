import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setLanguage, setCharacter } from "../store/store";

const LandingPage = () => {
  const [language, changeLanguage] = useState("");
  const [selectedChar, changeSelectedChar] = useState({
    char1: false,
    char2: false,
    char3: false,
    char4: false,
  });
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const changeRoute = () => {
    if (
      !selectedChar.char1 &&
      !selectedChar.char2 &&
      !selectedChar.char3 &&
      !selectedChar.char4 &&
      language === ""
    ) {
      alert("Make sure to enter a language and select a character!");
    } else if (language === "") {
      alert("Make sure to enter a language!");
    } else if (
      !selectedChar.char1 &&
      !selectedChar.char2 &&
      !selectedChar.char3 &&
      !selectedChar.char4
    ) {
      alert("Make sure to select a character!");
    } else {
      let path = "/GameBoard";
      let character = "";
      if (selectedChar.char4 === true) {
        character = "char4";
      } else if (selectedChar.char3 === true) {
        character = "char3";
      } else if (selectedChar.char2 === true) {
        character = "char2";
      } else {
        character = "char1";
      }
      dispatch(setLanguage(language));
      dispatch(setCharacter(character));
      navigate(path);
    }
  };

  const selectChar = (inputChar) => {
    let newState = {
      char1: false,
      char2: false,
      char3: false,
      char4: false,
    };
    if (selectedChar[inputChar] != true) {
      newState[inputChar] = true;
    }
    changeSelectedChar(newState);
  };

  return (
    <div id="home-page">
      <h2 id="input-label">Enter language Here:</h2>
      <input
        id="language-input"
        value={language}
        onChange={(ev) => changeLanguage(ev.target.value)}
      />
      <div id="character-selector">
        <h2 id="character-label">Select Character Here:</h2>
        <div id="char-images">
          <motion.img
            src={"./images/20230907_180304.jpg"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={selectedChar.char1.toString() + "-selected"}
            onClick={() => selectChar("char1")}
          />
          <motion.img
            src={"./images/20230907_180322.jpg"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={selectedChar.char2.toString() + "-selected"}
            onClick={() => selectChar("char2")}
          />
          <motion.img
            src={"./images/20230907_180337.jpg"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={selectedChar.char3.toString() + "-selected"}
            onClick={() => selectChar("char3")}
          />
          <motion.img
            src={"./images/20230907_180348.jpg"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={selectedChar.char4.toString() + "-selected"}
            onClick={() => selectChar("char4")}
          />
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="start-button"
        onClick={changeRoute}
      >
        Click to Start!
      </motion.button>
    </div>
  );
};

export default LandingPage;
