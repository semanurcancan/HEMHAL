<template>
  <div class="toolBar" app>
    <v-toolbar-title class="text-h5 title">
      <v-img
        src="/public/assets/hemhalLOGO2.jpeg"
        alt="HEMHAL"
        cover
        width="600"
        height="250"
      >
      </v-img>
    </v-toolbar-title>

    <v-col>
      <v-row>
        <v-col>
        <span class="BlaBla"> <i>loc.</i> <strong>KAZ DAĞLARI</strong> </span>
        </v-col>
<v-col>
  <v-row>
     <v-col>
            <router-link class="route" active-class="routeChildren" to="/">
          <span>PRODUCT LIST</span>
        </router-link>
        </v-col>

        <v-col>
           <router-link class="route" active-class="routeChildren" to="/favorite">
          <span>FAVORITE LIST</span>
        </router-link>
        </v-col>
        <v-col>
          <router-link class="route" active-class="routeChildren" to="/hello">
          <span>BASKET</span></router-link
        >
        </v-col>
  </v-row>
</v-col>
       
      </v-row>
    </v-col>
      <!-- <v-toolbar-title class="d-flex justify-start"> -->
    

      <div class="d-flex justify-end" >
       
       
        
      
       
        <!-- <v-btn class="quantity"
          ><strong>{{ getBasketGetters.length }}</strong></v-btn
        > -->
    
    </div>
  </div>
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
  data() {
    return {
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
.BlaBla {
  margin-top: 2px;
  font-family: "Inconsolata", monospace;
}

.title {
  text-align: -webkit-center;
}
.toolBar {
  background-color: white;
  height: 350px;
}
.lefBar {
  text-align: center;
}

.route {
  margin-right: 10px;
  text-decoration: none;
  color: black;
  display: inline-block;
}
/* .routeChildren {
  text-decoration: none;
  font-size: 22px;
  display: inline-block;
} */

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
