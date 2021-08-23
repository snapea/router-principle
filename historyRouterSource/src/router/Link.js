/*
 * @Author: wenzhenjin
 * @Date: 2021-08-23 17:20:30
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-23 17:58:14
 * @FilePath: /路由原理/history-router-source/src/router/Link.js
 */
import React from 'react'
import ContextType from './RouterContext'

class Link extends React.Component {
	render() {
		const { to, children } = this.props

		return (
			<a href={to} onClick={this.clickAction}>{children}</a>
		)
	}
	// a标签点击事件
	clickAction = (ev) => {
		// 1.阻止a标签默认事件
		ev.preventDefault()
		// 2.修改地址栏，此时还不刷新页面
		window.history.pushState({}, '', this.props.to)
		// 3.匹配路由
		// 注意: this指向Link组件，context里面Provider自定义方法changeCurrent
		this.context.changeCurrent(this.props.to)
	}
}

Link.contextType = ContextType

export default Link
