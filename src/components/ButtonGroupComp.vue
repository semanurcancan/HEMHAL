<template>
    <div>
        <KeepAlive>
      <button-group :pro="pro"></button-group>
    </KeepAlive>
    </div>
</template>


<script lang="ts">

import ButtonGroup from "./ButtonGroup.vue"
import { defineComponent, inject } from 'vue'
export default defineComponent({
  components: { ButtonGroup },
    props: ["pro"],
})
</script>