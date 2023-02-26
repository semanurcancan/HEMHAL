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
