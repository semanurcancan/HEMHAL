<template>
  <v-container class="bg-lime-lighten-1">
    <v-row>
      <v-col cols="6" class="bg-lime-darken-3">
        <v-card-text class="mt-4 text-center">
          <h1 class="text-h3">Welcome Back !</h1>
          <h5 class="text-center text-h7">
            <span> {{ admin }} </span>
          </h5>
        </v-card-text>
      </v-col>
      <v-col cols="6" class="bg-lime-darken-3">
        <v-card-text class=" text-center mt-4">
          <h1>HELLO</h1>
        </v-card-text>
      </v-col>
    </v-row>

    
    <v-row class="fill-height" style="width: 100vh">
      <v-col class="color1">
        <v-card-text class="mt-12 text-center">
          <h1 class="text-h3">Welcome Back !</h1>
          <h5 class="text-center text-h7">
            <span> {{ }} </span>
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
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";

export default defineComponent({
  components: {},
  name: "dashboard",
  data: () => ({
    userId: "" as any,
    product: {} as any,
    admin: "" as any,
  }),
  mounted() {
    
  },
  created() {
    this.userId = localStorage.getItem("userId");
    this.admin = localStorage.getItem("adminInfo")
    // this.admin = this.getAdminInfo.fullName;
    // console.log(this.getAdminInfo.fullName);
  },
  computed: {
    ...mapState(useProductStore, ["getProductHemhal", "getAdminInfo"]),
  },
  methods: {
    ...mapActions(useProductStore, ["setProductHemdal"]),
    // click(){
    //   this.admin = this.getAdminInfo.fullName
    // console.log(this.getAdminInfo.fullName)
    // }
  },
});
</script>
