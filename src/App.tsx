import React from "react";

import "./App.css";
// import { BrowserRouter as Router, Switch  } from "react-router-dom";
import {
  Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "./component/Home";

function App() {
  return (
    <>
      <Home />
    </>
    // <BrowserRouter>
    // <Switch>
    //   <Route path="/" exact>
    //     <Redirect to="/login" />
    //   </Route>
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
