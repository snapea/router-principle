/*
 * @Author: wenzhenjin
 * @Date: 2021-08-23 11:55:42
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-23 15:30:04
 * @FilePath: /路由原理/hash-router-source/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import One from './pages/One'
import Two from './pages/Two'
// import { HashRouter as Router, Route, Link} from 'react-router-dom'
import HashRouter from './router/HashRouter';
import Route from './router/Route';
import Link from './router/Link';

export default function App (){
  return (
    <HashRouter>
      <nav>
        <li><Link to='/one'>one</Link></li>
        <li><Link to='/two'>two</Link></li>
      </nav>
      <Route path="/one" component={One} />
      <Route path="/two" component={Two} />
    </HashRouter>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
