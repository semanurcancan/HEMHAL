<template>
  <v-app>
    <kayanyazi></kayanyazi>
    <v-app class="container">
      <div>
        <NavbarComp></NavbarComp>
        <br />
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </v-app>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

//componentler

import kayanyazi from "./components/headerComp/kayanYazı.vue";
import NavbarComp from "./components/headerComp/NavbarComp.vue";

export default defineComponent({
  components: { kayanyazi, NavbarComp },
});
</script>

<style >
@media screen and (max-width: 2500px) {
  body .container {
    background-color: rgba(234, 18, 18, 0.899);
    margin-left: 190px;
    margin-right: 190px;
  
  }
}
@media screen and (max-width: 2000px) {
  body .container {
    background-color: rgba(21, 211, 87, 0.784);
    margin-left: 190px;
    margin-right: 190px;
  
  }
}

@media screen and (max-width: 1500px) {
  body .container {
    background-color: rgb(89, 89, 4);
    margin-left: 150px;
    margin-right: 150px;
  }
}
@media screen and (max-width: 1300px) {
  body .container {
    background-color: rgb(89, 89, 4);
    margin-left: 130px;
    margin-right: 130px;
  }
}
@media screen and (max-width: 1000px) {
  body .container {
    background-color: rgba(8, 124, 48, 0.784);
    margin-left: 110px;
    margin-right: 110px;
  
  }
}
@media screen and (max-width: 750px) {
  body .container {
    background-color: rgb(232, 232, 105);
    margin-left: 90px;
    margin-right: 90px;
  }
}
@media screen and (max-width: 500px) {
  body .container {
    background-color: rgb(128, 109, 233);
    margin-left: 40px;
    margin-right: 40px;
  }
}
.container {
  background-color: yellow;
  margin-left: 110px;
  margin-right: 110px;
}
</style>
