<template>
<kayanyazi class="w-100"></kayanyazi>
<NavbarComp></NavbarComp>
  <v-app class="container">
  <v-layout class="container">
    <leftBarVue></leftBarVue> 
  </v-layout>
  <br />
  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
 </v-app>
<footerr></footerr>

</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

//componentler
import kayanyazi from "./components/headerComp/kayanYazı.vue";
import NavbarComp from "./components/headerComp/NavbarComp.vue";
import footer from "./components/footer/footer.vue";
import footerr from "./components/footer/footer.vue";
import leftBarVue from "./components/headerComp/leftBar.vue";
import burgerMenu from "./components/headerComp/burgerMenu.vue";

export default defineComponent({
  components: {
    kayanyazi,
    leftBarVue,
    NavbarComp,
    footer,
    footerr,
    burgerMenu,
  },
  data() {
    return {
      navOpen: false,
      drawer: true,
    };
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
    margin-left: 150px;
    margin-right: 150px;
  }
}
@media screen and (max-width: 1300px) {
  body .container {
    margin-left: 130px;
    margin-right: 130px;
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
}
</style>
