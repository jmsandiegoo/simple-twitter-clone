import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Landing } from "./features/landing";
import Login from "./features/landing/Login";
import Register from "./features/landing/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
