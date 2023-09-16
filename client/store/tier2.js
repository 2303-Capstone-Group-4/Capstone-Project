import axios from "axios";
const info2 = (state = {}, action) => {
  if (action.type === "SET_INFO2") {
    return { ...state, ...action.info2 };
  }
  return { ...state };
};

//Get tier 2 of information
export const setInfo2 = (lang) => {
  return async (dispatch) => {
    const response = await axios.get("/api/tier2", {
      params: { language: lang },
    });
    dispatch({ type: "SET_INFO2", info2: response.data });
  };
};

export default info2;
