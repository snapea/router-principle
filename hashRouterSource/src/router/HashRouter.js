/*
 * @Author: wenzhenjin
 * @Date: 2021-08-23 15:13:20
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-23 16:24:53
 * @FilePath: /路由原理/hash-router-source/src/router/HashRouter.js
 */
import { Component } from 'react'
import RouteContext from './RouteContext'

export default class HashRouter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: window.location.hash.replace(/#/, ''),
		}
	}
	// 页面加载
	componentDidMount() {
		// 舰艇地址栏变化，每当地址栏
		window.addEventListener('hashchange', ev => {
			console.log('hashchange执行..')

			// 获取地址栏的地址
			const hash = window.location.hash
			console.log(hash)
			// 删除#
			const current = hash.substr(1, hash.length - 1)
			this.setState({ current })
		})
	}

	render() {
		console.log(this.state.current)
		return <RouteContext.Provider value={{ currentPath: this.state.current }}>{this.props.children}</RouteContext.Provider>
	}
}
