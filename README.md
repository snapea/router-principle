
# router原理简单封装

> 注: 1.demo为react-router-dom 2.使用 source为封装代码，核心代码在src/router

我们只关心两件事：

- 1.点击超链接是否会跳转
- 2.点击浏览器前进/后退是否能达到页面不刷新，且地址栏变化且组件产生变化

## hash路由原理

![图片](./assets/hash路由原理.png)

当为hash模式时，浏览器不管在超链接跳转和地址栏变化，都会执行hashchange，所以我们只需监听hashchange进行相应的处理

## history路由原理

![图片](./assets/history路由原理.png)

当为history模式时，超链接跳转时阻止a标签的默认事件，进行处理

前进后退时监听popstate，进行页面以及地址栏变化