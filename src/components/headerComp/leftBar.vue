<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-end d-flex d-lg-none">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
      </v-col>
    <v-row>
      <v-navigation-drawer
      elevation="0"
        v-model="drawer"
        width="200"
        permanent
        app
        flat
        fixed
        class="leftBar bg-gray-1"
      >
      <v-row class="my-2">
        <v-col cols="8"> <h1 class="text-center">HEMHAL</h1></v-col>
        <v-col><v-icon icon="mdi-close"  @click.stop="drawer = !drawer"></v-icon></v-col>
      </v-row>
       
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item
            class="route"
            active-class="routeChildren"
            @click.stop="item = !item"
          >
            ÜRÜNLER
          </v-list-item>
          <v-list-item
            v-if="item"
            :active="false"
            v-for="(categori, index) in filterItem"
            to="/product"
            :key="index"
            @click="filterClouds(categori.name)"
          >
            <v-list-item-title>{{ categori.name }}</v-list-item-title>
          </v-list-item>

          <!-- <v-list-item>
            <router-link
              class="route"
              active-class="routeChildren"
              to="/product"
            >
              <div class="text-center">
                <v-menu open-on-hover>
                  <template v-slot:activator="{ props }">
                    <span @click="item = !item" variant="plain" v-bind="props">
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
                      <v-list-item-title>{{ categori.name }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </router-link>
          </v-list-item> -->
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
            <router-link class="route" active-class="routeChildren" to="/hello">
              SEPETİM</router-link
            >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-row>
  </v-row>
  
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
      navOpen: false,
      item: false,
      filterItem: null as any,
    };
  },
  mounted() {
    this.filterItemName();
  },
  computed: {
    ...mapState(useProductStore, [ "getCategory"]),
  },
  methods: {
    ...mapActions(useProductStore, ["setfilter"]),
    filterItemName() {
      this.filterItem = this.getCategory;
    },
    filterClouds(catName: any) {
      this.$router.push({ name: "ProductList", path: "/" });
      console.log("click =>", catName);
      this.setfilter(catName);
      this.item = false
    },
  },
});
</script>

<style scoped>
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
</style>
