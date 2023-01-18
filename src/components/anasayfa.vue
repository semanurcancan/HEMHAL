<template>
  <v-app class="container">
    <v-toolbar-title class="text-h5 title">
      <router-link class="route" active-class="routeChildren" to="/product">
        <v-img
        class="ımg"
          src="/public/assets/anasayfaIMG.jpeg"
          alt="HEMHAL"
          cover
        >
        </v-img>
      </router-link>
    </v-toolbar-title>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//components

export default defineComponent({
  name: "anasayfa",
  data() {},
  computed: {},
  methods: {},
});
</script>

<style scoped>
@media screen and (max-width: 2500px) {
  body .ımg {
    background-color: rgba(234, 18, 18, 0.899);
    height: 300px;
   width: 300px;
  
  }
}
@media screen and (max-width: 2000px) {
  body .ımg {
    background-color: rgba(21, 211, 87, 0.784);
    height: 300px;
   width: 300px;
  
  }
}

@media screen and (max-width: 1500px) {
  body .ımg {
    background-color: rgb(89, 89, 4);
    height: 300px;
   width: 300px;
  }
}
@media screen and (max-width: 1300px) {
  body .ımg {
    background-color: rgb(89, 89, 4);
    height: 300px;
   width: 300px;
  }
}
@media screen and (max-width: 1000px) {
  body .ımg {
    background-color: rgba(8, 124, 48, 0.784);
    height: 300px;
   width: 300px;
  
  }
}
@media screen and (max-width: 750px) {
  body .ımg {
    background-color: rgb(232, 232, 105);
    height: 300px;
   width: 300px;
    
  }
}
@media screen and (max-width: 500px) {
  body .ımg {
    background-color: rgb(128, 109, 233);
   height: 300px;
   width: 300px;
  }
}
.container {
  background-color: rgba(10, 241, 98, 0.907);
  margin-top: 15px;
}

.route {
  text-decoration: none;
  color: black;
  display: inline-block;
}
</style>
