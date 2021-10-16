import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import {
  authUser,
  authIsSignedIn,
} from "../features/authentication/authenticationSlice";

function ProtectedRoute({ component: Component, ...rest }) {
  const isSignedIn = useSelector(authIsSignedIn);
  console.log(isSignedIn);
  return (
    <Route
      exact
      render={(props) => {
        if (isSignedIn) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
