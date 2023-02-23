<template>
    <v-container>
        <v-col class="bg-red">
       USERS PAGE
    </v-col>
    </v-container>
    
</template>


<script lang="ts">
import { defineComponent, } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";


export default defineComponent({
  components: { },
  name: "userspage",
  data: () => ({
    
  }),
  
});
</script>