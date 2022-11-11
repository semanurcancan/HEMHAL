<template>
  <div>
    <strong>PRODUCT LIST</strong>

    <v-col>
      <v-row>
        <v-col cols="3" v-for="(pro, i) in getProduct" :key="i">
        
  <v-card
    class="mx-auto"
    max-width="344"
  >
   <v-img :src="pro.image" max-height="86" max-width="113"></v-img>
    <v-card-title>
      {{pro.title}}
    </v-card-title>
    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{pro.description}}
          </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

        </v-col>
      </v-row>
    </v-col>
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
    show: false,
  }),

  mounted() {
    console.log("asf", this.getProduct);
  },
});
</script>
<style scoped>
.listItem {
  list-style: none;
}
</style>
