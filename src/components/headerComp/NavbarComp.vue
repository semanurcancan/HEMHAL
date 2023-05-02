<template>
  <v-col class="toolBar" app>
    <v-row class="d-flex justify-center">
      <router-link to="/">
        <v-img
          class="ımg d-flex justify-center"
          src="/public/assets/hemhalLOGO2.jpeg"
          alt="HEMHAL"
          cover
        >
        </v-img>
      </router-link>
    </v-row>
    <v-row class="d-flex justify-center py-2">
      <h2>
        <span>
          <i class="font-weight-light">loc.</i> <strong>KAZ DAĞLARI</strong>
        </span>
      </h2>
    </v-row>
    <hr class="mt-3" />
    <v-row class="my-1">
      <v-col xs="6" sm="5" md="5" lg="6" xl="5">
        <v-row>
          <v-col>
            <router-link class="route" :to="{ path: '/', hash: '#hakkimizda' }">
              <span>HEMHAL</span>
            </router-link>
          </v-col>
          <v-col>
            <router-link class="route" :to="{ path: '/', hash: '#SECTİON' }">
              <span>BLOG</span>
            </router-link>
          </v-col>
          <v-col>
            <router-link class="route" :to="{ path: '/', hash: '#iletişim' }">
              <span>İLETİŞİM</span>
            </router-link>
          </v-col>
        </v-row>
      </v-col>

      <v-spacer></v-spacer>

      <v-col class="d-none d-lg-flex" lg="6" xl="5">
        <!-- filtreleme işlemi -->
        <v-row>
          <v-col>
            <router-link
              class="route d-lg-flex justify-start"
              active-class="routeChildren"
              to="/product"
            >
              <div class="text-center">
                <v-menu open-on-hover>
                  <template v-slot:activator="{ props }">
                    <span variant="plain" v-bind="props"> ÜRETİMLERİMİZ </span>
                  </template>
                  <v-list>
                    <v-list-item
                      :active="false"
                      v-for="(categori, index) in filterItem"
                      to="/product"
                      :key="index"
                      @click="filterClouds(categori.name)"
                    >
                      <v-list-item-title>{{ categori.name }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </router-link>
          </v-col>
          <!-- <v-col>
            <router-link
              class="route d-lg-flex justify-end"
              active-class="routeChildren"
              to="/favorite"
            >
              <span>BEĞENDİKLERİNİZ</span>
            </router-link>
          </v-col> -->
          <v-col>
            <router-link
              class="route d-lg-flex justify-end"
              active-class="routeChildren"
              to="/hello"
            >
              <span>SEPETİM</span>
            </router-link>
          </v-col>
          <v-col>
            <router-link
              class="route d-lg-flex justify-end"
              active-class="routeChildren"
              to="/loginpage"
            >
              <span>ÜYE OL</span>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer class="d-flex d-lg-none"></v-spacer>
      <left-bar-vue class="d-flex d-lg-none"></left-bar-vue>
    </v-row>
    <hr />
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../../store/useProductStore";
//components
import leftBarVue from "./leftBar.vue";
import burgerMenu from "./burgerMenu.vue";

export default defineComponent({
  name: "NavbarComp",
  components: { leftBarVue, burgerMenu },
  el: "#sidemenu",

  data() {
    return {
      item: false,
      navOpen: false,
      drawer: true,
      filterItem: [] as any,
      basketGetters: this.getBasketGetters,
    };
  },
  mounted() {
    this.filterItemName();
  },
  computed: {
    ...mapState(useProductStore, [
      "getBasketGetters",
      "getProductGetters",
      "getProductHemhal",
      "getCategory",
      "filterCategoryResult"
    ]),
  },
  methods: {
    ...mapActions(useProductStore, ["setfilter"]),
    filterItemName() {
      this.filterItem= this.getCategory;
      console.log(this.filterItem, "NE GELDİ FİLTRELİ")
    },
    filterClouds(catName: any) {
      this.setfilter(catName);
      setTimeout(() => {
        this.$router.push({ name: "ProductList", path: "/product" });
      }, 5);
    },
  },
});
</script>

<style scoped>
.toolBar {
  background-color: white;
  height: 300px;
  margin-bottom: 5px;
}

.ımg {
  height: 200px;
  width: 600px;
}
@media screen and (max-width: 2500px) {
  body .ımg {
    height: 200px;
    width: 600px;
  }
}
@media screen and (max-width: 2000px) {
  body .ımg {
    height: 200px;
    width: 600px;
  }
}

@media screen and (max-width: 1500px) {
  body .ımg {
    height: 200px;
    width: 600px;
  }
}
@media screen and (max-width: 1300px) {
  body .ımg {
    height: 150px;
    width: 400px;
  }
}

@media screen and (max-width: 1000px) {
  body .ımg {
    height: 150px;
    width: 400px;
  }
}
@media screen and (max-width: 750px) {
  body .ımg {
    height: 150px;
    width: 350px;
  }
}
@media screen and (max-width: 500px) {
  body .ımg {
    height: 100px;
    width: 180px;
  }
}
@media screen and (min-width: 1280px) {
  body .Menuİcon {
    display: none;
  }
  body.menuNONE {
    display: none;
  }
}
@media screen and (min-width: 1500px) {
  body.menuNONE {
    background-color: rgb(14, 209, 209);
    display: none;
  }
}
.menuNONE {
  display: flex;
  justify-content: end;
}

.route {
  text-decoration: none;
  color: black;
  display: inline-block;
}
.route:hover {
  color: rgb(158, 147, 82);
}

.routeChildren {
  font-weight: bold;
  display: inline-block;
}

@media screen and (max-width: 2500px) {
  body .route {
    font-size: 20px;
  }
}
@media screen and (max-width: 2000px) {
  body .route {
    font-size: 20px;
  }
}

@media screen and (max-width: 1500px) {
  body .route {
    font-size: 20px;
  }
}
@media screen and (max-width: 1300px) {
  body .route {
    font-size: 20px;
  }
}

@media screen and (max-width: 1000px) {
  body .route {
    font-size: 13px;
  }
}
@media screen and (max-width: 750px) {
  body .route {
    font-size: 14px;
  }
}
@media screen and (max-width: 500px) {
  body .route {
    font-size: 13px;
    margin-right: 0px;
    padding: 3px;
  }
}

/* .title {
  animation: color-change 3s infinite;
}
@keyframes color-change {
  80% {
    color: #8958fab2;
  }
  20% {
    color: #58c7fab2;
  }
  0% {
    color: #bf58fab2;
  }
} */
</style>
