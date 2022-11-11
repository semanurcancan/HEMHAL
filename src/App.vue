<template>
  <div>
    <p>app Vue sayfası</p>
    <product-list :getProduct = "getProductGetters"  />
    <hello-world />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

//componentler
import HelloWorld from "./components/HelloWorld.vue";
import ProductList from "./components/ProductList.vue";

//map işlemleri
import {mapActions, mapState} from "pinia"

//store
import { useProductStore } from "./store/useProductStore";

export default defineComponent({
  components: {
    HelloWorld,
    ProductList,
  },

  computed: {
    //pinia da mapgetters yok o yuzden getter verisi olan getProduct ...mapstate ile cagırılıyor.
    ...mapState(useProductStore,  ["getProductGetters"]),
  },

  methods: {
    ...mapActions( useProductStore, { get: "getProductAction"}),
  },
  //MOUNTED DA CAGIRILDIĞINDA SAYFA RENDER DAN SORNA VERİ GELMEKTE SIKINTISI YASIYOR O YUZDEN CREATED DA GETİR.
  created(){
    this.get();
    
  },
  //mounted old.sanal dom olusur.!!
  mounted(){
    console.log("aaaaa", this.getProductGetters);
  }
  
});
</script>

<style scoped></style>

 
