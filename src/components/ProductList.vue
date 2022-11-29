<template>
  <v-app>
    <v-col>
      <v-row>
        <v-col>
          <v-row>
            <v-col v-if="getFilterCategory.length > 0">
              <v-row >
                <v-col
                  v-for="(item, index) in getFilterCategory"
                  :key="index"
                >
                  <v-card class="cardClass">
                    <v-img
                      @dblclick="
                        this.$router.push({
                          name: 'Detail',
                          params: { id: item.id },
                        })
                      "
                      class="align-end text-white"
                      height="200"
                      width="250"
                      :src="item.image"
                      cover
                    >
                      <v-card-title>{{ item.title.slice(0, 10) }}</v-card-title>
                    </v-img>
                    <v-card-subtitle class="">
                      {{ item.price }} TL
                    </v-card-subtitle>

                    <v-card-text>
                      <!-- <div class="text-purple">Product Description</div> -->

                      <div>{{ item.description.slice(0, 40) }}</div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
                
            </v-col>

            <v-col v-else v-for="(pro, i) in getProduct" :key="i">
              <v-card class="cardClass" max-width="350">
                <v-img
                  @dblclick="
                    this.$router.push({
                      name: 'Detail',
                      params: { id: pro.id },
                    })
                  "
                  class="align-end text-white"
                  height="200"
                  width="250"
                  :src="pro.image"
                  cover
                >
                  <v-card-title>{{ pro.title.slice(0, 10) }}</v-card-title>
                </v-img>
                <v-card-subtitle> {{ pro.price }} TL </v-card-subtitle>

                <v-card-text>
                  <!-- <div class="text-purple">Product Description</div> -->

                  <div>{{ pro.description.slice(0, 40) }}</div>
                </v-card-text>

                <v-card-actions>
                  <button-group
                    class="mt-5 ml-10 mr-10"
                    :pro="pro"
                    :actions="actions"
                  ></button-group>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import ButtonGroup from "./ButtonGroup.vue";
import { Product } from "../models/entities/ProductModels";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../store/useProductStore";

export default defineComponent({
  components: { ButtonGroup },
  name: "ProductList",
  props: {
    getProduct: {
      type: Object as PropType<Product>,
    },
  },
  data: () => ({
    show: false,
    products: inject("products"),
    actions: inject("actions"),
  }),
  computed: {
    ...mapState(useProductStore, ["getFilterCategory"]),
  },
});
</script>
<style scoped>
.container {
  padding: 16px, 0;
}
.listItem {
  list-style: none;
}
.cardClass {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
