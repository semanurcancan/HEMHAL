<template>
  <v-col>
    <v-row>
      <v-col>
        <v-row class="btnGroup  ">
          <v-btn
          icon="mdi-plus"
          color=" bg-grey-lighten-3 text-green-lighten-2" @click.prevent="add()"
        ></v-btn>
          <v-btn icon="mdi-plus">{{ pro.quantity }}</v-btn>
          <v-btn color=" bg-grey-lighten-3 text-red-lighten-2" icon="mdi-minus"  @click.prevent="dlt()"></v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
//models

import { mapActions, mapState } from "pinia";
import { useProductStore } from "../store/useProductStore";

export default defineComponent({
  name: "buttonGroup",
  props: ["pro"],
  data() {
    return {
      basket: [],
      productStore: useProductStore(),
    };
  },
  computed: {
    //pinia da mapgetters yok o yuzden getter verisi olan getProduct ...mapstate ile cagırılıyor.
    ...mapState(useProductStore, ["getBasketGetters"]),
  },

  methods: {
    ...mapActions(useProductStore, [
      "setAddBasket",
      "setDltBasket",
    ]),

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
.btnGroup{
  display: flex;
    justify-content: space-evenly;
}
</style>
