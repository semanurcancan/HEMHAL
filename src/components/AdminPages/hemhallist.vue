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
          <td>{{ pro.image }}</td>
         <td
          >
          <v-row>
            <v-col    v-for="(img, index) in pro.images"
            :key="index" class="d-flex child-flex" cols="4">
              <v-img
                :src="img.url"
                :lazy-src="img.url"
                width="10"
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
    categoryArray: [
      { text: "Cilt bakım", value: 0 },
      { text: "Aroma Terapi", value: 1 },
      { text: "Saç Bakım", value: 2 },
      { name: "Onarıcı Merhem", id: 3 },
      { name: "Besleyici Merhem", id: 4 },
      { name: "Ruj & Allık ", id: 5},
      { name: "Mum & Tütsü", id: 6},
      { name: "Masaj Taşı & Tütsü", id: 7},
      { name: "At Kılı Fırçalar & Fırça", id: 8},
    ],
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
      if (this.getProductHemhal.category.id == 0) {
        this.getProductHemhal.category.name = this.categoryArray[0].text;
      }
      let x = this.getProductHemhal.category.id ;
      switch (x) {
        case 0:
        this.getProductHemhal.category.name = this.categoryArray[0].text;
          break;
        case 1:
        this.getProductHemhal.category.name = this.categoryArray[1].text;
          break;
          case 2:
        this.getProductHemhal.category.name = this.categoryArray[2].text;
          break;
          case 3:
        this.getProductHemhal.category.name = this.categoryArray[3].name;
          break;
          case 4:
        this.getProductHemhal.category.name = this.categoryArray[4].name;
          break;
          case 5:
        this.getProductHemhal.category.name = this.categoryArray[5].name;
          break;
          case 6:
        this.getProductHemhal.category.name = this.categoryArray[6].name;
          break;
          case 7:
        this.getProductHemhal.category.name = this.categoryArray[7].name;
          break;
          case 8:
        this.getProductHemhal.category.name = this.categoryArray[8].name;
          break;
        default:
        this.getProductHemhal.category.name = "Categori Bulunamadı";
      }
    },
  },
});
</script>
