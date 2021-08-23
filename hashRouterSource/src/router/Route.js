/*
 * @Author: wenzhenjin
 * @Date: 2021-08-23 15:29:30
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-23 16:29:50
 * @FilePath: /路由原理/hash-router-source/src/router/Route.js
 */
import { Component } from 'react'

import RouteContext from './RouteContext'

class Route extends Component {
	render() {
		//  props 为组件
		// 	<Route path="/one" component={One} />
		//  <Route path="/two" component={Two} />
		const { path, component } = this.props
		const Com = component
		// 判断地址栏的hash值是否等于当前路由配置，等于显示，不等于则为null
		return this.context.currentPath === path ? <Com /> : null
	}
}

Route.contextType = RouteContext
export default Route
