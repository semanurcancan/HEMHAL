import { defineStore } from "pinia";
import axios from "axios";
import { Product } from "../models/entities/ProductModels";
import { Firestore } from "firebase/firestore";

import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  query,
  getDocs,
  where,
  setDoc,
 updateDoc
  //Firestore,
} from "firebase/firestore";
import db from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  updateProfile,
  updateEmail,
} from "firebase/auth";

const loadFromStorage = (key: string, defaultValue: any): any => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return defaultValue;
};

export const useProductStore = defineStore("product", {
  //burada içi boş verisi olamayan  ama type tanımlanan product var bunu için product model belirledim.api den gelecke olan verilerin type ı bu model içeriisnde belirlendi.
  state: () => {
    return {
      totalPrice: 0,
      product: [] as Array<Product>,
      basket: [] as Array<Product>,
      basketLength: 0,
      filterCategory: [] as Array<Product>,
      favorites: loadFromStorage("userFavorites", [] as Array<Product>),
      loading: false,

      token: localStorage.getItem("pm2token") ?? (false as any),
      tokenStatus: localStorage.getItem("pm2tokenstatus") ?? (false as any),

      productHemhal: [] as any,
      admin: [] as any,
      currentAdmin: {} as any,
      userList: [] as any,
      user: [
        {
          email: "" as any,
          fullName: "" as any,
          password: "" as any,
          passwordcheck: null as any,
        },
      ] as any,
    };
  },

  //actions da içerisine api verileri atanan product ı getters da bir func atadım.computed da cagırdım.
  getters: {
    getUserTokenStatus(state) {
      return localStorage.getItem("pm2tokenstatus") ?? state.tokenStatus;
    },
    getUserToken(state) {
      return localStorage.getItem("pm2token") ?? state.token;
    },
    getProductHemhal: (state) => {
      return state.productHemhal;
    },
    getAdminInfo: (state) => {
      return state.admin;
    },
    getcurrenAdmin: (state) => {
      return localStorage.getItem("userAdmin") ?? state.currentAdmin;
    },
    getUserList: (state) => {
      return state.userList;
    },
    getUser: (state) => {
      return state.user;
    },
    getProductGetters: (state) => {
      return state.product;
    },
    getBasketGetters: (state) => {
      return state.basket;
    },
    GetBasketPrice: (state) => {
      return state.totalPrice.toFixed(2);
    },
    getBasketLength: (state) => {
      return state.basketLength;
    },
    getFilterCategory: (state) => {
      return state.filterCategory;
    },
    getFavoritesState(state) {
      return state.favorites;
    },
  },
  //actions da api verilerini cektim.state de içi boş ve type ı tanımlanan product a attım içerisindeki bilgileri api den gelen.methods da cagırıdm!!!
  actions: {
    setNewTokenStatus(tokenStatus: boolean) {
      this.tokenStatus = tokenStatus;
      localStorage.setItem("pm2tokenstatus", this.tokenStatus);
    },
    setNewToken(newToken: boolean) {
      this.token = newToken;
      localStorage.setItem("pm2token", this.token);
    },
    //get product
    async getProduct() {
      const querySnap = await getDocs(query(collection(db, "product")));
      let a = [] as any;
      let docId = [] as any;
      querySnap.forEach((doc) => {
        docId = [...docId, doc.id];
        this.productHemhal.push(doc.data());
      });
      this.productHemhal.map((x: any, i: any) => {
        this.productHemhal[i].id = docId[i];
      });
      console.log(this.productHemhal, "STORA ÜRÜN LİSTESİ");
    },

    //post Product
    async setProductHemdal(hemhalProduct: Product) {
      const colRef = collection(db, "product");
      const dataObj = {
        name: hemhalProduct.name,
        price: hemhalProduct.price,
        title: hemhalProduct.title,
        description: hemhalProduct.description,
        category: hemhalProduct.category,
        quantity: hemhalProduct.quantity,
        rating: hemhalProduct.rating,
        images: hemhalProduct.images,
        count: hemhalProduct.count,
        key: hemhalProduct.key,
        id: hemhalProduct.id,
      };
      const docRef = await addDoc(colRef, dataObj);
      console.log("STORE CREATED USAR ID:", docRef.id);
      console.log(docRef, "DOC REF");
    },
    async updateProductHemhal(updateHemdal: Product) {
      console.log(updateHemdal.id, "STORE UPDATE BODY");

      const docRef = doc(db, "product", "updateHemdal.id");

      const UpdateData = {
        name: updateHemdal.name,
        price: updateHemdal.price,
        title: updateHemdal.title,
        description: updateHemdal.description,
        category: updateHemdal.category,
        quantity: updateHemdal.quantity,
        rating: updateHemdal.rating,
        images: updateHemdal.images,
        count: updateHemdal.count,
      };
      updateDoc(docRef, UpdateData)
        .then((docRef) => {
          console.log(docRef, "AAAAAA");
        })
        .catch((error) => {
          console.log(error);
        });
      // await setDoc(doc(db, "product", updateHemdal.id), {
      //   name: updateHemdal.name,
      //   price: updateHemdal.price,
      //   title: updateHemdal.title,
      //   description: updateHemdal.description,
      //   category: updateHemdal.category,
      //   quantity: updateHemdal.quantity,
      //   rating: updateHemdal.rating,
      //   images: updateHemdal.images,
      //   count: updateHemdal.count,
      // });
    },
    async deleteHemhalProduct(item: Product) {
      console.log(item, "DELETE NE GELDİ STORE");
      await deleteDoc(doc(db, "product", item.id));
      //listeden her item sildiğimde eski listeye eklenerek geliyordu yeni liste. oncesinde boşalttım o yuzden
      this.productHemhal = [];
      this.getProduct();
    },

    //USERR LİSTESİNİ ÇEKER
    async getAdmin() {
      this.userList = [];
      const querySnap = await getDocs(query(collection(db, "users")));
      querySnap.forEach((doc) => {
        this.userList.push(doc.data());
      });
      //ilki js şkinci filtreleme firebase methodu
      this.admin = this.userList.filter((admin: any) => admin.isAdmin == true);
      //       const filterAdmin = query(collection(db, 'users'), where('isAdmin', '==', 'true'))
      //       const querySnapp = await getDocs(filterAdmin)
      //       querySnapp.forEach((doc) => {
      //  this.admin.push(doc.data())
      //       })
      //       debugger
      //       console.log(this.admin, "ADMİN STORE DA")
    },

    //yeni user eklendikten sonra collectiona ekler bu func. conle yazınca calıstı :)
    async createUser(user: any) {
      const colRef = collection(db, "users");
      //console.log(user, "STORE USER PROP")
      const dataObj = {
        fullName: user.fullName,
        email: user.email,
        isAdmin: false,
      };
      const docRef = await addDoc(colRef, dataObj);
    },
    //data apı aul ile cekildi!!!

    async getProductAction() {
      await axios
        .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=70")
        .then((product) => {
          this.product = product.data;
          //quantity entrübütü yoktu gelen data da ekledim.
          this.product.forEach((x: any) => {
            x.quantity = 0;
          });
        });
    },
    setfilter(catName: string) {
      this.filterCategory = this.getProductGetters.filter(
        (x) => x.category.name == catName
      );
      console.log("actions girdi");
    },
    //set addl ile actıons component içine cagırıldığında parametle oalrak "pro" alacak.
    setAddBasket(pro: Product) {
      this.basket = [...this.basket, pro];
      this.totalPrice += pro.price;
      pro.quantity++;
    },
    //silme func.eğert yollanan ürün id si ile sepetteki ürünün id si eşleşiyor ise siliyor.
    //toplam paradan silinen ürünün parasını cıkartıyor.ve ürün miktarını bir azaltıyor.
    setDltBasket(pro: Product) {
      let equalId = this.basket.find((x) => x.id == pro.id);
      if (equalId) {
        this.basket.pop(pro);
        this.totalPrice -= pro.price;
        pro.quantity--;
      } else {
        return this.totalPrice;
      }
    },

    addOrRemoveFavorite(pro: Product) {
      const findedIndex = this.favorites.findIndex(
        (fav: any) => fav.id === pro.id
      );
      if (findedIndex === -1) {
        this.favorites = [...this.favorites, pro];
      } else {
        this.favorites = this.favorites.filter((fav: any) => fav.id !== pro.id);
      }
      localStorage.setItem("userFavorites", JSON.stringify(this.favorites));
    },
    setLoadingState(state: boolean) {
      this.loading = state;
    },
  },
});
