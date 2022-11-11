 import { defineStore } from "pinia"
 import axios from "axios";
 import {ProductModels} from "../models/entities/ProductModels"


export const useProductStore = defineStore('product', {
  //burada içi boş verisi olamayan  ama type tanımlanan product var bunu için product model belirledim.api den gelecke olan verilerin type ı bu model içeriisnde belirlendi.
    state: () => {
      return {
        count:0,
        name: "sema",
        product: [] as ProductModels
      }},

//actions da içerisine api verileri atanan product ı getters da bir func atadım.computed da cagırdım.
    getters: {
      getProductGetters: (state) =>{
        console.log(state.product);
        return state.product;
      }},

//actions da api verilerini cektim.state de içi boş ve type ı tanımlanan product a attım içerisindeki bilgileri api den gelen.methods da cagırıdm!!!
  
actions: {
      //data apı aul ile cekildi!!!   
      async getProductAction(){

        await axios.get('https://fakestoreapi.com/products')
        .then((product)=> { this.product = product.data})
      // try{const data = await axios.get(
      //   'https://fakestoreapi.com/products'
      //   );
      //   console.log(data);
      //   this.product = data.data; 
      // }catch(error) {
      //   alert(error);
      //   console.log(error)
      // }
        

      
      },
        
      }
    },
  )