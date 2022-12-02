<template>
  <nav >
    <v-toolbar  elevation="24" height="40" class="ml-14">
      <strong class="kayanyazi">
        <span>
          Black Friday sales have started!! 20% discount on all products...
          Black Friday sales have started. 20% discount on all products.. Black
          Friday sales have started. 20% discount on all products..
        </span>
      </strong>
    </v-toolbar>

    <v-toolbar elevation="3" class="toolBar" app height="100">
      <v-toolbar-title class="text-h5">
        <span class="BlaBla">BLA BLA </span>
        <span class="">SHOP</span>
      </v-toolbar-title>
      <v-spacer> </v-spacer>

      <router-link class="route" active-class="routeChildren" to="/">
        <p>PRODUCT LIST</p>
      </router-link>
      <router-link class="route" active-class="routeChildren" to="/hello">
        <p>BASKET</p></router-link
      >
      <v-btn class="quantity"
        ><strong>{{ getBasketGetters.length }}</strong></v-btn
      >
    
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      class="lefBar"
      expand-on-hover
      fixed
      permanent
      rail
    >
      <h1 class="mt-15 text-center">
        <v-img
          src="https://media.istockphoto.com/id/1144720196/tr/vekt%C3%B6r/b-harfi.jpg?s=612x612&w=is&k=20&c=mw8jt9aN5f5RTju7V3kZLGR5JC6vp3_vqOQvQWGNDYQ="
          max-height="60"
        ></v-img>
      </h1>
      <v-divider class="mt-5 mb-5"></v-divider>

      <v-list nav>
        <v-list-item
          v-for="(categori, index) in filterItem"
          to="/"
          :key="index"
          @click="filterClouds(categori.name)"
          :prepend-icon="categori.icon"
        
          class="navigation-list-item"
        >
          <li>{{ categori.name }}</li>
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../store/useProductStore";

export default defineComponent({
  name: "NavbarComp",
  data() {
    return {
      drawer: true,
      filterItem: [
        { name: "All Product", icon: "mdi-map" },
        { name: "Electronics", icon: "mdi-tablet" },
        { name: "Furniture", icon: "mdi-table-furniture" },
        { name: "Clothes", icon: "mdi-tshirt-crew-outline" },
        { name: "Shoes", icon: "mdi-shoe-heel" },
        { name: "Others", icon: "mdi-gift-outline" },
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
      this.$router.push({name: 'ProductList', path: "/"})
      console.log("click =>", catName);
      this.setfilter(catName);
     
    },
  },
});
</script>

<style scoped>
.BlaBla {
  font-family: "Inconsolata", monospace;
}
.kayanyazi {
  background-color: black;
  color: white;
  height: 35px;
  padding-top: 4px;
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
}

.kayanyazi span {
  display: inline-block;
  padding-left: 100%;
  text-indent: 0;
  animation: marquee 24s linear infinite;
}
.kayanyazi span:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

.toolBar {
  background-color: whitesmoke;
  margin-left: 50px;
}
.lefBar {
  text-align: center;
}
.navigation-list-item {
  background-color: white;
  padding-left: 8px;
  list-style: none;
  text-align: center;
}
.route {
  margin-right: 30px;
  text-decoration: none;
  color: black;
  display: flex;
  display: inline-block;
}
.routeChildren {
  text-decoration: none;
  font-size: 22px;
  display: inline-block;
}
.quantity {
  font-size: 32px;
}

.dashboardİcon {
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
