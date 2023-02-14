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
        getCountry: (state) => (code) => {
            return state.products.find(p => p.id === code);
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
          }, 
    }
})