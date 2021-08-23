/*
 * @Author: wenzhenjin
 * @Date: 2021-08-23 16:32:44
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-23 17:48:29
 * @FilePath: /路由原理/history-router-demo/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import One from './pages/One'
import Two from './pages/Two'

export default function App() {
	return (
		<Router>
			<nav>
        <li><Link to='/one'>one</Link></li>
        <li><Link to='/two'>two</Link></li>
      </nav>
      <Route path='/one' component={One} />
      <Route path='/two' component={Two} />
		</Router>
	)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
