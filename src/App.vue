<template>
<v-app >
  <div >
    <navbar-comp ></navbar-comp>
       <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</v-app>
  
</template>
<script lang="ts">
import { defineComponent, inject } from "@vue/runtime-core";

//componentler
import NavbarComp from "./components/NavbarComp.vue";


export default defineComponent({
  components: {
    NavbarComp,
  },
   provide: {
    product: "sema",
  },
  
 
});
</script>
