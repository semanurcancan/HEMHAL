<template>
    <v-app>
      <div class="container">
        <strong class="container"> FAVORI LIST </strong>
        <v-app>
            <v-card class="w-100 mt-5 ml-15 elevation-3">
      <v-btn class="ml-3 mt-3" to="/">back</v-btn>
      <v-col >
        <v-row class="mb-2 text-center">
          <v-col> <strong>PRODUCT</strong></v-col>
          <v-col> <strong>DETAIL</strong> </v-col>
          <v-col> <strong>IMAGE</strong></v-col>
        </v-row>
        <v-divider class="mb-5"></v-divider>
        <v-row class="mb-2 text-center" v-for="(pro, index) in getFavoritesState" :key="index">
          <v-col>{{ pro.title }} </v-col>
          <v-col> {{ pro.description }} </v-col>
          <v-col class="resmmm">
            <v-img
              :src="pro.images[1]"
              max-height="100"
              max-width="100"
            ></v-img>
          </v-col><v-divider></v-divider>
        </v-row>
        
      </v-col>
    </v-card>
        </v-app>
      </div>
    </v-app>
  </template>
 <script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../store/useProductStore";
import { AgGridVue } from "ag-grid-vue3";
import type { Product } from "../models/entities/ProductModels";
import gridImg from "./GridImg.vue";

export default defineComponent({
  components: {
    AgGridVue,
    gridImg,
  },
  data() {
    return {
      columnDefs: [
        {
          headerName: "image",
          field: "images[1]",
          cellRenderer: "gridImg",
          cellRendererParams: {
            clicked: function (field) {
              alert(`${field} was clicked`);
            },
          },
        },
        { headerName: "title", field: "title" },
        {
          headerName: "price",
          field: "price",
          valueGetter: this.priceQuantity,
        },

        { headerName: "quantity", field: "quantity" },
        {
          headerName: "category",
          field: "category",
          valueGetter: this.categoryWiev,
        },
      ],
      rowData: new Array<Product>(),
      basket: [],
      productStore: useProductStore(),
    };
  },
  computed: {
    //pinia da mapgetters yok o yuzden getter verisi olan getProduct ...mapstate ile cagırılıyor.
    ...mapState(useProductStore, ["getBasketGetters", "GetBasketPrice", "getFavoritesState"]),
    arrayUnic(): Product[] {
      return this.getBasketGetters.filter(
        (v, i, a) => a.findIndex((t) => t.id == v.id) === i
      );
    },
  },
  updated() {
    this.getBasketGetters;
  },
  mounted() {
  
  },
  methods: {
   
  },
});



</script>



<style scoped>
.container {
  margin-left: 60px;
}
.resmmm {
  text-align: -webkit-center;
}
</style>