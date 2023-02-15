<template>
    <v-app>
        <v-col class="bg-red">
        dashboard
    </v-col>
    </v-app>
    
</template>


<script lang="ts">
import { defineComponent, } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";


export default defineComponent({
  components: { },
  name: "dashboard",
  data: () => ({
    
  }),
  
});
</script>