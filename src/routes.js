export default [
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  },
   {
      path: '/hello/',
      component: require('./pages/hello.vue')
  } ,
   {
      path: '/test/',
      component: require('./pages/test.vue')
  } ,
   {
      path: '/test2/',
      component: require('./pages/test2.vue')
  }
]