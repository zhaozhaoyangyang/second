import Vue from "vue";

import VueRouter from "vue-router";

// 这个错误是vue-router内部错误,导致导航跳转问题,、
// 往同一地址跳转时会报错的情况push和replace 都会导致这个情况的发生。
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
//push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);

  return originalPush.call(this, location).catch((err) => err);
};
//replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);

  return originalReplace.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/sy",
    },
    {
      path: "/geshou/:id",
      component: () => import("../pages/geshou"),
      meta: {
        headerShow: false,
        footerShow: false
      }
    },
    {
      path: "/every",
      component: () => import("../pages/every"),
      meta: {
        headerShow: false,
        footerShow: true
      }
    },
    {
      path: "/reg",
      component: () => import("../pages/reg"),
      meta: {
        headerShow: false,
        footerShow: false,
        backshow: false,
        keepAlive: false,
      },
    },
    {
      path: "/login",
      component: () => import("../pages/login"),
      meta: {
        headerShow: false,
        footerShow: false,
        backshow: false,
        keepAlive: false,
      },
    },
    {
      path: "/sy",
      component: () => import("../pages/sy"),
      meta: {
        headerShow: false,
        footerShow: true,

        backshow: false,
        keepAlive: false,
      },
    },
    {
      path: "/fl",
      component: () => import("../pages/fl"),
      meta: {
        headerShow: true,
        footerShow: true,

        backshow: false,
        keepAlive: true,
        // isUseCache: false,//默认不缓存
      },
    },
    {
      path: "/singerr/:id",
      component: () => import("../pages/fl/singerr"),
      meta: {
        headerShow: false,
        footerShow: false,
        backshow: true,
        keepAlive: false,
      },
    },
    {
      path: "/play",
      component: () => import("../pages/play"),
      meta: {
        headerShow: false,
        footerShow: true,

        backshow: false,
      },
    },
    {
      path: "/radio",
      component: () => import("../pages/radio"),
      meta: {
        headerShow: true,
        footerShow: true,

        backshow: false,
        keepAlive: true,
      },
    },
    {
      path: "/mine",
      component: () => import("../pages/mine"),
      meta: {
        headerShow: false,
        footerShow: true,

        backshow: false,
      },
    },
    {

      path: "/xiaoxi",
      component: () => import("../pages/mine/xiaoxi"),
      meta: {
        headerShow: true,
        footerShow: true,

        backshow: true,
      },
    },
    {
      path: "/chuangzuo",
      component: () => import("../pages/mine/chuangzuo"),
      meta: {
        headerShow: true,
        footerShow: true,

        backshow: true,
      },
    },
    {
      path: "/geshou",
      component: () => import("../pages/mine/geshou"),
      meta: {
        headerShow: true,
        footerShow: true,

        backshow: true,
      },
    },
    {
      path: "/gexingdt",
      component: () => import("../pages/mine/gexingdt"),
      meta: {
        headerShow: true,
        footerShow: true,

        backshow: true,
      },
    },
    {
      path: "/gedan",
      component: () => import("../pages/mine/gedan"),
      meta: {
        headerShow: true,
        footerShow: true,

        backshow: true,
      },
    },
  ],
  linkActiveClass: "active",
});

export default router;
