import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { GlobalStyles } from "./fonts/fonts";

import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Stats from "./Pages/Stats";
import { store } from "./redux/store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <GlobalStyles /> */}
        <Switch>
          <Route exact path="/" component={Stats} />
          <Route exact path="/stats" component={Stats} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
