<template>
    <div>
      <button @click="addToCart(product)">Ajouter au panier</button>
    </div>
  </template>
  
<script>
import { mapActions } from 'vuex'
  
export default {
    props: ['product'],
    methods: {
    ...mapActions(['addProductToCart']),
    addToCart (product) {
        this.addProductToCart(product)
    }
    }
}
</script>