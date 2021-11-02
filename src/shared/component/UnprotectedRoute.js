import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authIsSignedIn } from "../../features/authentication/authenticationSlice";

function UnprotectedRoute({ component: Component, ...rest }) {
  const isSignedIn = useSelector(authIsSignedIn);
  console.log(isSignedIn);

  return (
    <Route
      exact
      render={(props) => {
        if (!isSignedIn) {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to="/home" />;
        }
      }}
    />
  );
}

export default UnprotectedRoute;
