import React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setInfo3 } from "../store";

const InfoComp3 = (props) => {
  const { language, character } = useSelector((state) => state.reduxStore);
  console.log(language);
  const { setInfo3, info3 } = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(setInfo3(language));
    };
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div>
      <div id="info-title">Tier 3 - Asking for Information</div>
      <hr></hr>
      <div class="row">
        <div class="col">
          {"English"}
          {loading === false && info3?.Info?.English["0"] !== undefined
            ? info3.Info.English.map((word) => (
                <ul class="list-unstyled">
                  <li>
                    <i class="fa-solid fa-globe"> </i>
                    {word}
                  </li>
                </ul>
              ))
            : "Loading..."}
        </div>
        <div class="col">
          {language}
          {loading === false && info3?.Info?.English["0"] !== undefined
            ? info3.Info.Language.map((word) => (
                <ul class="list-unstyled">
                  <li>
                    <i class="fa-solid fa-earth-americas"> </i>
                    {word}
                  </li>
                </ul>
              ))
            : "Loading..."}
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
    info3: state.info3,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setInfo3(language) {
      dispatch(setInfo3(language));
    },
  };
};

export default connect(mapState, mapDispatch)(InfoComp3);
