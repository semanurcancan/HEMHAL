<template>
  <v-container>
    <v-app>
      <v-row>
        <v-col class="containerAna">
          <v-img
            class="ımg"
            src="/public/assets/anasayfaIMG.jpeg"
            alt="HEMHAL"
            max-height="%100"
            max-width="auto"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-app>
    <h3 id="hakkimizda">HAKKIMIZDA</h3>
    <v-app class="containerAna pa-15">
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
          obcaecati rem ea illum quae earum repellendus dolore. Maiores
          blanditiis ipsa mollitia beatae necessitatibus iste, animi a odio
          laborum vero libero placeat distinctio quasi tenetur velit fugit
          cupiditate quibusdam minima aliquam, eaque labore facilis reiciendis
          provident. Fuga, autem.
        </div>
      </v-row>
    </v-app>
    <h3 id="iletisim">İLETİŞİM</h3>
    <v-app>
      <v-row>
        <div class="containerAna pa-15">
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
          obcaecati rem ea illum quae earum repellendus dolore. Maiores
          blanditiis ipsa mollitia beatae necessitatibus iste, animi a odio
          laborum vero libero placeat distinctio quasi tenetur velit fugit
          cupiditate quibusdam minima aliquam, eaque labore facilis reiciendis
          provident. Fuga, autem.
        </div>
      </v-row>
    </v-app>
  </v-container>
  <v-spacer></v-spacer>
    <transition name="fade" class="aaa">
      <div
        id="pagetop"
        v-show="scY > 500"
        @click="toTop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4a5568"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="bevel"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//components

export default defineComponent({
  name: "anasayfa",
  data() {
    return {
      scTimer: Number() as any,
      scY: Number() as any,
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
      },
      );
      this.$router.push({ path: "/" })
    },
  },
});
</script>

<style scoped>
.aaa{
    position:fixed;
    bottom: 0;
    right: 0;
}
/* html {
  scroll-behavior: smooth;
} */

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
  }
}
@media screen and (max-width: 500px) {
  body .ımg {
    height: 1800;
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
