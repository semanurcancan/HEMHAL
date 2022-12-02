<template>
  <v-app>
    <div class="container">
      <strong class="container"> SEPET İÇERİĞİ </strong>
      <div v-if="getBasketGetters.length === 0">
        <h3>You haven't any items.</h3>
      </div>
      <v-app v-else style="z-index: 0 !important">
        <v-col>
          <v-row>
            <v-col>
              <ag-grid-vue
            style="width: 1010px; height:500px "
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="arrayUnic"
          >
          </ag-grid-vue>
            </v-col>
            <v-col>
              <v-card-title>sepet tutarı: {{ GetBasketPrice }} </v-card-title>
              <v-btn class="ml-3 mt-3"  to="/" >back</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-app>
    </div>
  </v-app>
</template>
<script lang="ts">
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
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
    ...mapState(useProductStore, ["getBasketGetters", "GetBasketPrice"]),
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
    this.unicPro();
    console.log("QQQQ", this.basketNew);
  },
  methods: {
    ...mapActions(useProductStore, ["setDltBasket", "setAddBasket"]),

    priceQuantity(params: any) {
      let item = params.data;
      console.log("PARAMSSSS", item);
      return item.price * item.quantity;
    },
    categoryWiev(params: any) {
      let categoriList = params.data;
      return categoriList.category.name;
    },

    unicPro() {
      this.arrayUnic = this.getBasketGetters;
      // .filter(
      //   (v, i, a) => a.findIndex((t) => t.id == v.id) === i
      // );
    },
    add() {
      this.setAddBasket(this.pro);
      //pinia içerisindeki actions a parametre olarak pro yollandı.store içerisinde karşılığını buldu.
    },
    dlt() {
      this.setDltBasket(this.pro);
    },
  },
});
</script>

<style scoped>
.container {
  margin-left: 60px;
}
</style>
