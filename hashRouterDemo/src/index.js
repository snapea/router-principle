/*
 * @Author: wenzhenjin
 * @Date: 2021-08-23 11:55:42
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-23 14:32:45
 * @FilePath: /路由原理/hash-router-use/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import One from './pages/One'
import Two from './pages/Two'
import { HashRouter as Router, Route, Link} from 'react-router-dom'

export default function App (){
  return (
    <Router>
      <nav>
        <li><Link to='/one'>one</Link></li>
        <li><Link to='/two'>two</Link></li>
      </nav>
      <Route path="/one" component={One} />
      <Route path="/two" component={Two} />
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
