import React from "react";
import { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setInfo2 } from "../store";

const InfoComp2 = (props) => {
  const { language, character } = useSelector((state) => state.reduxStore);
  console.log(language);
  const { setInfo2, info2 } = props;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(setInfo2(language));
    };
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div>
      <div id="info-title">Tier 2 - Objects & Places</div>
      <hr></hr>
      <div class="row">
        <div class="col">
          {"English"}
          {loading === false && info2?.Info?.English["0"] !== undefined
            ? info2.Info.English.map((word) => (
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
          {loading === false && info2?.Info?.English["0"] !== undefined
            ? info2.Info.Language.map((word) => (
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
    info2: state.info2,
  };
};

const mapDispatch = (dispatch) => {
  return {
    setInfo2(language) {
      dispatch(setInfo2(language));
    },
  };
};

export default connect(mapState, mapDispatch)(InfoComp2);
