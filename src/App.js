import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Landing } from "./features/landing";
import { Login, Register, VerifyCode } from "./features/authentication";
import { useSelector } from "react-redux";
import { authUser } from "./features/authentication/authenticationSlice";

function App() {
  const isSignedUser = useSelector(authUser)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/verifycode" component={VerifyCode} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
