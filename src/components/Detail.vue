<template>
  <div>
    <v-card class="w-100 mt-5 ml-15 elevation-3">
      <v-col v-for="(item, index) in idData" :key="index">
        <v-row class="mb-2 text-center">
          <v-col>PRODUCT </v-col>
          <v-col>DETAIL</v-col>
          <v-col>IMAGE</v-col>
        </v-row>
        <v-divider class="mb-5"></v-divider>
        <v-row>
          <v-col>{{ item.title }} </v-col>
          <v-col> {{ item.description }} </v-col>
          <v-col class="resmmm">
            <v-img :src="item.images[1]" max-height="100" max-width="100"></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@vue/runtime-core";
import { Product } from "../models/entities/ProductModels";

export default defineComponent({
  name: "Detail",
  data() {
    return {
      idData: {},
      products: inject<Product>("products"),
    };
  },
computed: {
  getProductById():Object {
    return this.idData = this.products.filter(
        (x) => x.id === Number(this.$route.params.id)
      );
    },
},
  
  methods: {
    getProductById() {
      this.idData = this.products.filter(
        (x) => x.id === Number(this.$route.params.id)
      );
    },
  },

  watch: {
    getProductById: {
      handler() {
        this.getProductById;
        console.log("DETAY", this.getProductById);
      },
    },
  },
});
</script>

<style scoped>
.resmmm {
  text-align: -webkit-center;
}
</style>
