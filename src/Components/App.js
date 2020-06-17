import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../Components/Layout';
import Home from '../Pages/Home';
import Stats from '../Pages/Stats';

function App(){
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/stats" component={Stats}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
}

export default App;