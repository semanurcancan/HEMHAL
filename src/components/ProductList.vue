<template>
  <v-app class="container">
    <v-col class="containerProduct">
      <v-row>
        <v-col v-if="getFilterCategory.length > 0">
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
                  <v-btn icon @click.capture="addFavorite(pro)" variant="plain">
                    <v-icon :icon="checkFavIcon(pro)" color="pink"></v-icon>
                  </v-btn>
                  <v-card-subtitle class="">
                    {{ pro.price }} TL
                  </v-card-subtitle>
                  <v-card-text>
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

        <v-col v-else v-for="(pro, i) in getProductGetters" :key="i">
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
                <v-card-title>{{ pro.title.slice(0, 50) }}</v-card-title>
              </v-img>

              <v-btn icon @click.capture="addFavorite(pro)" variant="plain">
                <v-icon :icon="checkFavIcon(pro)" color="pink"></v-icon>
              </v-btn>

              <v-card-subtitle> {{ pro.price }} TL </v-card-subtitle>

              <v-card-text>
                <div>
                  {{ pro.description.slice(0, 10) }}
                </div>
              </v-card-text>
              <v-card-actions>
                <button-group
                  class="mt-5 mx-10"
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
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../store/useProductStore";
import NavbarComp from "../components/headerComp/NavbarComp.vue";

//types
import { Product } from "../models/entities/ProductModels";
import type {
  FavoriteObjectType,
  TitleObjectType,
} from "../models/entities/Icontype";

export default defineComponent({
  components: { ButtonGroup, NavbarComp },
  name: "ProductList",

  props: {
    getProductGetters: {
      type: Object as PropType<Product>,
    },
  },
  data: () => ({
    products: inject("products"),
    actions: inject("actions"),
  }),
  mounted() {
    this.getBasketGetters;
  },
  methods: {
    addFavorite(pro: FavoriteObjectType) {
      this.addOrRemoveFavorite(pro);
    },
    clickItem(e: any) {
      console.log(e);
      this.$router.push({ name: e.name });
    },
    checkFavIcon(pro: Product): string {
      const findIndex = this.getFavoritesState.findIndex(
        (fav: any) => fav.id === pro.id
      );
      if (findIndex == -1) {
        return "mdi-cards-heart-outline";
      } else {
        return "mdi-cards-heart";
      }
    },
    ...mapActions(useProductStore, ["addOrRemoveFavorite"]),
  },

  computed: {
    ...mapState(useProductStore, [
      "getFilterCategory",
      "getBasketGetters",
      "getFavoritesState",
    ]),
  },
  watch: {
    getFavoritesState() {
      console.log("getFavoritesState", this.getFavoritesState);
    },
  },
});
</script>

<style scoped>
.containerProduct {
  padding: 20px;
  margin-left: 30px;
  margin-top: 20px;
}
.cardClass {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 410px;
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
.listItem {
  list-style: none;
}
</style>
