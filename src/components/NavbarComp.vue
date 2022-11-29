<template>
  <nav>
    <v-toolbar
      elevation="3"
      color="black"
      theme="dark"
      app
      height="100"
      flat
      class="px-12"
    >
      <v-toolbar-title class="text-grey text-xl-caption text-h5">
        <span class="font-italic font-weight-thin">BLA BLA </span>
        <span class="title">SHOP</span>
      </v-toolbar-title>
      <v-spacer> </v-spacer>
      <router-link class="route" active-class="routeChildren" to="/d">
        <i>PRODUCT LIST</i>
      </router-link>
      <router-link class="route" active-class="routeChildren" to="/hello"
        ><v-btn> <i>BASKET</i> </v-btn></router-link
      >
      <v-btn class="quantity"
        ><strong>{{ getBasketGetters.length }}</strong></v-btn
      >
      <v-app-bar-nav-icon
        class="text-grey"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="bg-grey-darken-3 text-center "
      expand-on-hover
      fixed
      permanent
      rail
    >
      <h1 class=" mt-10 "> <v-icon class="dashboardİcon">mdi-monitor-dashboard</v-icon> </h1>
      <v-divider class="mt-5 mb-5"></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="(categori, index) in filterItem"
          :key="index"
          @click="filterClouds(categori.name)"
          :prepend-icon="categori.icon"
          value="home"
          class="navigation-list-item"
        >
        <li> {{categori.name}} </li>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from "vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../store/useProductStore";

export default defineComponent({
  name: "NavbarComp",
  data() {
    return {
      drawer: true,
      filterItem: [
      {name: "All Product", icon: "mdi-map"},
      {name: "electronics", icon: "mdi-tablet"},
      {name: "women's clothing", icon: "mdi-tag-heart-outline"},
      {name: "jewelery", icon: "mdi-gift-outline"},
      {name: "men's clothing", icon: "mdi-golf-tee"},
      ],
      basketGetters: this.getBasketGetters,
    };
  },
  computed: {
    ...mapState(useProductStore, ["getBasketGetters", "getProductGetters"]),
  },
  methods: {
    ...mapActions(useProductStore, ["setfilter"]),

    filterClouds(catName: any) {
      console.log("click =>", catName);
      this.setfilter(catName);
    },
  },
});
</script>

<style scoped>
.navigation-list-item {
  padding-left: 8px;
  list-style: none;
  text-align: center;
}
.route {
  text-decoration: none;
  color: #dacff7;
  display: flex;
  display: inline-block;
  /* align-items: flex-start;
  justify-content: space-between; */
}
.routeChildren {
  text-decoration: none;
  color: #58c7fab2;
  display: inline-block;
}
.quantity {
  color: #58c7fab2;
  font-size: 26px;
}

.dashboardİcon{
   animation: color-change 3s infinite;
}
.title {
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
}
</style>
