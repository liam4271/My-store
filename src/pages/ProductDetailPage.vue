<template>
    <div class="section">
      <NameStore msg="Store Liam Desrayaud"/>
      <h2 class="title is-2" v-if="product">{{ product.title }}</h2>
      <img :src="product.images[0]" alt="Product Image">
      <br><br>
      <h3>Plus de détails</h3>
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="(image, index) in product.images" :key="index">
          <img :src="image" alt="Product Image">
        </div>
      </div>
      <br><br>
      <p> {{ product.brand }} </p>
      <p> {{ product.description }} </p>
      <br><br>
      <router-link :to="{ name: 'home' }">
        <button class="button is-link">Retour à la page d'accueil</button>
      </router-link>
      <br><br>
      <add-to-cart :product="product"/>
    </div>
  </template>
  <script>
  import NameStore from '../components/NameStore.vue'
  import axios from "axios";
  import AddToCart from '../components/AddToCart.vue'
  
  export default {
    name: 'ProductDetailPage',
    components: {
      NameStore,
      AddToCart,
    },
    props: {
      id: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        product: null,
      }
    },
    mounted() {
      axios.get(`https://dummyjson.com/products/${this.id}`)
        .then(res => this.product = res.data);
    }
  }
  </script>
  <style>
  .section {
    padding: 2rem;
  }
  
  img {
    width: 20%;
  }
  </style>