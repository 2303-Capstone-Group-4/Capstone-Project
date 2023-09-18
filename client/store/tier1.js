import axios from "axios";
const info1 = (state = {}, action) => {
  if (action.type === "SET_INFO1") {
    return { ...state, ...action.info1 };
  }
  return { ...state };
};

//Get tier 1 of information
export const setInfo1 = (lang) => {
  return async (dispatch) => {
    const response = await axios.get("/api/tier1", {
      params: { language: lang },
    });
    dispatch({ type: "SET_INFO1", info1: response.data });
  };
};

export default info1;
