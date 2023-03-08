<template>
  <v-col class="bg-grey-lighten-3">
    <v-col class="mt-4 mb-4">
      <v-row>
        <v-col cols="2" v-for="(image, index) in filePath" :key="index">
          <v-img
            class="bg-white mx-auto my-auto"
            :aspect-ratio="1"
            width="150"
            cover
            :src="image"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center" cols="1">
          <v-file-input
            class="d-none"
            type="file"
            ref="uploader"
            accept="image/png, image/jpeg, image/bmp"
            prepend-inner-icon="mdi-camera"
            label="HEMHEL IMG"
            variant="outlined"
            multiple
            hide-details
            @change="onFileSelect"
            density="compact"
            hide-input
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row class="mb-4">
        <v-btn class="color3" @click="onButtonClick"> IMG EKLE </v-btn>
      </v-row>
    
      <v-row>
        <v-col>
          <v-text-field
            v-model="hemhalProduct.name"
            :autofocus="true"
            label="name"
            name="name"
            type="text"
            variant="underlined"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="hemhalProduct.title"
            label="title"
            name="title"
            type="text"
            variant="underlined"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            v-model="hemhalProduct.category"
            :items="categoryArray"
            item-title="text"
            item-value="value"
            label="category"
            name="category"
            variant="underlined"
          >
          </v-select>
        </v-col>
        <v-col>
          <v-text-field
            v-model="hemhalProduct.quantity"
            label="quantity"
            name="quantity"
            type="text"
            variant="underlined"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="hemhalProduct.price"
            label="price"
            name="price"
            type="text"
            variant="underlined"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="hemhalProduct.rating"
            label="rating"
            name="rating"
            type="text"
            variant="underlined"
          >
          </v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-spacer></v-spacer>
        <v-btn class="color3" @click="addProduct"> yeni ürün </v-btn>
      </v-row>
    </v-col>
  </v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";
import storage from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default defineComponent({
  components: {},
  name: "editproduct",
  data: () => ({
    url: "",
    facepaths: Array<String>(),
    file: Array<File>() || undefined,
    imagePath: Array<File>(),
    dataPaths: null as any,
    filePath: Array<String>(),
    fileList: [] as any,
    ProfilePhoto: "" as any,
    hemhalProduct: {} as any,
    categoryArray: [
      { text: "Cilt bakım", value: 0 },
      { text: "Aroma Terapi", value: 1 },
      { text: "Saç Bakım", value: 2 },
    ],
  }),
  computed: {
    ...mapState(useProductStore, ["getProductHemhal"]),
  },
  methods: {
    ...mapActions(useProductStore, ["setProductHemdal"]),
    onFileSelect(file: any) {
      let files = [...file.target.files];
      files.forEach((photo) => {
        this.fileList.push(photo);
        this.filePath.push(URL.createObjectURL(photo));
        this.ProfilePhoto = this.filePath[0];
        console.log(this.filePath, "filePath");
        console.log(this.fileList, "fileList");
      });
    },
    onButtonClick() {
      (this.$refs.uploader as InstanceType<any>).click();
    },
    addProduct() {
      this.hemhalProduct.images = this.filePath;
      console.log(this.hemhalProduct, "EDİT PAGE PRODUCT");
      this.setProductHemdal(this.hemhalProduct);
    },
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
