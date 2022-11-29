<template>
  <div>
    <router-view></router-view>
    <product-list :getProduct="getProductGetters" />
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "@vue/runtime-core";
//componentler
import ProductList from "../components/ProductList.vue";
//map işlemleri
import { mapActions, mapState } from "pinia";
//store
import { useProductStore } from "../store/useProductStore";
import { Product } from "../models/entities/ProductModels";
export default defineComponent({
  name: "ProductListOne",
  components: {
    ProductList,
    
  },
  computed: {
    //pinia da mapgetters yok o yuzden getter verisi olan getProduct ...mapstate ile cagırılıyor.
    ...mapState(useProductStore, ["getProductGetters"]),
  },

  methods: {
    ...mapActions(useProductStore, { get: "getProductAction" }),
  },
  //MOUNTED DA CAGIRILDIĞINDA SAYFA RENDER DAN SORNA VERİ GELMEKTE SIKINTISI YASIYOR O YUZDEN CREATED DA GETİR.
  created() {
    console.log("XXX", this.$route)
    if (!this.get()) {
      return this.get();
    }
  },
});
</script>

<style scoped></style>
