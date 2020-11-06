import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import { authRoutes } from "../routes";
import { fetchUserDetails } from "../redux/modules/userDetails/userDetailsActions";

const LoggedInRoutes = user =>
  authRoutes.map((r, i) => (
    <Route
      key={i}
      path={r.path}
      exact={r.exact}
      render={props => <r.main {...props} user={user || {}} />}
    />
  ));

// const LoggedOutRoutes = unAuthRoutes.map((r, i) => (
//   <Route
//     key={i}
//     path={r.path}
//     exact={r.exact}
//     render={props => <r.main {...props} />}
//   />
// ));

const Main = React.memo(({ getUserDetails }) => {
  const fetchUserDetails = () => {
    const onSuccess = () => {};
    const onFail = () => {};
    getUserDetails({ onSuccess, onFail });
  };
  fetchUserDetails();
  return (
    <>
      <Switch>{LoggedInRoutes({})}</Switch>
    </>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: payload => dispatch(fetchUserDetails(payload))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Main));
