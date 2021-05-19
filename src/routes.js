import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./view/Home/Home";
import Login from "./view/Login/Login";
import AddCoin from "./view/AddCoin/AddCoin";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/coinForm">
        <AddCoin />
      </Route>
    </Switch>
  );
};

export default Routes;
