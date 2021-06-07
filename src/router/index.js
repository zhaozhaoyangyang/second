import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/sy",
    },

    {
      path: "/reg",
      component: () => import("../pages/reg"),
      meta: {
        headerShow: false,
        footerShow: false,
        backshow:false
      },
    },
    {
      path: "/login",
      component: () => import("../pages/login"),
      meta: {
        headerShow: false,
        footerShow: false,
        backshow:false
      },
    },
    {
      path: "/sy",
      component: () => import("../pages/sy"),
      meta: {
        headerShow: false,
        footerShow: true,
        backshow:false
      },
    },
    {
      path: "/fl",
      component: () => import("../pages/fl"),
      meta: {
        headerShow: true,
        footerShow: true,
        backshow:false
      },
    },
    {
      path: "/singerr/:id",
      component: () => import("../pages/fl/singerr"),
      meta: {
        headerShow: false,
        footerShow: false,
        backshow:true
      },
    },
    {
      path: "/play",
      component: () => import("../pages/play"),
      meta: {
        headerShow: false,
        footerShow: true,
        backshow:false
      },
    },
    {
      path: "/radio",
      component: () => import("../pages/radio"),
      meta: {
        headerShow: true,
        footerShow: true,
        backshow:false
      },
    },
    {
      path: "/mine",
      component: () => import("../pages/mine"),
      meta: {
        headerShow: false,
        footerShow: true,
        backshow:false
      },
    },
    {
      path: "/xiaoxi",
      component: () => import("../pages/mine/xiaoxi"),
      meta: {
        headerShow: false,
        footerShow: true,
      },
    },
    {
      path: "/geshou",
      component: () => import("../pages/mine/geshou"),
      meta: {
        headerShow: false,
        footerShow: true,
      },
    },
  ],
  linkActiveClass: "active",
});

export default router;
