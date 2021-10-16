import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./shared/ProtectedRoute";
import UnprotectedRoute from "./shared/UnprotectedRoute";
import { Landing } from "./features/landing";
import { Login, Register, VerifyCode } from "./features/authentication";
import { Home } from "./features/feed";
import { EditProfile } from "./features/profile";
import { useDispatch } from "react-redux";
import { updateAuth } from "./features/authentication/authenticationSlice";
import { Hub, Auth } from "aws-amplify";

function App() {
  const dispatch = useDispatch();
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    let updateUser = async () => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        // update store
        dispatch(updateAuth({ isSignedIn: true, user: user }));
      } catch {
        // update store
        dispatch(updateAuth({ isSignedIn: false, user: null }));
      } finally {
        setIsInitialized(true);
      }
    };
    Hub.listen("auth", updateUser); // listen for login / signup events
    updateUser();
    return () => {
      Hub.remove("auth", updateUser);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      {isInitialized ? (
        <Switch>
          {/* Routes that can be accessed when not authenticated */}
          <UnprotectedRoute exact path="/" component={Landing} />
          <UnprotectedRoute exact path="/login" component={Login} />
          <UnprotectedRoute exact path="/signup" component={Register} />
          <UnprotectedRoute exact path="/verifycode" component={VerifyCode} />
          {/* Routes that can be accessed when authenticated */}
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute
            exact
            path="/settings/profile"
            component={EditProfile}
          />
          {/* Public routes, can be accessed anytime */}
        </Switch>
      ) : null}
    </BrowserRouter>
  );
}

export default App;
