// Redux imports
import thunk from "redux-thunk";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMeddleware from "redux-saga";

import coinReducer from "./reducer/coin";

// For redux dev tool to see state
const composeEnhancer =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

// Root reducers
const rootReducer = combineReducers({
  coin: coinReducer,
});

// Saga middleware
// const sagaMiddleware = createSagaMeddleware();

// Store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// Run generator functions by sagaMiddleware
// sagaMiddleware.run(watchAuth);

export default store;
