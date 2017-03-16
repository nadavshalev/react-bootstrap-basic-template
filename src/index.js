import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import List from './components/template/List';
//import About from './components/template/About';
import Template from './components/Template'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Template}>
      <IndexRoute component={List}></IndexRoute>
      <Route path="List" component={List}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
