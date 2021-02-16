import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginScreen from "./login/screens/LoginScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
