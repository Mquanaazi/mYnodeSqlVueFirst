<template lang="">
  <button id="signuplogin" @click="signup =!signup">Register/login</button> 
    <div v-if="signup">
        <h1>WELCOME</h1>  
        <table border="1">
          
            <tr><th><label>Name:</label></th><td><input type="text" v-model="name"></td></tr>
            <tr><th><label>Surname:</label></th><td><input type="text" v-model="surname"></td></tr>
            <tr><th><label>Age:</label></th><td><input type="number" v-model="age"></td></tr>
            <tr><th><label>favourite coding language:</label></th><td><input type="text" v-model="fav_coding_lang"></td></tr>
            <tr><th><label>favourite car:</label></th><td><input type="text" v-model="fav_car"></td></tr>
            <tr><th><label>your eye color:</label></th><td><input type="text" v-model="eye_color"></td></tr>
            <tr><th><label>username:</label></th><td><input type="text" v-model="username"></td></tr>
            <tr><th><label>password:</label></th><td><input type="password" v-model="password"></td></tr>
            <button id="signup" @click="addUser">Register</button>    
        </table>
    </div>
    <div v-else>
        <h1>HELLO VALUED USER</h1>
        <table border="1">
            <tr><th><label>username:</label></th><td><input type="text" v-model="username"></td></tr>
            <tr><th><label>password:</label></th><td><input type="password" v-model="password"></td></tr>
            <button id="signin" @click="loginUser()">login</button>
        </table>
    </div>
</template>
<script>
/* eslint-disable */
export default {

        data(){
            return{
                name:"",
                surname:"",
                age: "",
                fav_coding_lang:"",
                fav_car:"",
                eye_color:"",
                username:"",
                password:"",
                signup:true,
        }
  
    },
    methods:{
        async loginUser(){
            // this.$store.dispatch('loginUser',{username:this.username,password:this.password})
            await this.$store.dispatch('loginUser',this.$data);
            location.reload()
        }
    },
    computed:{
        addUser(){
            this.$store.dispatch('addUser',this.$data)
        },  
    }
       
    // methods:{
    //     submitForm(){
    //         console.log(this.name);
    //         console.log(this.surname);
    //         console.log(this.age);
            
    
}

</script>
<style lang="">
    
</style>