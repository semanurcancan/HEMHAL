<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../store/useProductStore";
import { Product } from "../models/entities/ProductModels";

export default defineComponent({
  name: "ProductView",
 
  provide() {
    return {
      products: computed(() => this.getProductGetters),
      actions: computed(() => this.addProduct),
    };
  },
  computed: {
    //pinia da map-getters yok o yuzden getter verisi olan getProduct ...mapstate ile cagırılıyor.
    ...mapState(useProductStore, ["getProductGetters"]),
  },
  methods: {
    ...mapActions(useProductStore, { get: "getProductAction" }),
  },
});
</script>
