<template>
    <v-container>
        <v-col class=" color2">
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
<style scoped>
.color5 {
  background-color: #847577;
}

.color4 {
  background-color: #e3d5ca;
}

.color3 {
  background-color: #d6ccc2;
}

.color2 {
  background-color: rgb(236, 218, 193);
}

.color1 {
  background-color: rgb(192, 174, 150);
}
</style>