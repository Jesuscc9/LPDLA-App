import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Stats from "../Pages/Stats";
import "../Global.css";
import { GlobalStyles } from "../Global.style";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Stats} />
        <Route exact path="/stats" component={Stats} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
