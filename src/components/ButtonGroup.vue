<template>
  <v-col>
    <v-row>
      <v-col class="mb-3">
        <v-row v-if="open && pro.quantity == 0 ">
          <v-btn class="sepeteEkle"  @click.stop="open = !open">sepete ekle</v-btn>
        </v-row>
        
        <v-row v-else class="btnGroup  ">
          <v-btn
          icon="mdi-plus"
          color=" bg-grey-lighten-3 text-green-lighten-2" @click.prevent="add()"
        ></v-btn>
          <v-btn icon="mdi-plus">{{ pro.quantity+1 }}</v-btn>
          <v-btn color=" bg-grey-lighten-3 text-red-lighten-2" icon="mdi-minus"  @click.prevent="dlt()"></v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { defineComponent} from "vue";
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
      open:true,
   
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
      console.log("EKLE", this.getBasketGetters)
      //pinia içerisindeki actions a parametre olarak pro yollandı.store içerisinde karşılığını buldu.
    },
    dlt() {
      this.setDltBasket(this.pro);
    },
  },
});
</script>

<style scoped>
.sepeteEkle{
  background-color: #fadde69c;
  /* background-color: #daf8a277; */
}

.btnGroup{
  display: flex;
    justify-content: space-evenly;
}
</style>
