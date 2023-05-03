<template>
  <section class="description">
    <v-row class="container">
      <v-col cols="5">
        <p class="divClass mx-3" data-aos="fade-right">
          <v-img
            class="image"
            src="/public/assets/profilImg.jpeg"
            max-height="500"
          >
          </v-img>
        </p>
      </v-col>
      <v-col cols="5">
        <p class="divClass mx-3" data-aos="fade-left" data-aos-delay="500">
          Hoşgeldin Mayıs☀️ Mayısın bir adı da çiçek ayıdır. Mayıs adını
          Latinceden alır, büyük, ata anlamındadır. Kör yılan mayıs ayında
          uyanır; derler ki uyanır uyanmaz rezene/arapsaçı bitkisini arayıp
          bulurmuş. Bu yüzden arapsaçı yılanlar uyandıktan sonra toplanmaz çünkü
          yılan bu ota köpük bulaştırırmış. Mayıs yeryüzüne dönüş, bir başka
          diriliştir. Kadınların bir araya gelip doğa ile buluştuğu bir tür kır
          ayinidir. Çayırlarda yuvarlanmak, çiçek ve dallardan taçlar yapmak,
          şifalı otlar toplayıp kaynatmak için kadınlar mayısın ilk günlerinde
          bir araya gelirler ki Hıdırellez de bu zamanlara denk gelir🌸 Çiçek
          açtığımız bir ay olsun Bahar bayramınız kutlu olsun…
        </p>
      </v-col>
    </v-row>
    <v-row class="container">
      <v-col cols="5">
        <p class="divClass mx-3" data-aos="fade-right">
          <v-img
            class="image"
            src="/public/assets/besleyiciMerhem.jpeg"
            max-height="500"
          >
            <p class="color3" @click="$router.push({ name: 'ProductListOne', hash:'ProductTop'})" align="center" data-aos="flip-down" data-aos-delay="1000">
              SATIN AL
            </p>
          </v-img>
        </p>
      </v-col>
      <v-col cols="5">
        <p class="divClass mx-3" data-aos="flip-left">
          Hoşgeldin Mayıs☀️ Mayısın bir adı da çiçek ayıdır. Mayıs adını
          Latinceden alır, büyük, ata anlamındadır. Kör yılan mayıs ayında
          uyanır; derler ki uyanır uyanmaz rezene/arapsaçı bitkisini arayıp
          bulurmuş. Çayırlarda yuvarlanmak, çiçek ve dallardan taçlar yapmak,
          şifalı otlar toplayıp kaynatmak için kadınlar mayısın ilk günlerinde
          bir araya gelirler ki Hıdırellez de bu zamanlara denk gelir🌸 Çiçek
          açtığımız bir ay olsun Bahar bayramınız kutlu olsun… . Mayısta çiçek
          açanlar: Adaçayı, Tıbbi papatya, Ahududu, Böğürtlen, Ceviz, Ayva,
          Kuşburnu, Zeytin, Tesbih ağacı, Çivit otu, Yaban mersini.
        </p>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "animateimage",
  data: () => ({}),
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  font-size: 30px;
  font-family: sans-serif;
  background: #ebebeb;
}
.divClass {
  padding-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(12, 12, 12);
  margin: 50px 0;
  /* height: 300px;
  width: 300px; */
}
</style>
