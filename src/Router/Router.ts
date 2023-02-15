import { createRouter, createWebHistory } from "vue-router";
import { useProductStore } from "../store/useProductStore";
import fb from 'firebase/compat/app';

const routes = [

  {
    name: "ProductView",
    path: "/product", 
    meta: {
      hideForAuth: true,
    },
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
    name: "anasayfa",
    path: "/", 
    props: true,
    meta: {
      hideForAuth: true,
    },
    component: () => import("../components/anasayfa.vue"), 
  },
  {
    name: "dashboard",
    path: "/dashboard", 
    props: true,
    meta: {
      requiresAuth: true,
    },
    component: () => import("../components/AdminPages/dashboard.vue"), 
  },
  {
    name: "loginpage",
    path: "/loginpage", 
    props: true,
    meta: {
      hideForAuth: true,
    },
    component: () => import("../components/AdminPages/loginPage.vue"), 
  },
  {
    name: "footer",
    path: "/footer", 
    props: true,
    meta: {
      hideForAuth: true,
    },
    component: () => import("../components/footer/footer.vue"), 
  },
  {
    name: "Hello",
    path: "/hello", 
    props: true,
    meta: {
      hideForAuth: true,
    },
    component: () => import("../components/BasketComp.vue"), 
  },
  {
    name: "Favorite",
    path: "/favorite", 
    props: true,
    meta: {
      hideForAuth: true,
    },
    component: () => import("../components/UserFavorite.vue"), 
  },
]
const router = createRouter({
  routes: routes,
  history: createWebHistory(),
  scrollBehavior (to, from, savedPosition){
    if(to.hash){
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  },
  
});
// router.beforeEach((to, from, next)=>{
//     const requiresAuth = to.matched.some(x=>x.meta.requiresAuth)
//     const currentUser = fb.auth().currentUser
// if(requiresAuth) {
//   next('/')
// }else if(requiresAuth && currentUser?.email == 'admin@example.com') {
//   next()
// }else {
//   next()
// }
 
// })

export default router;