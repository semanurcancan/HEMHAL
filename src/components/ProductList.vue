<template>
  <v-app class="ml-11">
    <div>
      <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="new"
          color="grey-lighten-4"
          max-width="auto"
          v-bind="props"
        >
          <v-img
            :aspect-ratio="16 / 13"
            cover
            src="https://api.lorem.space/image/fashion?w=640&h=480&r=6453"
          >
            <v-expand-transition>
              <div
                v-if="isHovering"
                class="d-flex transition-fast-in-fast-out bg-pink-lighten-4 v-card--reveal text-h2"
                style="height: 100%"
              >
                NEW COLLECTİON
              </div>
            </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
    </div>

    <v-col>
      <v-row>
        <v-col v-if="getFilterCategory.length > 0" class="container">
          <v-row>
            <v-col v-for="(pro, index) in getFilterCategory" :key="index">
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  class="cardClass"
                  :elevation="isHovering ? 12 : 2"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-img
                    @click="
                      this.$router.push({
                        name: 'Detail',
                        params: { id: pro.id },
                      })
                    "
                    class="align-end text-white mt-3"
                    height="200"
                    width="250"
                    :src="pro.images[1]"
                    cover
                  >
                    <v-card-title>{{ pro.title.slice(0, 10) }}</v-card-title>
                  </v-img>
                  <v-card-subtitle class="">
                    {{ pro.price }} TL
                  </v-card-subtitle>
                  <v-card-text>
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
              </v-hover>
            </v-col>
          </v-row>
        </v-col>

        <v-col v-else v-for="(pro, i) in getProduct" :key="i">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 6 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
              class="cardClass"
              max-width="350"
            >
              <v-img
                @click="
                  this.$router.push({
                    name: 'Detail',
                    params: { id: pro.id },
                  })
                "
                class="align-end text-white mt-3"
                height="200"
                width="250"
                :src="pro.images[1]"
                cover
              >
                <v-card-title>{{ pro.title.slice(0, 10) }}</v-card-title>
              </v-img>
              <v-icon
                v-model="isSelected"
                :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'"
              ></v-icon>
              <v-card-subtitle> {{ pro.price }} TL </v-card-subtitle>

              <v-card-text>
                <!-- <div class="text-purple">Product Description</div> -->

                <div>{{ pro.description.slice(0, 30) }}</div>
              </v-card-text>

              <v-card-actions>
                <button-group
                  class="mt-5 ml-10 mr-10"
                  :pro="pro"
                  :actions="actions"
                ></button-group>
              </v-card-actions>
            </v-card>
          </v-hover>
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
  mounted() {
    this.getBasketGetters;
  },
  computed: {
    ...mapState(useProductStore, ["getFilterCategory", "getBasketGetters"]),
  },
});
</script>
<style scoped>

@media screen and (max-width: 1080px) {
  body .new{
    width: 600px;
  height: 300px;
  position: relative;
  margin: auto;
  }
}


@media screen and (max-width: 600px) {
  body .new{
    width: 350px;
  height: 270px;
  position: relative;
  margin: auto;
  }
}

.new {
  width: 1100px;
  height: 300px;
  position: relative;
  margin: auto;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.container {
  padding: 20px, 0;
}
.listItem {
  list-style: none;
}
.cardClass {
  margin-top: 15px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 410px;
}
.cardclassactive:hover {
  box-shadow: 2px 4px green;
}
</style>
