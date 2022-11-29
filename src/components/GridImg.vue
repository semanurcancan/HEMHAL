<template>
<div>
 <v-img
      height="40"
      width="30"
      :src="this.params.value"
      cover
    >
    </v-img>
</div>
	
</template>
<script lang="ts">
export default {
	name: "GridButton",
	props: {
		params: Object()
	},
    // created (){
    //     console.log(this.params.value)
    // }
}
</script>