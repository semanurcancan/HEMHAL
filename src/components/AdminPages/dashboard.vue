<template>
  <v-col>
    <v-row>
      <v-col cols="3" style="height: 20vh">
        <v-img
          class="ımg d-flex justify-center"
          src="/public/assets/hemhalLOGO2.jpeg"
          alt="HEMHAL"
          cover
        >
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
              <v-btn
                variant="text"
                class="text-black bg-lime-darken-1"
                @click="LogOut"
              >
                LogOut</v-btn
              >
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <adminsidenav></adminsidenav>
    <edit-product></edit-product>

    <!-- <v-row class="ma-4" style="width: 100vh">
      <v-col class="bg-lime-darken-3">
        <v-card-text class="mt-12 text-center">
          <h1 class="text-h3">Welcome Back !</h1>
          <h5 class="text-center text-h7">
            <span> {{}} </span>
          </h5>
        </v-card-text>
      </v-col>

      <v-col cols="12" md="8" class="bg-lime-lighten-5">
        <v-card-text class="mt-12">
          <v-col>
            <v-form>
              <v-text-field
                label="name"
                name="name"
                v-model="product.name"
                type="text"
                variant="underlined"
                class="text-lime-darken-3"
              >
              </v-text-field>

              <v-text-field
                label="quantity"
                v-model="product.quantity"
                id="quantity"
                name="quantity"
                type="text"
                variant="underlined"
                class="text-lime-darken-3"
              ></v-text-field>
            </v-form>
          </v-col>

          <v-col>
            <v-row class="d-flex justify-center">
              <v-btn rounded class="mt-2 bg-lime-darken-1">SING UP</v-btn>
            </v-row>
          </v-col>
        </v-card-text>
      </v-col>
    </v-row> -->
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";
import { signOut } from "@firebase/auth";
//coponents
import adminsidenav from "../AdminPages/adminSideNav.vue";
import editProduct from "./editProduct.vue";

// import {
//   collection,
//   addDoc,
//   doc,
//   getDoc,
//   query,
//   getDocs,
// } from "firebase/firestore";
// import db from "../../firebase";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  updateProfile,
  updateEmail,
  Auth,
} from "firebase/auth";
import auth from "../../firebase";

export default defineComponent({
  components: { adminsidenav, editProduct },
  name: "dashboard",
  data: () => ({
    userId: "" as any,
    product: {} as any,
    admin: "" as any,
    isLoggedIn: Boolean as any,
  }),
  mounted() {},
  created() {
    this.userId = localStorage.getItem("userId");
    this.admin = localStorage.getItem("adminInfo");
    // this.admin = this.getAdminInfo.fullName;
    // console.log(this.getAdminInfo.fullName);
  },
  computed: {
    ...mapState(useProductStore, ["getProductHemhal", "getAdminInfo"]),
  },
  methods: {
    ...mapActions(useProductStore, ["setProductHemdal"]),

    LogOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log("ÇIKIŞ YAP");
        localStorage.clear();
      });
    },
    // click(){
    //   this.admin = this.getAdminInfo.fullName
    // console.log(this.getAdminInfo.fullName)
    // }
  },
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
}</style>
