<template>
    <v-container>
        <v-col class="bg-blue">
        productlist
    </v-col>
    </v-container>
    
</template>


<script lang="ts">
import { defineComponent, } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";


export default defineComponent({
  components: { },
  name: "productlist",
  data: () => ({
    
  }),
  
});
</script>