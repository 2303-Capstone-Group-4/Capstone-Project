import React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setInfo } from "../store";

// const info = {
//   Info: {
//     English: [
//       "Hello",
//       "Good morning",
//       "Good afternoon",
//       "Good evening",
//       "Good night",
//       "How are you?",
//       "I'm fine, thank you",
//       "Nice to meet you",
//       "Please",
//       "Thank you",
//     ],
//     Language: [
//       "Hola",
//       "Buenos días",
//       "Buenas tardes",
//       "Buenas noches",
//       "Buenas noches",
//       "¿Cómo estás?",
//       "Estoy bien, gracias",
//       "Mucho gusto",
//       "Por favor",
//       "Gracias",
//     ],
//   },
//   Quiz: {
//     Questions: [
//       "What is 'Good morning' in Spanish?",
//       "How do you say 'Nice to meet you' in Spanish?",
//       "What is the Spanish translation for 'Please'?",
//     ],
//     Options: [
//       ["Hola", "Buenos días", "Buenas tardes", "Buenas noches"],
//       ["Mucho gusto", "Estoy bien, gracias", "Por favor", "Gracias"],
//       ["Hola", "Buenos días", "Por favor", "Gracias"],
//     ],
//     Answers: ["Buenos días", "Mucho gusto", "Por favor"],
//   },
// };

const InfoComp = (props) => {
  const { language, character } = useSelector((state) => state.reduxStore);
  console.log(language);
  const { setInfo, info } = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(setInfo(language));
    };
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <div>This is a TEST</div>
      <div>
        {loading === false && info?.Info?.English["0"] !== undefined
          ? info?.Info?.English["0"]
          : "Loading..."}
      </div>
      {/* <div>{info ? info.Info.English["0"] : "Loading..."}</div> */}
    </div>
  );
};

const mapState = (state) => {
  return {
    info: state.info,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setInfo(language) {
      dispatch(setInfo(language));
    },
  };
};

export default connect(mapState, mapDispatch)(InfoComp);
// export default InfoComp;
