<template>
<v-navigation-drawer
      app
      flat
      v-model="drawer"
      class="lefBar"
      expand-on-hover
      fixed
      permanent
      rail
    >
      <!-- <h1 class="mt-15 text-center">
        <v-img
          src="https://media.istockphoto.com/id/1144720196/tr/vekt%C3%B6r/b-harfi.jpg?s=612x612&w=is&k=20&c=mw8jt9aN5f5RTju7V3kZLGR5JC6vp3_vqOQvQWGNDYQ="
          max-height="60"
        ></v-img>
      </h1> -->

      <v-list nav>
        <v-list-item
        :active="false"
          v-for="(categori, index) in filterItem"
          to="/"
          :key="index"
          @click="filterClouds(categori.name)"
          :prepend-icon="categori.icon"
          class="navigation-list-item"
        >
          <li class=" text-deep-purple">{{ categori.name }}</li>
          <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../../store/useProductStore";


export default defineComponent({
name:"lefBar",
data(){
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
    }
},


methods: {

    ...mapActions(useProductStore, ["setfilter"]),

    filterClouds(catName: any) {
      this.$router.push({name: 'ProductList', path: "/"})
      console.log("click =>", catName);
      this.setfilter(catName);
     
    },
}


})


</script>



<style scoped>
.navigation-list-item {
  background-color: white;
  padding-left: 8px;
  list-style: none;
  text-align: center;
}
</style>