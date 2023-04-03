<template>
  <v-col class="bg-grey-lighten-4">
    <v-table class="bg-grey-lighten-4">
      <thead>
        <tr>
          <th class="text-left text-h6 text-disabled">Name</th>
          <th class="text-left text-disabled text-h6">Title</th>
          <th class="text-left text-disabled text-h6">Category</th>
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
          <td>{{ pro.category.name }}</td>
          <td>{{ pro.price }}</td>
          <td>{{ pro.quantity }}</td>
          <td>{{ pro.rating }}</td>
         <td
          >
          <v-row>
            <v-col v-for="(img, index) in pro.images"
            :key="index" class="d-flex child-flex" cols="4">
              <v-img
                :src="img.url"
                :lazy-src="img.url"
                width="60"
                aspect-ratio="1"
                cover
                class="bg-grey-lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
          </td>
          <td>
            <v-btn class="color3" @click="editProduct">Düzenle</v-btn>
          </td>
          <td>
            <v-btn class="bg-red-lighten-4" @click="deleteProduct(pro)">Sil</v-btn>
          </td>
          
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
  deleteDoc
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
     "deleteHemhalProduct"
    ]),
    getHEMHAL() {
      console.log(this.getProductHemhal, "ÜRÜNLER")
    },
    editProduct(){

    },
    //  async deleteProduct(doc:any){
    //   console.log(doc.id, "tık tık")
    //  //await deleteDoc(doc(db, 'product', doc.id))
    
    // }
    deleteProduct(doc:any){
     this.deleteHemhalProduct(doc.id)
      console.log(doc, "tık tık")
    
    }

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

