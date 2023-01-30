<template>
  <v-container class="toolBar" app>
    <div class="d-flex justify-center">
      <router-link to="/">
        <v-img
          class="ımg d-flex justify-center"
          src="/public/assets/hemhalLOGO2.jpeg"
          alt="HEMHAL"
          cover
        >
        </v-img>
      </router-link>
    </div>
    <v-col>
      <span class="d-flex justify-center">
        <i>loc.</i> <strong>KAZ DAĞLARI</strong>
      </span>
    </v-col>
    <v-divider></v-divider>
    <v-container class="my-2" >
      <v-row>
        <v-col xs="6" sm="6" md="6" lg="6" xl="6">
          <router-link class="route" :to="{ path: '/', hash: '#hakkimizda' }">
            <span>HAKKIMIZDA</span>
          </router-link>
          <router-link class="route" :to="{ path: '/', hash: '#SECTİON' }">
            <span>HEMHAL</span>
          </router-link>
          <router-link class="route" :to="{ path: '/', hash: '#iletişim' }">
            <span>İLETİŞİM</span>
          </router-link>
        </v-col>
        <v-col else class="d-none d-lg-flex">
          <!-- filtreleme işlemi -->
          <router-link class="route" active-class="routeChildren" to="/product">
            <div class="text-center">
              <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <span variant="plain" v-bind="props"> ÜRÜNLERİMİZ </span>
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

          <router-link
            class="route"
            active-class="routeChildren"
            to="/favorite"
          >
            BEĞENDİKLERİNİZ
          </router-link>
          <router-link class="route" active-class="routeChildren" to="/hello">
            SEPETİM</router-link
          >
        </v-col>

        <v-col cols="6" class="d-flex justify-end">
          <v-app-bar-nav-icon
            class="Menuİcon"
            variant="text"
            @click.stop="drawer = !drawer"
          >
          </v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-container>
    <v-container >
      <v-row>
        <v-layout>
          <v-navigation-drawer
            v-model="drawer"
            temporary
            app
            flat
            class="lefBar"
            expand-on-hover
            fixed
          >
            <h1 class="text-center">HEMHAL</h1>
            <v-divider></v-divider>
            <v-list density="compact" nav>
              <v-list-item>
                <router-link
                  class="route"
                  active-class="routeChildren"
                  to="/product"
                >
                  <div class="text-center">
                    <v-menu open-on-hover>
                      <template v-slot:activator="{ props }">
                        <span variant="plain" v-bind="props">
                          ÜRÜNLERİMİZ
                        </span>
                      </template>
                      <v-list>
                        <v-list-item
                          :active="false"
                          v-for="(categori, index) in filterItem"
                          to="/product"
                          :key="index"
                          @click="filterClouds(categori.name)"
                        >
                          <v-list-item-title>{{
                            categori.name
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </router-link>
              </v-list-item>
              <v-list-item>
                <router-link
                  class="route"
                  active-class="routeChildren"
                  to="/favorite"
                >
                  BEĞENDİKLERİNİZ
                </router-link>
              </v-list-item>
              <v-list-item>
                <router-link
                  class="route"
                  active-class="routeChildren"
                  to="/hello"
                >
                  SEPETİM</router-link
                >
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-spacer></v-spacer>
        <!-- left navigation içi main tarafı -->
          <v-main style="height: auto">
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </router-view>
          </v-main>
        </v-layout>

        
      </v-row>
    </v-container>
  </v-container>
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
      filterItem: [
        { name: "Cilt Bakım", icon: "mdi-map" },
        { name: "Saç Bakım", icon: "mdi-tablet" },
        { name: "Tütsü", icon: "mdi-table-furniture" },
        { name: "Doğal Taşlar", icon: "mdi-tshirt-crew-outline" },
      ],
      // open: false,
      navOpen: false,
      drawer: true,
      basketGetters: this.getBasketGetters,
    };
  },
  computed: {
    ...mapState(useProductStore, ["getBasketGetters", "getProductGetters"]),
  },
  methods: {
    ...mapActions(useProductStore, ["setfilter"]),
    filterClouds(catName: any) {
      this.$router.push({ name: "ProductList", path: "/product" });
      console.log("click =>", catName);
      this.setfilter(catName);
    },
  },
});
</script>

<style scoped>
.BlaBla {
  margin-top: 2px;
  font-family: "Inconsolata", monospace;
}
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
  margin-right: 40px;
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
