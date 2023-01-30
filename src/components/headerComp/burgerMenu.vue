<template>
 <v-container class="my-2">
 <leftBarVue></leftBarVue>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../../store/useProductStore";
import leftBarVue from "../headerComp/leftBar.vue"
export default defineComponent({
  name: "burgerMenu",
  components: { leftBarVue },
  data(){
    return {
      drawer: true,
      open:false,
      group: null,
      filterItem: [
        { name: "Cilt Bakım", icon: "mdi-map" },
        { name: "Saç Bakım", icon: "mdi-tablet" },
        { name: "Tütsü", icon: "mdi-table-furniture" },
        { name: "Doğal Taşlar", icon: "mdi-tshirt-crew-outline" },
      ],
    }
  },
  methods:{
    ...mapActions(useProductStore, ["setfilter"]),
    filterClouds(catName: any) {
      this.$router.push({ name: "ProductList", path: "/product" });
      console.log("click =>", catName);
      this.setfilter(catName);
    },
  },
  watch: {
      group () {
        this.drawer = true
      },
    },
});
</script>

<style scoped>
body{
margin-left: 0px;
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
</style>
