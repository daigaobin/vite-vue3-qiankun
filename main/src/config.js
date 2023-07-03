export default {
  subApps: [
    // {
    //   name: 'app-vue3', // 子应用名称，跟package.json一致
    //   entry: '//localhost:7001', // 子应用入口，本地环境下指定端口
    //   container: '#sub-container', // 挂载子应用的dom
    //   activeRule: '/app/app-vue3', // 路由匹配规则
    //   props: {} // 主应用与子应用通信传值
    // },
    {
      name: "app-vue2",
      entry:
        process.env.NODE_ENV === "development"
          ? "//localhost:7001"
          : "/app-vue2/index.html",
      container: "#sub-container",
      activeRule:
        process.env.NODE_ENV === "development"
          ? "/app-vue2"
          : "/app-vue2", // 路由匹配规则,
      props: {},
    },
  ],
};
