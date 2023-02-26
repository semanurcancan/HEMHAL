<template>
  <v-col class=" color3">
    <v-col>
      <v-row>
        <v-text-field :autofocus="true" label="name" name="name" type="text" variant="underlined">
        </v-text-field>
        <v-text-field label="price" name="price" type="text" variant="underlined">
        </v-text-field>
        <v-text-field label="rating" name="rating" type="text" variant="underlined">
        </v-text-field>
      </v-row>
      <v-row>
        <v-text-field label="name" name="name" type="text" variant="underlined">
        </v-text-field>
        <v-text-field label="price" name="price" type="text" variant="underlined">
        </v-text-field>
        <v-text-field label="rating" name="rating" type="text" variant="underlined">
        </v-text-field>
     </v-row>

    </v-col>
  </v-col>
</template>


<script lang="ts">
import { defineComponent, } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";


export default defineComponent({
  components: {},
  name: "editproduct",
  data: () => ({

  }),

});
</script>