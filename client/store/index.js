import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reduxStore from './store';
// import info1 from './tier1';
// import info2 from './tier2';
// import info3 from './tier3';

// const reducer = combineReducers({ reduxStore, info1, info2, info3 });
const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
);
const store = createStore(reduxStore, middleware);

export default store;
export * from './store';
// export * from './tier1';
// export * from './tier2';
// export * from './tier3';
