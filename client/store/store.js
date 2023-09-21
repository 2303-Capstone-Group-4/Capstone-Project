import axios from 'axios';

const SET_POSITION = 'SET_POSITION';
const SET_LANGUAGE = 'SET_LANGUAGE';
const SET_CHARACTER = 'SET_CHARACTER';
const FETCH_STORE = 'FETCH_STORE';
const SET_INFO1 = 'SET_INFO1';

export const setPosition = (position) => {
  return {
    type: SET_POSITION,
    position,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    language,
  };
};

export const setCharacter = (character) => {
  return {
    type: SET_CHARACTER,
    character,
  };
};

export const setInfo1 = async (language) => {
  const response = await axios.get('/api/tier1', {
    params: { language },
  });
  return {
    type: SET_INFO1,
    info1: response.data,
  };
};

export const fetchStore = () => {
  return {
    type: FETCH_STORE,
  };
};

const initialState = {
  position: 0,
  language: 'spanish',
  character: 'char1',
  info1: {},
};

const reduxStore = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITION:
      return {
        ...state,
        position: action.position,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case SET_CHARACTER:
      return {
        ...state,
        character: action.character,
      };
    case SET_INFO1:
      return {
        ...state,
        info1: action.info1,
      };
    case FETCH_STORE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reduxStore;
