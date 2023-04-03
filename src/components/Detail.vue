<template> 
<v-btn class="ml-3 mt-3" to="/">back</v-btn>
    <v-card class="w-100 mt-5 ml-15 elevation-3">
      <v-col v-for="(item, index) in idData" :key="index">
        <v-row class="mb-2 text-center">
          <v-col>{{ item.title }} </v-col>
          <v-col> {{ item.price }} </v-col>
          <v-col v-for="(img, index) in item.images"
            :key="index" class="resmmm">
            <v-img
              :src="img.url"
              max-height="100"
              max-width="100"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, inject } from "@vue/runtime-core";
import { Product } from "../models/entities/ProductModels";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../store/useProductStore";

export default defineComponent({
  name: "Detail",
  data() {
    return {
      idData: Object<Product>(),
    };
  },
  computed: {
    getProductById(): Object {
      // console.log(typeof
      //   this.getProductHemhal.filter((x: any) => x.id == this.$route.params.id),
      //   "DETAY"
      // );
      this.idData = this.getProductHemhal.filter(
        (x: any) => x.id == this.$route.params.id
      );
      console.log(this.idData, "OBJECT")
      // return (this.idData = this.getProductHemhal.filter(
      //   (x:any) => x.id === this.$route.params.id ));
    },
    ...mapState(useProductStore, ["getProductHemhal"]),
  },
  mounted() {
    //this.getProductById();
    console.log(this.idData, "OBJ");
  },

  methods: {
    // getProductById() {
    //   console.log(this.$route.params.id);
    //   console.log(this.getProductHemhal, "NEEEEEEEEEE")
    //   console.log(this.getProductHemhal.filter(
    //     (x:any)=>x.id==this.$route.params.id), "OBJE");
    //   this.idData = this.getProductHemhal.filter(
    //     (x:any)=>x.id==this.$route.params.id)
    //   // this.idData = this.getProductHemhal.filter(
    //   //   (x:any) => x.id === this.$route.params.id
    //   // );
    // },
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
