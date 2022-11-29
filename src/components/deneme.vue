<template>
<div class="mt-10">
    <v-col>
      <v-row>
        <v-col cols="4" v-for="(pro, i) in getProduct" :key="i">

  <v-card
  @dblclick=" this.$router.push({ name: 'Detail', params: { id: pro.id } })" 
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="pro.image"
      cover
    >
      <v-card-title>{{ pro.title.slice(0,10)}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ pro.price }}
    </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <button-group class="mt-5 ml-10 mr-10" :pro="pro" :actions="actions" ></button-group>
    </v-card-actions>
  </v-card>


   </v-col>
      </v-row>
    </v-col>
  </div>
</template>