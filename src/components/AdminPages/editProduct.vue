<template>
  <v-col class="bg-grey-lighten-3">
    <v-col class="mt-4 mb-4">
      <v-row>
        <v-col v-if="loading">
          <p>{{ uploadValue.toFixed() + "%" }}</p>
          <v-progress-linear
            color="lime-darken-2"
            :value="uploadValue"
            v-model="uploadValue"
          ></v-progress-linear>
        </v-col>
      </v-row>
      <br />
      <v-row>
        <v-col
          cols="2"
          v-for="(image, index) in hemhalProduct.images"
          :key="index"
        >
          <v-img
            class="bg-white mx-auto my-auto"
            :aspect-ratio="1"
            width="150"
            cover
            :src="image.url"
          ></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="text-center" cols="1">
          <v-file-input
            class="d-none"
            type="file"
            ref="uploader"
            accept="image/*"
            prepend-inner-icon="mdi-camera"
            label="HEMHEL IMG"
            variant="outlined"
            multiple
            hide-details
            @change="onFileSelect"
            density="compact"
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
            v-model="hemhalProduct.category.id"
            :items="categoryArray"
            item-title="name"
            item-value="id"
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

import { Product, ProductImage } from "../../models/entities/ProductModels";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default defineComponent({
  components: {},
  name: "editproduct",
  data: () => ({
    url: "",
    file: null as File | null,
    facepaths: Array<String>(),
    // file: Array<File>() || undefined,
    imagePath: Array<File>(),
    dataPaths: null as any,
    //filePath: Array<String>(),
    //fileList: [] as any,
    ProfilePhoto: "" as any,
    hemhalProduct: new Product() as any,
    categoryArray: [
      { name: "Cilt bakım", id: 0 },
      { name: "Aroma Terapi", id: 1 },
      { name: "Saç Bakım", id: 2 },
      { name: "Onarıcı Merhem", id: 3 },
      { name: "Besleyici Merhem", id: 4 },
      { name: "Ruj & Allık ", id: 5 },
      { name: "Mum & Tütsü", id: 6 },
      { name: "Masaj Taşı & Tütsü", id: 7 },
      { name: "At Kılı Fırçalar & Fırça", id: 8 },
    ],
    uploadValue: 0,
    picture: null,
    imageData: null as any,
    loading: true,
  }),
  computed: {
    ...mapState(useProductStore, ["getProductHemhal"]),
  },
  methods: {
    ...mapActions(useProductStore, ["setProductHemdal"]),
    // kaydet butonu
    addProduct() {
      let x = this.hemhalProduct.category.id;
      switch (x) {
        case 0:
          this.hemhalProduct.category.name = this.categoryArray[0].name;
          break;
        case 1:
          this.hemhalProduct.category.name = this.categoryArray[1].name;
          break;
        case 2:
          this.hemhalProduct.category.name = this.categoryArray[2].name;
          break;
        case 3:
          this.hemhalProduct.category.name = this.categoryArray[3].name;
          break;
        case 4:
          this.hemhalProduct.category.name = this.categoryArray[4].name;
          break;
        case 5:
          this.hemhalProduct.category.name = this.categoryArray[5].name;
          break;
        case 6:
          this.hemhalProduct.category.name = this.categoryArray[6].name;
          break;
        case 7:
          this.hemhalProduct.category.name = this.categoryArray[7].name;
          break;
        case 8:
          this.hemhalProduct.category.name = this.categoryArray[8].name;
          break;
        default:
          this.hemhalProduct.category.name = "Categori Bulunamadı";
      }

      (this.hemhalProduct.id = new Date().getUTCMilliseconds()),
        this.setProductHemdal(this.hemhalProduct);
    },

    onFileSelect(e: any) {
      Promise.all(
        [...e.target.files].map((file: File) =>
          this.uploadImage(Date.now().toString(), file as Blob)
        )
      )
        .then((url) => {
          console.log(`All success`);
          console.log(url);
          this.hemhalProduct.images = url;
        })
        .catch((error) => {
          console.log(`Some failed: `, error.message);
        });
    },
    onButtonClick() {
      (this.$refs.uploader as InstanceType<any>).click();
    },
    uploadImage(fileName: string, file: Blob): Promise<ProductImage> {
      let that = this;
      return new Promise(function (resolve, reject) {
        let storageRef = ref(getStorage(), `files/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            that.uploadValue = progress;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log(uploadTask.snapshot.ref.fullPath);
              // this.hemhalProduct.images = downloadURL
              // let files = [...e.target.files];
              // files.forEach((photo: any) => {
              //   this.fileList.push(photo);
              //   this.filePath.push(URL.createObjectURL(photo));
              //   this.imagePath.push(photo);
              //   this.ProfilePhoto = this.filePath[0]
              //   console.log(this.fileList, "FİLELİST")
              //   console.log(this.imagePath, "imagePath")
              //   console.log(this.filePath, "filePath")
              // });
              console.log(downloadURL);
              resolve({
                fullPath: uploadTask.snapshot.ref.fullPath,
                url: downloadURL,
              } as ProductImage);
            });
          }
        );
      });
    },
  },
  watch: {
    " this.hemhalProduct.category"(val: number) {
      console.log(val, "VAL1");
      if (val != null) {
      }
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
