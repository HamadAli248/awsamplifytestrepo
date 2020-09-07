import React from "react";
import { Switch, Route } from "react-router-dom";
import login from "./Home";

const Main = () => (
  <Switch>
    <Route exact path="/login" component={login} />
  </Switch>
);
export default Main;
