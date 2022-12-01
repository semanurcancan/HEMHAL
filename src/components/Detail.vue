<template>
  <div>
    <v-card theme="dark" class=" w-50 mt-5 ml-15" >
        <v-col v-for="(item,index) in idData" :key="index">
      <v-row class="mb-2 text-center">
        <v-col>PRODUCT </v-col>
        <v-col>DETAIL</v-col>
        <v-col>IMAGE</v-col>
      </v-row>
      <v-divider class="mb-5 "></v-divider>
      <v-row>
        <v-col>{{ item.title}} </v-col>
        <v-col> {{item.description}} </v-col>
        <v-col>
          <v-img :src="item.images[1]" max-height="65" max-width="88"></v-img>  
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
  name: "detail",
  data() {
    return {
      idData: {},
      products: inject<Product>("products"),
    };
  },

  mounted() {
    this.getProductById();
  },

  methods: {
    getProductById() {
      this.idData = this.products.filter(
        (x) => x.id === Number(this.$route.params.id)
      );},},


});
</script>
