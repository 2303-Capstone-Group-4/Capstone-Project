const SET_POSITION = 'SET_POSITION';
const SET_LANGUAGE = 'SET_LANGUAGE';
const SET_CHARACTER = 'SET_CHARACTER';
const FETCH_STORE = 'FETCH_STORE';

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

export const fetchStore = () => {
  return {
    type: FETCH_STORE,
  };
};

const initialState = {
  position: 0,
  language: 'spanish',
  character: 'char1',
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
    case FETCH_STORE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reduxStore;
