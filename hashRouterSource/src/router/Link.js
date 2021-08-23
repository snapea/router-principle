/*
 * @Author: wenzhenjin
 * @Date: 2021-08-23 15:29:37
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-23 15:38:20
 * @FilePath: /路由原理/hash-router-source/src/router/Link.js
 */
import React from 'react'

export default function Link({ to, children }) {
	return (
		<a href={ `#${to}` }>{ children }</a>
	)
}
