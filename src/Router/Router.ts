import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "ProductList",
    path: "/", 
    component: () => import("../views/ProductView.vue"),
    children:[
      {
        name: "ProductListOne",
        path: "",
        component: () => import("../components/ProductListOne.vue"),
      },
      {
        name: "Detail",
        path: "detail/:id",
        component: () => import("../components/Detail.vue"),
      },
     
    ]
  },
  {
    name: "Hello",
    path: "/hello", 
    props: true,
    component: () => import("../components/BasketComp.vue"), 
  },
  {
    name: "Favorite",
    path: "/favorite", 
    props: true,
    component: () => import("../components/UserFavorite.vue"), 
  },
]
const router = createRouter({
  routes: routes,
  // history: createWebHistory(),
  history: createWebHistory(),
});

export default router;