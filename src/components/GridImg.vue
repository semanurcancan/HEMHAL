<template>
  <div>
    <v-img height="50" width="50" :src="this.params.data.images[1]" cover>
    </v-img>
  </div>
</template>
<script lang="ts">
export default {
  name: "GridButton",
  props: {
    params: Object(),
  },
  mounted() {
    console.log(this.params.data.images[1]);
  },
};
</script>
