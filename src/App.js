import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Landing } from "./features/landing";
import { Login } from "./features/login";
import { Register } from "./features/register";

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
