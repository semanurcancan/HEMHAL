<template>
  <v-col>
    <v-col>
      <v-row>
        <v-col class="containerAna">
          <v-img
            class="ımg"
            src="/public/assets/anasayfaIMG.jpeg"
            alt="HEMHAL"
            max-height="600"
            max-width="auto"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-col>
    <h3 id="hakkimizda">HEMHAL</h3>
    <v-col class="containerAna pa-15">
      <v-row>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          aut asperiores inventore porro dicta laborum corporis atque ipsam
          reprehenderit molestias exercitationem, odio ipsa deleniti nisi eaque
          dolorum reiciendis quasi delectus? Labore, minus eaque. Illo,
          excepturi facere a praesentium cupiditate pariatur dignissimos eius
          nesciunt dolorem nostrum natus libero iusto ad asperiores odio
          reprehenderit rerum iste aspernatur? Neque porro quae facilis quos.
          Assumenda et voluptatem, ad vitae excepturi porro quibusdam dolores,
          rem, voluptatibus dolorum modi enim perferendis nisi esse debitis
          repudiandae est laudantium praesentium ab atque provident fugiat
          nesciunt facere! Nulla, iusto! Aut error aperiam, rerum officiis
          eligendi harum. Suscipit et adipisci deserunt nihil eveniet placeat
          expedita quia, fugiat perferendis, numquam, cumque fugit ipsum
        </div>
      </v-row>
    </v-col>
    <h3 id="SECTİON">BLOG</h3>
    <v-col>
      <v-row class="containerAna pa-15 my-5">
        <animateimage/>
      </v-row>
    </v-col>
  </v-col>
  <v-spacer></v-spacer>
  <!-- en başa scrool iconu -->
  <transition name="fade">
    <div id="pagetop" class="upArrowIcon" v-show="scY > 500" @click="toTop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4a5568"
        stroke-width="1"
        stroke-linecap="square"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </div>
  </transition>
  <v-divider id="iletişim"></v-divider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//components
import animateimage from "./AnimateImage/AnimateImage.vue"

export default defineComponent({
  name: "anasayfa",
  components: {animateimage},
  data() {
    return {
      scTimer: Number() as any,
      scY: Number() as any,
      model: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {},
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.$router.push({ path: "/" });
    },
  },
});
</script>

<style scoped>
.upArrowIcon {
  position: fixed;
  bottom: 0;
  right: 0;
}
@media screen and (max-width: 2500px) {
  body .ımg {
    height: 800px;
  }
}
@media screen and (max-width: 2000px) {
  body .ımg {
    height: 800px;
  }
}

@media screen and (max-width: 1500px) {
  body .ımg {
    height: 600px;
  }
}
@media screen and (max-width: 1300px) {
  body .ımg {
    height: 400px;
  }
}
@media screen and (max-width: 1000px) {
  body .ımg {
    height: 300px;
  }
}
@media screen and (max-width: 750px) {
  body .ımg {
    height: 200px;
    z-index: 0;
  }
}
@media screen and (max-width: 500px) {
  body .ımg {
    height: 180;
  }
}
.containerAna {
  margin-top: 20px;
  padding: 11px;
}

.route {
  text-decoration: none;
  color: black;
  display: inline-block;
}
</style>
