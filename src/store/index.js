/* eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import router from '@/router';
import { useCookies } from "vue-cookies";
axios.defaults.withCredentials=true
axios.defaults.headers=$cookies.get("token")



export default createStore({
  state: {
    fruits:null,

  },
  getters: {
  },
  mutations: {
    setFruits(state,payload){
    state.fruits=payload
    }
  },
  actions: {
    async addUser({commit},info){
      let data=await axios.post("http://localhost:2001/users",info)
      toast("Hello! signed in successfully!", {
        "theme": "auto",
        "type": "default",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
    },
   async loginUser({commit},info){
      let {data}= await axios.post("http://localhost:2001/users/login",info)
      toast("welcome back!", {
        "theme": "auto",
        "type": "default",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
      console.log(data);
      
      $cookies.set("token",data.token)
     await router.push('/')
     location.reload()
  },
  async getFruits({commit}){
    let {data}=await axios.get("http://localhost:2001/fruits")
    console.log(data);
    commit("setFruits",data)

  },
  async addToCart({commit},fruit_id){
    let {data}=await axios.post("http://localhost:2001/fruits/cart",{id:fruit_id})
   console.log(data);
   
  }
},
modules: {
}
})
