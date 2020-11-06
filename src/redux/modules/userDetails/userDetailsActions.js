import { createAction } from "redux-actions";
import { UserDetailsConstants } from "./userDetailsConstants";

export const fetchUserDetails = createAction(
  UserDetailsConstants.FETCH_USER_DETAILS
);
