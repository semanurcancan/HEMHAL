<template>
  <v-col class="bg-lime-lighten-4">
    <v-table class="bg-lime-lighten-4">
      <thead>
        <tr>
          <th class="text-left text-h6 text-disabled">Name</th>
          <th class="text-left text-disabled text-h6">Title</th>
          <th class="text-left text-h6 text-disabled">Price</th>
          <th class="text-left text-h6 text-disabled">Quantity</th>
          <th class="text-left text-h6 text-disabled">Rating</th>
          <th class="text-left text-h6 text-disabled">Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pro, index) in getProductHemhal" :key="index">
          <td>{{ pro.name }}</td>
          <td>{{ pro.title }}</td>
          <td>{{ pro.price }}</td>
          <td>{{ pro.quantity }}</td>
          <td>{{ pro.rating }}</td>
          <td>{{ pro.image }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-col>

  <v-col>
    hemhallist---ürün listesi
    <v-btn @click="getHEMHAL()">tıkla</v-btn>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";
import { adminStore } from "../../store/adminStore";
import db from "../../firebase";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  getDocs,
  where,
} from "firebase/firestore";

export default defineComponent({
  components: {},
  name: "hemhallist",
  data: () => ({
    product: [] as any,
  }),
  mounted() {
    console.log(this.getAdminInfo, "getAdminInfo");
   
  },
  created() {
    this.getAdmin();
  },
  computed: {
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
      console.log(this.getProductHemhal, "ÜRÜNLER")
    },
  },
  watch: {
    getAdminInfo() {
      console.log(this.getAdminInfo, "aaa");
    },
    getProductHemhal() {
      console.log(this.getProductHemhal, "ürünler");
    },
  },
});
</script>
