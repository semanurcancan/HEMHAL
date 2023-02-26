<template>
    <v-container>
        <v-col class=" bg-lime-lighten-2">
          hemhallist
          {{ getProductHemhal }}
          <v-btn @click="getHEMHAL()">tıkla</v-btn>
    </v-col>
    </v-container>
    
</template>


<script lang="ts">
import { defineComponent, } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";
import {adminStore} from "../../store/adminStore"


export default defineComponent({
  components: { },
  name: "hemhallist",
  data: () => ({
    
  }),

  computed: {
    ...mapState(adminStore, ["getAdminInfo", "getUserList", "getProductHemhal"]),
    ...mapState(useProductStore, ["getAdminInfo", "getUserList", "getProductHemhal"]),
  },
  methods: {
    ...mapActions(useProductStore, [
      "createUser",
      "getAdmin",
      "setNewTokenStatus",
      "setNewToken"
    ]),
    getHEMHAL(){
      console.log("tıklandı", this.getProductHemhal)
      console.log(" kullanıcılar",this.getUserList)
    }
  }
  
});
</script>