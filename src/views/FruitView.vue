<template lang="">

        <h1>these are the fruits we got</h1>
       <p>on every fruit there must be a purchase button, incl an alert that the item has been purchased on click, only allow user to purchase once they got the token.</p>
        <section v-for= "fruit in $store.state.fruits" :key="fruit.id">
            <h2>name:{{fruit.id}}</h2>
            <h2>name:{{fruit.fruit_name}}</h2>
            <h2>weight:{{fruit.weight}}</h2>
            <h2>amount:{{fruit.amount}}</h2>
           
            <button v-if="$cookies.get('token')" @click="addToCart(fruit.id)">Purchase</button>
    </section>
</template>
<script>
export default {
   methods:{
    getFruits(){
        this.$store.dispatch('getFruits')
        
    },
    
addToCart(fruit_id){
    this.$store.dispatch('addToCart',fruit_id)
}
   },
   mounted(){
    this.getFruits()
   }
}
</script>
<style>
    
</style>