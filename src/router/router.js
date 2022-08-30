import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../pages/MainPage.vue"),
  },
  {
    path: "/product/:id",
    name: "productId",
    props: true,
    component: () => import("../pages/ProductPage.vue"),
    children: [
      {
        path: "specifications",
        name: "productSpecifications",
        props: true,
        component: () =>
          import("../components/ProductSpecificationsComponent.vue"),
      },
      {
        path: "description",
        name: "productDescription",
        props: true,
        component: () =>
          import("../components/ProductDescriptionComponent.vue"),
      },
      {
        path: "feedback",
        name: "productFeedback",
        props: true,
        component: () => import("../components/ProductFeedbackComponent.vue"),
      },
    ],
  },
  {
    path: "/category",
    component: () => import("../pages/CategoryPage.vue"),
  },
  {
    path: "/news",
    component: () => import("../pages/NewsPage.vue"),
  },
  {
    path: "/cart",
    component: () => import("../pages/CartPage.vue"),
  },
  {
    path: "/order_success",
    component: () => import("../pages/OrderSuccessPage.vue"),
  },
  {
    path: "/about",
    component: () => import("../pages/AboutPage.vue"),
  },
  {
    path: "/error404",
    component: () => import("../pages/Error404Page.vue"),
  },
  { path: "/:catchAll(.*)", redirect: "/error404" },
];

export default new VueRouter({
  mode: "history",
  routes: routes,
});
