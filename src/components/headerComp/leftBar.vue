<template>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../../store/useProductStore";

export default defineComponent({
  name: "lefBar",
  data() {
    return {
      drawer: false,
      filterItem: [
        { name: "All Product", icon: "mdi-map" },
        { name: "Electronics", icon: "mdi-tablet" },
        { name: "Furniture", icon: "mdi-table-furniture" },
        { name: "Clothes", icon: "mdi-tshirt-crew-outline" },
        { name: "Shoes", icon: "mdi-shoe-heel" },
        { name: "Others", icon: "mdi-gift-outline" },
      ],
    };
  },

  methods: {
    ...mapActions(useProductStore, ["setfilter"]),

    filterClouds(catName: any) {
      this.$router.push({ name: "ProductList", path: "/" });
      console.log("click =>", catName);
      this.setfilter(catName);
    },
  },
});
</script>

<style scoped>
.navCLASS {
  width: 20px;
}
.navigation-list-item {
  background-color: white;
  padding-left: 8px;
  list-style: none;
  text-align: center;
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
    font-size: 14px;
  }
}

@media screen and (max-width: 1000px) {
  body .route {
    font-size: 10px;
  }
}
@media screen and (max-width: 750px) {
  body .route {
    font-size: 10px;
  }
}
@media screen and (max-width: 500px) {
  body .route {
    font-size: 13px;
    margin-right: 0px;
    padding: 3px;
  }
}
</style>
