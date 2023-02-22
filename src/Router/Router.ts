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
    children: [
      {
        name: "adminsidenav",
        path: "/adminsidenav",
        component: () => import("../components/AdminPages/adminsidenav.vue"),
      },
      {
        name: "editproduct",
        path: "/editproduct",
        component: () => import("../components/AdminPages/editProduct.vue"),
      },
      {
        name: "productlist",
        path: "/productlist",
        component: () => import("../components/AdminPages/productlist.vue"),
      },
      {
        name: "userspage",
        path: "/userspage",
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
    },
    component: () => import("../components/AdminPages/loginPage.vue"),
  },
  {
    name: "footer",
    path: "/footer",
    props: true,
    meta: {
      requiresAuth: false,
    },
    component: () => import("../components/footer/footer.vue"),
  },
  {
    name: "Hello",
    path: "/hello",
    props: true,
    meta: {
      requiresAuth: false,
    },
    component: () => import("../components/BasketComp.vue"),
  },
  {
    name: "Favorite",
    path: "/favorite",
    props: true,
    meta: {
      requiresAuth: false,
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



// router.beforeEach(async (to, from, next) => {
//   console.log(to, "to");
//   console.log(from, "from");
//   const store = useProductStore();
//   const tokenstatus = store.getUserTokenStatus;
//   const tokenStatusLocale = localStorage.getItem("getUserTokenStatus");

//   if (to.meta && to.meta.requiresAuth) {
//     if (
//       to.name == "dashboard" &&
//       tokenstatus == true &&
//       to.meta.requiresAuth == true
//     ) {
//       console.log("durak1");
//       next();
//     } else {
//       console.log("durak2");
//       next();
//     }
//     } else {
//       console.log("durak 5");
//       next({ path: "/", name: "anasayfa" });
//     }
//   // } else if (to.meta && to.meta.requiresAuth) {
//   //   if (
//   //     to.name == "anasayfa" &&
//   //     tokenstatus == true &&
//   //     to.meta.requiresAuth == false
//   //   ) {
//   //     console.log("durak3");
//   //     next();
//   //   } else {
//   //     console.log("durak4");
//   //     next();
//   //   }
//   // }

//   //--------------------------------------------------------------------------------
//   // if (to.matched.some((record) => record.meta.requiresAuth)) {
//   //   console.log("buraya düşş");
//   //   if (to.name === "dashboard" &&  tokenstatus && to.meta.requiresAuth == false) {
//   //     console.log("DAHSBOARD");
//   //     next();
//   //   } else {
//   //     console.log("hATATALI mı?");
//   //     next({ name: "anasayfa", params: { path: "/" }, replace: true });
//   //   }
//   // } else if (to.matched.some((record) => record.meta.requiresAuth)) {
//   //   if ( to.name === "anasayfa" && tokenstatus && to.meta.requiresAuth == false) {
//   //     console.log("HİDEFORAUTH?");
//   //     next({
//   //       name: "anasayfa",
//   //       params: { path: "/" },
//   //       replace: true,
//   //     });
//   //   } else {
//   //     next();
//   //   }
//   // } else {
//   //   next();
//   // }
// });

export default router;
