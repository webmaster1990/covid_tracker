import { handleActions } from "redux-actions";
import { initialUserDetailsState } from "./initialUserDetailsState";
import { UserDetailsConstants } from "./userDetailsConstants";
import {
  requestFail,
  requestPending,
  requestSuccess
} from "../../../utils/fetch";

export const userDetailsReducer = handleActions(
  {
    [requestSuccess(UserDetailsConstants.FETCH_USER_DETAILS)]: (
      state,
      action
    ) => ({
      ...state,
      details: action.payload.user || null,
      fetchUserDetailsLoading: false,
      fetchUserDetailsFailure: false,
      fetchUserDetailsLoaded: true
    }),
    [requestPending(UserDetailsConstants.FETCH_USER_DETAILS)]: state => ({
      ...state,
      fetchUserDetailsLoading: true,
      fetchUserDetailsLoaded: false,
      fetchUserDetailsFailure: false
    }),
    [requestFail(UserDetailsConstants.FETCH_USER_DETAILS)]: state => ({
      ...state,
      fetchUserDetailsLoading: false,
      fetchUserDetailsLoaded: true,
      fetchUserDetailsFailure: true
    })
  },
  initialUserDetailsState()
);
