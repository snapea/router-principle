/*
 * @Author: wenzhenjin
 * @Date: 2021-08-23 17:20:18
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-23 18:04:23
 * @FilePath: /路由原理/history-router-source/src/router/HistoryRouter.js
 */
import { Component } from 'react'
import Context from './RouterContext'

export default class HistoryRouter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: window.location.pathname,
		}
	}
	componentDidMount() {
		// popstate监听地址栏前进后退
		window.addEventListener('popstate', () => {
			console.log('popstate执行...')
			// console.log(window.location.pathname)
			this.setState({ current: window.location.pathname })
		})
	}
	render() {
		return (
			<Context.Provider
				value={{
					currentPath: this.state.current,
					changeCurrent: value => {
						this.setState({ current: value })
					},
				}}
			>
				{this.props.children}
			</Context.Provider>
		)
	}
}
