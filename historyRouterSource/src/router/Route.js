/*
 * @Author: wenzhenjin
 * @Date: 2021-08-23 17:20:37
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-23 17:51:09
 * @FilePath: /路由原理/history-router-source/src/router/Route.js
 */
import { Component } from 'react'
import ContextType from './RouterContext'

class Route extends Component {
	render(){
		const {path, component} = this.props
		const Com = component
		return this.context.currentPath === path ? <Com /> : null
	}
}
Route.contextType = ContextType

export default Route
