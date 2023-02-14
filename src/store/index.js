import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        products: []
    },
    getters: {
        filteredProducts: (state) => (filter, maxPrice, minPrice) => {
            return state.products.filter(product => 
                (product.title.toLowerCase().includes(filter.toLowerCase()) || product.description.toLowerCase().includes(filter.toLowerCase())) && 
                product.price < maxPrice && 
                product.price > minPrice
            );
        },
        getProduct: (state) => (id) => {
            return state.products.find(products => products.id === id);
          }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
          }, 
    }
})