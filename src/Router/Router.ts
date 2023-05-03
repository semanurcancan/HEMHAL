import { createRouter, createWebHistory } from "vue-router";
import { useProductStore } from "../store/useProductStore";

import fb from "firebase/compat/app";
import auth from ".././firebase";

import { getAuth } from "firebase/auth";
import { async } from "@firebase/util";

const routes = [
  {
    name: "ProductView",
    path: "/product",
    meta: {
      requiresAuth: false,
      isFooterShow: true,
      isHeaderShow:true,
    },
    component: () => import("../views/ProductView.vue"),
    children: [
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
    ],
  },
  {
    name: "anasayfa",
    path: "/",
    props: true,
    meta: {
      requiresAuth: false,
      isFooterShow: true,
      isHeaderShow:true,
    },
    component: () => import("../components/anasayfa.vue"),
  },
  {
    name: "dashboard",
    path: "/dashboard",
    props: true,
    meta: {
      requiresAuth: true,
      isFooterShow: false,
      isHeaderShow:false,
    },
    component: () => import("../components/AdminPages/dashboard.vue"),
    children: [
       
      {
        path: "",
        name: "dashboardroot",
        redirect: { name: "hemhallist" }
      },
      {
        path: ":any",
        name: "dashboardblankroot",
        redirect: { name: "hemhallist" }
      },
      {
        name: "editproduct",
        path: "/editproduct",
        component: () => import("../components/AdminPages/editProduct.vue"),
      },
      {
        name: "hemhallist",
        path: "/hemhallist",
        component: () => import("../components/AdminPages/hemhallist.vue"),
      },
      {
        name: "userspage",
        path: "/userspage",
        meta: {
          isFooterShow: false,
          isHeaderShow:false,
        },
        component: () => import("../components/AdminPages/userspage.vue"),
      },
    ]
  
  },
  {
    name: "loginpage",
    path: "/loginpage",
    props: true,
    meta: {
      requiresAuth: false,
      isFooterShow: false,
      isHeaderShow:false,
    },
    component: () => import("../components/AdminPages/loginPage.vue"),
  },
  {
    name: "footer",
    path: "/footer",
    props: true,
    meta: {
      requiresAuth: false,
      isFooterShow: true,
      isHeaderShow:true,
    },
    component: () => import("../components/footer/footer.vue"),
  },
  {
    name: "Hello",
    path: "/hello",
    props: true,
    meta: {
      requiresAuth: false,
      isFooterShow: true,
      isHeaderShow:true,
    },
    component: () => import("../components/BasketComp.vue"),
  },
  {
    name: "Favorite",
    path: "/favorite",
    props: true,
    meta: {
      requiresAuth: false,
      isFooterShow: true,
      isHeaderShow:true,
    },
    component: () => import("../components/UserFavorite.vue"),
  },
];
const router = createRouter({
  routes: routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});
export default router;
