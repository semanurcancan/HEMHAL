<template>
  <v-col class="mb-16 mt-10">
    <v-table class="bg-grey-lighten-4">
      <thead>
        <tr>
          <th class="text-left text-h6 text-disabled">Name</th>
          <th class="text-left text-disabled text-h6">Category</th>
          <th class="text-left text-h6 text-disabled">Price</th>
          <th class="text-left text-h6 text-disabled">Rating</th>
          <th class="text-left text-h6 text-disabled">Image</th>
          <th class="text-left text-h6 text-disabled"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pro, index) in getFavoritesState" :key="index">
          <td>{{ pro.name }}</td>
          <td>{{ pro.category.name }}</td>
          <td>{{ pro.price }}</td>
          <td>{{ pro.rating }}</td>
          <td>
            <v-row>
              <v-col
                v-for="(img, index) in pro.images"
                :key="index"
                class="d-flex child-flex"
                cols="4"
              >
                <v-img
                  :src="img.url"
                  :lazy-src="img.url"
                  width="60"
                  aspect-ratio="1"
                  cover
                  class="bg-grey-lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </td>
          <td>
            <v-btn
              icon
              @click.capture="addFavorite(pro)"
              color="lime"
              variant="plain"
            >
              <v-icon :icon="checkFavIcon(pro)" color="hemhalcolor"></v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <!-- <v-row class="mb-2 d-flex text-center">
      <v-col> <strong>PRODUCT</strong></v-col>
      <v-col> <strong>DETAIL</strong> </v-col>
      <v-col> <strong>Favoriler</strong></v-col>
      <v-col> <strong>IMAGE</strong></v-col>
    </v-row>
    <v-divider class="mb-5"></v-divider>
    <v-row
      class="mb-2 d-flex text-start"
      v-for="(pro, index) in getFavoritesState"
      :key="index"
    >
      <v-col>{{ pro.name }} </v-col>
      <v-col> {{ pro.title }} </v-col>
      <v-col class="">
        <v-btn
          icon
          @click.capture="addFavorite(pro)"
          color="lime"
          variant="plain"
        >
          <v-icon :icon="checkFavIcon(pro)" color="hemhalcolor"></v-icon>
        </v-btn>
      </v-col>
      <v-col v-for="(img, i) in pro.images" :key="i" class="resmmm">
        <v-img :src="img.url" max-height="50" max-width="50"></v-img> </v-col
      ><v-divider></v-divider>
    </v-row> -->
  </v-col>

  <!-- <v-row>
        <v-col v-for="(pro, i) in getFavoritesState" :key="i">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
               variant="text"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
              class="cardClass"
              max-width="500"
            >
            <v-card-title>{{ pro.title}}</v-card-title>
              <v-img
                @click="
                  this.$router.push({
                    name: 'Detail',
                    params: { id: pro.id },
                  })
                "
                class="align-end font-weight-light text-white ma-3 imgFAvori"
                :src="pro.images[0].url"
                width="200"
                cover
              >
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row> -->


</template>
<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../store/useProductStore";
import { AgGridVue } from "ag-grid-vue3";
import type { Product } from "../models/entities/ProductModels";
import gridImg from "./GridImg.vue";
import ButtonGroup from "./ButtonGroup.vue";
import type {
  FavoriteObjectType,
  TitleObjectType,
} from "../models/entities/Icontype";

export default defineComponent({
  components: {
    AgGridVue,
    gridImg,
    ButtonGroup,
  },
  data() {
    return {
      products: inject("products"),
      actions: inject("actions"),
      columnDefs: [
        {
          headerName: "image",
          field: "images[1]",
          cellRenderer: "gridImg",
          cellRendererParams: {
            clicked: function (field) {
              alert(`${field} was clicked`);
            },
          },
        },
        { headerName: "title", field: "title" },
        {
          headerName: "price",
          field: "price",
          valueGetter: this.priceQuantity,
        },

        { headerName: "quantity", field: "quantity" },
        {
          headerName: "category",
          field: "category",
          valueGetter: this.categoryWiev,
        },
      ],
      rowData: new Array<Product>(),
      basket: [],
      productStore: useProductStore(),
    };
  },
  computed: {
    //pinia da mapgetters yok o yuzden getter verisi olan getProduct ...mapstate ile cagırılıyor.
    ...mapState(useProductStore, [
      "getBasketGetters",
      "GetBasketPrice",
      "getFavoritesState",
      "getFavoritesState",
      "getFilterCategory",
    ]),

    // arrayUnic(): Product[] {
    //   return this.getBasketGetters.filter(
    //     (v, i, a) => a.findIndex((t) => t.id == v.id) === i
    //   );
    // },
  },
  updated() {
    this.getBasketGetters;
  },
  methods: {
    ...mapActions(useProductStore, ["addOrRemoveFavorite"]),
    addFavorite(pro: FavoriteObjectType) {
      this.addOrRemoveFavorite(pro);
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
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.resmmm {
  text-align: -webkit-center;
}
.cardClass {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.color5 {
  background-color: #847577;
}

.color4 {
  background-color: #e3d5ca;
}

.color3 {
  background-color: #d6ccc2;
}

.color2 {
  background-color: rgb(236, 218, 193);
}

.color1 {
  background-color: rgb(192, 174, 150);
}
@media screen and (max-width: 2500px) {
  body .container {
    margin-left: 150px;
    margin-right: 150px;
  }
}
@media screen and (max-width: 2000px) {
  body .container {
    margin-left: 120px;
    margin-right: 120px;
  }
}

@media screen and (max-width: 1500px) {
  body .container {
    /* background-color: rgb(89, 89, 4); */
    margin-left: 100px;
    margin-right: 100px;
  }
}
@media screen and (max-width: 1300px) {
  body .container {
    margin-left: 100px;
    margin-right: 100px;
  }
}
@media screen and (max-width: 1000px) {
  body .container {
    margin-left: 110px;
    margin-right: 110px;
  }
}
@media screen and (max-width: 750px) {
  body .container {
    margin-left: 90px;
    margin-right: 90px;
  }
}
@media screen and (max-width: 500px) {
  body .cardClass {
    width: 20rem;
    height: 15rem;
  }
  body.imgFAvori {
    /* max-width: 40rem; */
  }
}
</style>
