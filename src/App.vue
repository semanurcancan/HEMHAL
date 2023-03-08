<template>
  <router-view v-slot="{ Component }">
    <kayanyazi  v-if="$route.meta.isHeaderShow"  class="w-100"></kayanyazi>
    <v-layout v-bind:class="getContainer()">
      <v-col>
        <v-row>
          <v-main style="height: auto">
            <NavbarComp  v-if="$route.meta.isHeaderShow" />
            <keep-alive >
              <component :is="Component" />
            </keep-alive>
            <footerr v-if="$route.meta.isFooterShow"></footerr>
          </v-main>
        </v-row>
      </v-col>
    </v-layout>
    <br />
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useProductStore } from "./store/useProductStore";
import { mapActions, mapState, } from "pinia";


//componentler
import loginPage from "./components/AdminPages/loginPage.vue";
import kayanyazi from "./components/headerComp/kayanYazı.vue";
import NavbarComp from "./components/headerComp/NavbarComp.vue";
import dashboard from "./components/AdminPages/dashboard.vue";
import footer from "./components/footer/footer.vue";
import footerr from "./components/footer/footer.vue";
import leftBarVue from "./components/headerComp/leftBar.vue";
import burgerMenu from "./components/headerComp/burgerMenu.vue";
import LoginPage from "./components/AdminPages/loginPage.vue";
import AdminSideNav from "./components/AdminPages/adminSideNav.vue";

export default defineComponent({
  components: {
    kayanyazi,
    leftBarVue,
    NavbarComp,
    footer,
    footerr,
    burgerMenu,
    LoginPage,
    dashboard,
    AdminSideNav
  },
  data() {
    return {
      navOpen: false,
      drawer: true,
      usertoken: this.getUserTokenStatus,
    };
  },
  computed: {
    ...mapState(useProductStore, ["getUserTokenStatus", "getUserList"]),
  },
  created(){
    this.getAdmin();
  },
  methods:{
getContainer(){
  return  {
    'container' : this.$route.meta.isHeaderShow,
    'adminPages': !this.$route.meta.isHeaderShow
  }
},
...mapActions(useProductStore, [
      "createUser",
      "getAdmin",
      "setNewTokenStatus",
      "setNewToken",

    ]),
  },

  watch: {
    getUserTokenStatus(newVal, oldVal) {
      if (newVal) {
        console.log(newVal, oldVal);
      }
    },
  },
});
</script>





<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0, 3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.adminPages{
margin: 0px;
padding: 0px;
}
@media screen and (min-width: 1280px) {
  body .leftBar {
    display: none;
    position: relative;
    z-index: 10;
    padding-top: 60px;
  }
}

@media screen and (max-width: 2500px) {
  body .container {
    margin-left: 150px;
    margin-right: 150px;
  }
}

@media screen and (max-width: 2000px) {
  body .container {
    margin-left: 120px;
    margin-right: 120px;
  }
}

@media screen and (max-width: 1500px) {
  body .container {
    /* background-color: rgb(89, 89, 4); */
    margin-left: 100px;
    margin-right: 100px;
  }
}

@media screen and (max-width: 1300px) {
  body .container {
    margin-left: 100px;
    margin-right: 100px;
  }
}

@media screen and (max-width: 1000px) {
  body .container {
    margin-left: 110px;
    margin-right: 110px;
  }
}

@media screen and (max-width: 750px) {
  body .container {
    margin-left: 90px;
    margin-right: 90px;
  }
}

@media screen and (max-width: 500px) {
  body .container {
    margin-left: 40px;
    margin-right: 40px;
  }
}

.container {
  margin-left: 100px;
  margin-right: 100px;
  overflow: auto;
}

.hemhalcolor {
  text-decoration-color: rgb(192, 219, 18);
  /* text-decoration: rgb(192, 219, 18); */
}
</style>
