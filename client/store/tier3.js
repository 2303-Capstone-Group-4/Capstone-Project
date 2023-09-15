import axios from "axios";
const info3 = (state = {}, action) => {
  if (action.type === "SET_INFO3") {
    return { ...state, ...action.info3 };
  }
  return { ...state };
};

//Get tier 3 of information
export const setInfo3 = (lang) => {
  return async (dispatch) => {
    const response = await axios.get("/api/tier3", {
      params: { language: lang },
    });
    dispatch({ type: "SET_INFO3", info3: response.data });
  };
};

export default info3;
