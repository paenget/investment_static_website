export default [
  {
    path: "/:year/:month/:day/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--word-press-post-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/templates/WordPressPost.vue")
  },
  {
    path: "/request-password/",
    component: () => import(/* webpackChunkName: "page--src--pages--request-password-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/requestPassword.vue")
  },
  {
    path: "/origin-of-strongview/",
    component: () => import(/* webpackChunkName: "page--src--pages--origin-of-strongview-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/origin-of-strongview.vue")
  },
  {
    path: "/portfolio-investments/",
    component: () => import(/* webpackChunkName: "page--src--pages--portfolio-investments-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/portfolioInvestments.vue")
  },
  {
    path: "/our-team/",
    component: () => import(/* webpackChunkName: "page--src--pages--our-team-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/ourTeam.vue")
  },
  {
    path: "/member-enrollment/",
    component: () => import(/* webpackChunkName: "page--src--pages--member-enrollment-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/memberEnrollment.vue")
  },
  {
    path: "/liquid-alt/",
    component: () => import(/* webpackChunkName: "page--src--pages--liquid-alt-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/liquidAlt.vue")
  },
  {
    path: "/login/",
    component: () => import(/* webpackChunkName: "page--src--pages--login-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/login.vue")
  },
  {
    path: "/investment-ideas/",
    component: () => import(/* webpackChunkName: "page--src--pages--investment-ideas-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/investmentIdeas.vue")
  },
  {
    path: "/forgot-password/",
    component: () => import(/* webpackChunkName: "page--src--pages--forgot-password-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/forgotPassword.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/raphaellayug/Desktop/Repositories/strongview-private/src/pages/404.vue")
  }
]

