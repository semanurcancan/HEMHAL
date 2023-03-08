<template>
  <v-container>
    <v-col class="bg-lime-lighten-2">
      hemhallist
      {{ getcurrenAdmin.fullName }}
      <v-btn @click="getHEMHAL()">tıkla</v-btn>
    </v-col>
    <v-col>
      
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";
import { adminStore } from "../../store/adminStore";

export default defineComponent({
  components: {},
  name: "hemhallist",
  data: () => ({}),
  mounted() {
    console.log(this.getAdminInfo, "getAdminInfo");
  },
  computed: {
    ...mapState(adminStore, [
      "getAdminInfo",
      "getUserList",
      "getProductHemhal",
      "getcurrenAdmin",
    ]),
    ...mapState(useProductStore, [
      "getAdminInfo",
      "getUserList",
      "getProductHemhal",
    ]),
  },
  methods: {
    ...mapActions(useProductStore, [
      "createUser",
      "getAdmin",
      "setNewTokenStatus",
      "setNewToken",
    ]),
    getHEMHAL() {
      console.log("tıklandı", this.getAdminInfo);
      console.log(" kullanıcılar", this.getUserList);
    },
  },
  watch: {
    getAdminInfo() {
      console.log(this.getAdminInfo, "aaa");
    },
  },
});
</script>
