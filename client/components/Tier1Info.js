import React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setInfo1 } from "../store";
import { Link } from "react-router-dom";

const InfoComp = (props) => {
  const { language, character } = useSelector((state) => state.reduxStore);
  console.log(language);
  const { setInfo1, info1 } = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(setInfo1(language));
    };
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div>
      <div id="info-title">Tier 1 - Introductory Phrases & Greetings</div>
      <hr></hr>
      <div class="row">
        <div class="col">
          {"English"}
          {loading === false && info1?.Info?.English["0"] !== undefined ? (
            info1.Info.English.map((word) => (
              <ul class="list-unstyled">
                <li>
                  <i class="fa-solid fa-globe"> </i>
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
          {loading === false && info1?.Info?.English["0"] !== undefined ? (
            info1.Info.Language.map((word) => (
              <ul class="list-unstyled">
                <li>
                  <i class="fa-solid fa-earth-americas"> </i>
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
      <div id="info-title">
        <Link to="/GameBoard">Back to Game Board</Link>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    info1: state.info1,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setInfo1(language) {
      dispatch(setInfo1(language));
    },
  };
};

export default connect(mapState, mapDispatch)(InfoComp);
