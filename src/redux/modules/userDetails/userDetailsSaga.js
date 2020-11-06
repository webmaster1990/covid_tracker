import { call, takeLatest } from "redux-saga/effects";
import { request } from "../../../utils/fetch";
import { UserDetailsConstants } from "./userDetailsConstants";

function* getUserDetails(action) {
  yield call(
    request({
      type: UserDetailsConstants.FETCH_USER_DETAILS,
      method: "GET",
      url: `user/details`
    }),
    action
  );
}

export default function* rootSaga() {
  yield takeLatest(UserDetailsConstants.FETCH_USER_DETAILS, getUserDetails);
}
