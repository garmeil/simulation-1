import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Shelf from "./components/Shelf/Shelf";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/bins/:id" component={Shelf} />
  </Switch>
);
