<template>
    <v-col> 
      <v-row  class="container d-none d-md-flex" >
         <v-card flat class="mt-5">
          <v-col>
            <v-row class="mb-2 text-center">
              <v-col> <strong>PRODUCT</strong></v-col>
              <v-col> <strong>DETAIL</strong> </v-col>
              <v-col> <strong>IMAGE</strong></v-col>
            </v-row>
            <v-divider class="mb-5"></v-divider>
            <v-row
              class="mb-2 text-center"
              v-for="(pro, index) in getFavoritesState"
              :key="index"
            >
              <v-col>{{ pro.title }} </v-col>
              <v-col> {{ pro.description }} </v-col>
              <v-col class="resmmm">
                <v-img
                  :src="pro.images[1]"
                  max-height="100"
                  max-width="100"
                ></v-img> </v-col
              ><v-divider></v-divider>
            </v-row>
          </v-col>
        </v-card>
      </v-row>

      <v-row  class="d-flex d-md-none">
        <v-col v-for="(pro, i) in getFavoritesState" :key="i">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
               variant="text"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
              class="cardClass"
              max-width="200"
            >
              <v-img
                @click="
                  this.$router.push({
                    name: 'Detail',
                    params: { id: pro.id },
                  })
                "
                class="align-end font-weight-light text-white ma-3 imgFAvori"
                :src="pro.images[1]"
                cover
              ><v-card-title>{{ pro.title.slice(0, 5) }}</v-card-title>
              </v-img>
              <v-row class="bg-brown-lighten-3">
                <v-col>
                   <v-btn icon @click.capture="addFavorite(pro)" variant="plain">
                <v-icon :icon="checkFavIcon(pro)" color="hemhalcolor"></v-icon>
              </v-btn>
                </v-col>
                <v-col>
                   <v-card-text>{{ pro.description.slice(0, 10) }}</v-card-text>
                </v-col>
              </v-row>
             
             

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
       
      </v-col>
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

    arrayUnic(): Product[] {
      return this.getBasketGetters.filter(
        (v, i, a) => a.findIndex((t) => t.id == v.id) === i
      );
    },
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
  body.imgFAvori{
/* max-width: 40rem; */
  }
}
</style>
