<template>
    <div id="app">
        <NameStore msg="Store Liam Desrayaud"/>
        Filter : <input type="text" v-model="filter" /><br />
        Prix min : <input type="number" v-model="minPrice" /><br />
        Prix max : <input type="number" v-model="maxPrice" /><br />
        <div class="columns is-multiline">
            <div class="column is-one-third" v-for="product in displayedProducts" :key="product.id">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{ product.title }}
                        </p>
                    </header>
                    <div class="card-image">
                        <figure class="image">
                            <a :href="'product/' + product.id">
                                <img :src="product.thumbnail">
                            </a>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            {{ product.category }} - {{ product.price }}$
                        </div>
                    </div>
                    <router-link :to="{ name: 'product', params: { id: product.id } }" class="btn btn-primary">Voir plus</router-link>
                </div>
            </div>
        </div>
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <a class="pagination-previous" @click="previousPage">Précédent</a>
            <a class="pagination-next" @click="nextPage">Suivant</a>
        </nav>
    </div>
</template>

<script>
import NameStore from '../components/NameStore.vue'

export default {
  name: 'App',
  components: {
    NameStore
  },
  data() {
    return {
      filter: "",
      maxPrice : 9999,
      minPrice : 0,
      currentPage: 1,
      productsPerPage: 6
    }
  },
  computed: {
    Products: function() {
      return this.$store.getters.filteredProducts(this.filter, this.maxPrice, this.minPrice)
    },
    displayedProducts() {
        let start = (this.currentPage - 1) * this.productsPerPage
        let end = start + this.productsPerPage
        return this.Products.slice(start, end)
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage * this.productsPerPage < this.Products.length) {
        this.currentPage++
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    }
  },
  watch: {
    filter: function() {
      this.currentPage= 1
    },
    minPrice: function() {
      this.currentPage = 1
    },
    maxPrice: function() {
      this.currentPage = 1
    }
  }
}
</script>


<style scoped>
.card{
  text-align: center;
  width: 25vw;
  height: 55vh;
  margin: auto;
}
.card-image{
    width: 100%;
    height: 70%;
    overflow: hidden;
}

.columns{
    margin: 5vw 10vh;

}
.pagination-previous{
    position: fixed;
    bottom: 0;
    background-color: brown;
    left: 0;
}

.pagination-next{
    position: fixed;
    bottom: 0;
    background-color: brown;
    right: 0;
}
</style>
