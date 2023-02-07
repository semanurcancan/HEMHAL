import { createRouter, createWebHistory } from "vue-router";

const routes = [

  {
    name: "ProductView",
    path: "/product", 
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
    component: () => import("../components/anasayfa.vue"), 
  },
  {
    name: "loginpage",
    path: "/loginpage", 
    props: true,
    component: () => import("../components/AdminPages/loginPage.vue"), 
  },
  {
    name: "footer",
    path: "/footer", 
    props: true,
    component: () => import("../components/footer/footer.vue"), 
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
  history: createWebHistory(),
  scrollBehavior (to, from, savedPosition){
    if(to.hash){
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
});

export default router;