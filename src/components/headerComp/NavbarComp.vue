<template>
  <v-container class="toolBar" app>
    <v-toolbar-title class="text-h5 title">
      <router-link class="route" active-class="routeChildren" to="/">
        <span>
          <v-img
            src="/public/assets/hemhalLOGO2.jpeg"
            alt="HEMHAL"
            cover
            width="600"
            height="200"
          >
          </v-img>
        </span>
      </router-link>
    </v-toolbar-title>
    <v-col>
      <span class="d-flex justify-center">
        <i>loc.</i> <strong>KAZ DAĞLARI</strong>
      </span>
    </v-col>
    <v-divider></v-divider>

    <!-- <v-col>
      <v-row>
        <v-col>
          <span class="BlaBla"> <i>loc.</i> <strong>KAZ DAĞLARI</strong> </span>
        </v-col>
        <v-col>
          <div id="sidemenu" class="navbar">
            <button
              class="sidemenu__btn"
              v-on:click="navOpen = !navOpen"
              v-bind:class="{ active: navOpen }"
            >
              <span class="top"></span>
              <span class="mid"></span>
              <span class="bottom"></span>
            </button>
           
            <transition name="translateX">
              <nav v-show="navOpen">
                <div class="nav-links">
                  <ul class="sidemenu__list">
                    <li class="active"><a href="">Top</a></li>
                    <li class="active"><a href="">About</a></li>
                    <li class="active"><a href="">Blog</a></li>
                    <li class="active"><a href="">Work</a></li>
                    <li class="active"><a href="">Link</a></li>
                  </ul>
                </div>
              </nav>
            </transition>
          </div>
          <img class="menu" src="/public/assets/hamburger.png" />
        </v-col>
      </v-row>
    </v-col> -->
    <v-container class="my-2">
      <v-row>
        <v-col cols="6">
          <router-link class="route" active-class="routeChildren" to="/">
            <span>ANASAYFA</span>
          </router-link>
          <router-link
            class="route"
            :to="{ path: '/', hash: '#hakkimizda' }" >
            <span>HAKKIMIZDA</span>
          </router-link>
          <router-link
            class="route"
            :to="{ path: '/', hash: '#iletisim' }">
            <span>İLETİŞİM</span>
          </router-link>
        </v-col>

        <v-col cols="6" class="d-flex justify-end">
          <router-link class="route" active-class="routeChildren" to="/product">
            <span>ÜRÜNLER</span>
          </router-link>
          <router-link
            class="route"
            active-class="routeChildren"
            to="/favorite">
            <span>BEĞENDİKLERİNİZ</span>
          </router-link>

          <router-link class="route" active-class="routeChildren" to="/hello">
            <span>SEPETİM</span></router-link
          >
        </v-col>
      </v-row>
    </v-container>
  </v-container>
  <!-- <lefBar></lefBar> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../../store/useProductStore";
//components
import lefBar from "./leftBar.vue";

export default defineComponent({
  name: "NavbarComp",
  components: { lefBar },
  el: "#sidemenu",
  data() {
    return {
      navOpen: true,
      drawer: true,
      basketGetters: this.getBasketGetters,
    };
  },
  computed: {
    ...mapState(useProductStore, ["getBasketGetters", "getProductGetters"]),
  },
  methods: {
    ...mapActions(useProductStore, ["setfilter"]),
  },
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
.BlaBla {
  margin-top: 2px;
  font-family: "Inconsolata", monospace;
}

.title {
  text-align: -webkit-center;
}
.toolBar {
  background-color: white;
  height: 300px;
}
.lefBar {
  text-align: center;
}

.route {
  margin-right: 40px;
  text-decoration: none;
  color: black;
  display: inline-block;
}
.route:hover {
  color: rgb(108, 120, 4);
}

.routeChildren {
  font-weight: bold;
  display: inline-block;
}

/* .title {
  animation: color-change 3s infinite;
}
@keyframes color-change {
  80% {
    color: #8958fab2;
  }
  20% {
    color: #58c7fab2;
  }
  0% {
    color: #bf58fab2;
  }
} */
</style>
