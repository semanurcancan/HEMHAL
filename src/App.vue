<template>
  <kayanyazi class="w-100"></kayanyazi>
  <v-layout class="container">
    <v-col>
      <v-row>
        <v-main style="height: auto">
          <NavbarComp />
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
          <footerr></footerr>
        </v-main>
      </v-row>
    </v-col>
  </v-layout>
  <br />
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
.hemhalcolor{
  text-decoration-color: rgb(192, 219, 18); ;
  /* text-decoration: rgb(192, 219, 18); */
}
</style>
