import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { connectRouter } from "connected-react-router";
import userDetailsSaga from "./userDetails/userDetailsSaga";
import { userDetailsReducer } from "./userDetails/userDetailsReducer";

export const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    userDetails: userDetailsReducer
  });

export const rootSaga = function*() {
  yield all([userDetailsSaga()]);
};
