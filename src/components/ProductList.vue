<template>
  <v-app class="container">
    <v-col class="containerProduct">
      <v-row>
        <v-col v-for="(pro, i) in getProductHemhal" :key="i">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              flat
              :border="false"
              class="cardClass"
              max-width="250"
              max-height="250"
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
                :src="pro.images[0].url"
                cover
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-brown-lighten-4 v-card--reveal text-h4"
                    style="height: 100%"
                  >
                   {{ pro.name }}
                  </div>
                </v-expand-transition>
              </v-img>

              <!-- <v-btn icon @click.capture="addFavorite(pro)" variant="plain">
                <v-icon :icon="checkFavIcon(pro)" color="pink"></v-icon>
              </v-btn> -->

              <!-- <v-card-text class=" bg-amber " :style="{minHeight: '2rem', maxHeight: '4rem',minWidth: '18px', maxWidth: '40rem' }">
                  <v-card-subtitle class=" text-amber "> {{ pro.price }} TL </v-card-subtitle>
                  <v-card-subtitle> {{ pro.name}} </v-card-subtitle>
              </v-card-text> -->
              <!-- <v-card-actions>
                <button-group
                  class="mt-5 mx-10"
                  :pro="pro"
                  :actions="actions"
                ></button-group>
              </v-card-actions> -->
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <v-row>
        <!-- <v-col v-if="getFilterCategory.length > 0">
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
        </v-col> -->

        <!-- <v-col v-else v-for="(pro, i) in getProductHemhal" :key="i">
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
        </v-col> -->

        <!-- <v-col v-for="(pro, i) in getProductHemhal" :key="i">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :border="false"
              :elevation="isHovering ? 6 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
              class="cardClass"
              max-width="350"
            >
            <v-card-title>{{ pro.name }}</v-card-title>

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
                :src="pro.images[0].url"
                cover
              >
              </v-img>

              <v-btn icon @click.capture="addFavorite(pro)" variant="plain">
                <v-icon :icon="checkFavIcon(pro)" color="pink"></v-icon>
              </v-btn>

              <v-card-subtitle> {{ pro.price }} TL </v-card-subtitle>

              <v-card-text> {{ pro.description}} </v-card-text>
               <v-card-actions>
                <button-group
                  class="mt-5 mx-10"
                  :pro="pro"
                  :actions="actions"
                ></button-group>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>-->
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
import type {
  FavoriteObjectType,
  TitleObjectType,
} from "../models/entities/Icontype";
//types
import { Product } from "../models/entities/ProductModels";
export default defineComponent({
  components: { ButtonGroup, NavbarComp },
  name: "ProductList",
  data: () => ({
    // products: inject("products"),
    // actions: inject("actions"),
  }),
  mounted() {
    this.getBasketGetters;
    this.getHEMHAL();
  },
  methods: {
    addFavorite(pro: FavoriteObjectType) {
      this.addOrRemoveFavorite(pro);
    },
    getHEMHAL() {
      console.log(this.getProductHemhal, "Product List");
    },
    // clickItem(e: any) {
    //   console.log(e);
    //   this.$router.push({ name: e.name });
    // },
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
      "getProductHemhal",
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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.containerProduct {
  padding: 20px;
  margin-left: 30px;
  margin-top: 20px;
}
.cardClass {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300;
  height: 410px;
  
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}
/* .v-card:not(.on-hover) {
  opacity: 0.8;
} */
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.listItem {
  list-style: none;
}
</style>
