<template>
  <v-col class="bg-grey-lighten-4">
    <v-table class="bg-grey-lighten-4">
      <thead>
        <tr>
          <th class="text-left text-h6 text-disabled">Name</th>
          <!-- <th class="text-left text-disabled text-h6">Title</th> -->
          <th class="text-left text-disabled text-h6">Category</th>
          <th class="text-left text-h6 text-disabled">Price</th>
          <th class="text-left text-h6 text-disabled">Quantity</th>
          <th class="text-left text-h6 text-disabled">Rating</th>
          <th class="text-left text-h6 text-disabled">Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pro, index) in getProductHemhal" :key="index">
          <td>{{ pro.name }}</td>
          <!-- <td>{{ pro.title }}</td> -->
          <td>{{ pro.categoryName }}</td>
          <td>{{ pro.price }}</td>
          <td>{{ pro.quantity }}</td>
          <td>{{ pro.rating }}</td>
          <td>
            <v-row>
              <v-col
                v-for="(img, index) in pro.images"
                :key="index"
                class="d-flex child-flex"
                cols="4"
              >
                <v-img
                  :src="img.url"
                  :lazy-src="img.url"
                  width="60"
                  aspect-ratio="1"
                  cover
                  class="bg-grey-lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </td>
          <td>
            <v-btn class="color3" @click="editDialog(pro)">Düzenle</v-btn>
          </td>
          <td>
            <v-btn class="bg-red-lighten-4" @click="deleteProduct(pro)"
              >Sil</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-col>
  <v-dialog v-model="openEditDialog">
    <v-card width="700" class="overflow-hidden mx-auto" :border="false">
      <v-toolbar color="brown-lighten-3">
        <v-toolbar-title>
        Hemhal Ürün Düzenle
        </v-toolbar-title>
        <v-btn variant="text" @click="openEditDialog = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
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
        <v-row>
        <v-col
          cols="2"
          v-for="(image, index) in updateBody.images"
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
            v-model="updateBody.name"
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
            v-model="updateBody.title"
            label="title"
            name="title"
            type="text"
            variant="underlined"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="updateBody.description"
            label="description"
            name="description"
            type="text"
            variant="underlined"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            v-model="updateBody.category.id"
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
            v-model="updateBody.quantity"
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
            v-model="updateBody.price"
            label="price"
            name="price"
            type="text"
            variant="underlined"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="updateBody.rating"
            label="rating"
            name="rating"
            type="text"
            variant="underlined"
          >
          </v-text-field>
        </v-col>
      </v-row>
      </v-card-text>
      <v-card-actions class="bg-brown-lighten-4">
        <v-spacer></v-spacer>
        <v-col cols="auto pa-1">
        <v-btn @click="editProduct()" class=""> kaydet</v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/useProductStore";
import db from "../../firebase";
import { Product, ProductImage } from "../../models/entities/ProductModels";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  getDocs,
  where,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

export default defineComponent({
  components: {},
  name: "hemhallist",
  data: () => ({
    product: [] as any,
    openEditDialog: false,
    updateBody: [] as any,
    updateBodyValidate: [] as any,
    loading: true,
    uploadValue: 0,
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
  }),
  computed: {
    ...mapState(useProductStore, ["getProductHemhal"]),
  },
  methods: {
    ...mapActions(useProductStore, [
      "getAdmin",
      "setNewTokenStatus",
      "setNewToken",
      "deleteHemhalProduct",
      "updateProductHemhal"
    ]),
editDialog(item:any){
  console.log(item, "EDİT İTEM");
  this.openEditDialog = true;
  this.updateBody = item;
},
    editProduct() {
      console.log(this.updateBody, "UPDATE BODY")
      this.updateBodyValidate = this.updateBody;
      console.log(this.updateBodyValidate, "VALİDATE")
     this.updateProductHemhal(this.updateBodyValidate)
      this.openEditDialog = false;
     
    },
    deleteProduct(doc: any) {
      console.log(doc, "tık tık");
      this.deleteHemhalProduct(doc);
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
          this.updateBody.images = url;
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
  watch: {},
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
