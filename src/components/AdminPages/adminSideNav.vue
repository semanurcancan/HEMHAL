<template>
  <v-col>
    <v-row>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" class="bg-brown-lighten-4">
        <v-list-item :size="10" prepend-avatar="/public/assets/profilImg.jpeg" title="John Leider" nav>
          <template v-slot:append>
            <v-btn class="d-flex justify-end" variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item v-for="(item, index) in items" :prepend-icon="item.icon" :title="item.title" value="product"
            @click="$router.push(item.name)"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- <v-main class="bg-lime-darken-4" :style="{height: 1000}">
            <v-row>
              <v-col cols="3" style="height: 20vh">
                <v-img class="ımg d-flex justify-center" src="/public/assets/hemhalLOGO2.jpeg" alt="HEMHAL" cover>
                </v-img>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="4">
                <v-card-text class="mt-4 text-center">
                  <v-row>
                    <v-col cols="12">
                      <h1 class="text-h3">Welcome Back !</h1>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <h3 class="text-center text-h7">
                        <span> {{ admin }} </span>
                      </h3>
                    </v-col>
                    <v-col cols="6">
                      <v-btn variant="text" class="text-black bg-lime-darken-1" @click="LogOut()">
                        LogOut</v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-col>
              <v-row>
                <v-col>
                  <router-view></router-view>
                </v-col>
              </v-row>
            </v-col>
          </v-main> -->
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";
import editProduct from "./editProduct.vue";
import userspage from "./userspage.vue"
import hemhallist from "./hemhallist.vue"
import { RouterLink } from "vue-router";


export default defineComponent({
  components: { editProduct, userspage, hemhallist, RouterLink },
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
        { title: "PRODUCT", icon: "mdi-home-city", name: "hemhallist" },
        { title: "EDİT PAGE", icon: "mdi-account", name: "editproduct" },
        { title: "MEMBERS", icon: "mdi-account-group-outline", name: "userspage" },
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
.navigation {
  background-color: rgb(192, 174, 150);
}

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
