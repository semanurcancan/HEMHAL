<template>
  <v-col>
        <v-table  class=" bg-grey-lighten-3 ">
    <thead>
      <tr>
        <th class="text-left text-h6 text-disabled ">
          Name
        </th>
        <th class="text-left text-disabled text-h6">
          Email
        </th>
        <th class="text-left text-h6 text-disabled">
          Status
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
      v-for="(item, index) in getUserList" :key="index"
      >
        <td>{{ item.fullName }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.isAdmin }}</td>
      </tr>
    </tbody>
  </v-table>

    
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";

export default defineComponent({
  components: {},
  name: "userspage",
  data: () => ({
    userList: [] as any,
  }),
  computed: {
    ...mapState(useProductStore, ["getUserList"]),
  },
  mounted() {
  },
  methods: {
    ...mapActions(useProductStore, ["setProductHemdal"]),
  },
  watch: {
    // getUserList() {
    //   console.log(this.getUserList, "aaa");
    // },
  },
});
</script>
<style scoped>
.color5 {
  background-color: #847577;
}

.color4 {
  background-color: #e3d5ca;
}

.color3 {
  background-color: #d6ccc2;
}

.color2 {
  background-color: rgb(236, 218, 193);
}

.color1 {
  background-color: rgb(192, 174, 150);
}
</style>
