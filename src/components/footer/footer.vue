<template>
  <v-col>
    <!-- <v-toolbar-title class="text-h5 title">
        <v-img
          src="/public/assets/anasayfaIMG.jpeg"
          alt="HEMHAL"
          cover
          width="1200"
          height="700"
        >
        </v-img>
      </v-toolbar-title> -->
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="new"
        color="grey-lighten-4"
        max-height="%100"
        max-width="auto"
        v-bind="props"
      >
        <v-img cover src="/public/assets/besleyiciMerhem.jpeg">
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-brown-lighten-4 v-card--reveal text-h2"
              style="height: 100%"
            >
              İDA
            </div>
          </v-expand-transition>
        </v-img>
      </v-card>
    </v-hover>
    <v-row class="mt-10 mb-16 text-center footerList">
      <v-col xs="12" sm="12" md="3" lg="3" xl="3"  class="footerListİtem"> <b> İRTİBAT </b> </v-col>
      <v-col xs="12" sm="12" md="3" lg="3" xl="3"  class="footerListİtem"> <b> BİZİ NEREDE BULABİLİRSİNİZ ? </b></v-col>
      <!-- <v-col cols="4" class="d-flex justify-end">
        <v-img
          src="/public/assets/hemhalLOGO2.jpeg"
          alt="HEMHAL"
          cover
          max-height="110"
         
        >
        </v-img>
      </v-col> -->
      <v-col xs="12" sm="12" md="3" lg="3" xl="3" class="footerListİtem"> <b>BİLGİ</b> </v-col>
      <v-col xs="12" sm="12" md="3" lg="3" xl="3"  class="footerListİtem"> <b>DÜKKAN</b> </v-col>
    </v-row>

    <!-- <v-row class="mt-10 mb-16 text-center">
      <v-col cols="4" class="d-flex justify-end">
        <v-img
          src="/public/assets/hemhalLOGO2.jpeg"
          alt="HEMHAL"
          cover
          max-height="110"
        >
        </v-img>
      </v-col>
      <v-col>
        <v-row cols="2"> <b> İRTİBAT </b> </v-row>
        <v-row cols="2"> <b> BİZİ NEREDE BULABİLİRSİNİZ ? </b></v-row>

        <v-row cols="2"> <b>BİLGİ</b> </v-row>
        <v-row cols="2"> <b>DÜKKAN</b> </v-row>
      </v-col>
    </v-row> -->
  </v-col>
  <v-divider class="my-16"></v-divider>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "footer",
});
</script>

<style scoped>
@media screen and (max-width: 2500px) {
  body .new {
    height: 400px;
  }
}
@media screen and (max-width: 2000px) {
  body .new {
    height: 350px;
    width: auto;
  }
}
@media screen and (max-width: 1500px) {
  body .new {
    width: auto;
    height: 300px;
  }
}
@media screen and (max-width: 1300px) {
  body .new {
    width: auto;
    height: 300px;
  }
}
@media screen and (max-width: 1000px) {
  body .new {
    height: 300px;
    width: auto;
  }
}
@media screen and (max-width: 750px) {
  body .new {
    height: 200px;
    width: auto;
  }
}
@media screen and (max-width: 500px) {
  body .new {
    height: 200px;
    width: auto;
  }
}
/* @media screen and (max-width: 1000px) {
  body .footerList {
  }

} */
.new {
  width: 1100px;
  height: 300px;
  position: relative;
  margin: auto;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
