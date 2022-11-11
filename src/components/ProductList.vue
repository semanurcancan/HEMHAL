<template>
  <div>
    <strong>ProductList</strong>
    <v-card>
      <ul class="listItem" v-for="(pro, i) in getProduct" :key="i">
        <li >{{ pro.id }}</li>
        <li>{{ pro.title }}</li>
        <v-btn @click="isOpen = !isOpen">DETAIL
        <li v-if="isOpen">{{ pro.description }}</li>
        </v-btn>
        <li>{{ pro.price }}</li>
        <li>{{ pro.category }}</li>
        <img :src="pro.image" alt="img" height="150" />
      </ul>
    </v-card>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Product } from "../models/entities/ProductModels";

export default defineComponent({
  props: {
    getProduct: {
      type: Object as PropType<Product>,
    },
  },
  data: () => ({
    isOpen: false,
  }),

  mounted() {
    console.log("asf", this.getProduct);
  },
});
</script>
<style scoped>
.listItem{
    list-style: none;
}
</style>
