<template>
<v-app >
  <div >
    
<kayanyazi></kayanyazi>
<br>
       <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</v-app>
  
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

//componentler

import kayanyazi from "./components/headerComp/kayanYazı.vue";

export default defineComponent({
  components: {kayanyazi },
  
 
});
</script>


 