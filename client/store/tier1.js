import axios from "axios";
const info = (state = {}, action) => {
  if (action.type === "SET_INFO") {
    return { ...state, ...action.info };
  }
  return { ...state };
};

//Get 5 day weather details
export const setInfo = (lang) => {
  return async (dispatch) => {
    const response = await axios.get("/api/tier1", {
      params: { language: lang },
    });
    dispatch({ type: "SET_INFO", info: response.data });
  };
};

export default info;
