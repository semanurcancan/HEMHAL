<template>
  <v-card >
    <v-layout >
      <v-navigation-drawer
      
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        class="text-sm-h7 mt-13"
      >
        <v-list-item
          :size="10"
          prepend-avatar="/public/assets/profilImg.jpeg"
          title="John Leider"
          nav
        >
          <!-- <v-avatar size="x-large">
            <v-img src="/public/assets/profilImg.jpeg" alt="John"></v-img>
          </v-avatar> -->
          <template v-slot:append>
            <v-btn
              class="d-flex justify-end"
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
          v-for="(item, index) in items"
            :prepend-icon="item.icon"
            :title="item.title"
            value="product"
            :to=  "{name: item.name}"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
        <RouterView />
    </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";

export default defineComponent({
  components: {},
  name: "adminsidenav",
  data() {
    return {
      userId: "" as any,
      product: {} as any,
      admin: "" as any,
      isLoggedIn: Boolean as any,
      drawer: true,
      rail: true,
      items: [
        { title: "PRODUCT", icon: "mdi-home-city", name:"productlist"},
        { title: "EDİT PAGE", icon: "mdi-account", name:"editproduct"},
        { title: "MEMBERS", icon: "mdi-account-group-outline", name:"userspage"},
      ],
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
  created() {
    this.userId = localStorage.getItem("userId");
    this.admin = localStorage.getItem("adminInfo");
    // this.admin = this.getAdminInfo.fullName;
    // console.log(this.getAdminInfo.fullName);
  },

  //   methods: {
  //     ...mapActions(useProductStore, ["setfilter"]),

  //     filterClouds(catName: any) {
  //       this.$router.push({ name: "ProductList", path: "/" });
  //       console.log("click =>", catName);
  //       this.setfilter(catName);
  //       this.item = false
  //     },
  //   },
});
</script>
<style scoped>
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

</style>
