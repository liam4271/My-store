import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    getters: {
        filteredProducts: (state) => (filter, maxPrice, minPrice) => {
            return state.products.filter(product => 
                (product.title.toLowerCase().includes(filter.toLowerCase()) || product.description.toLowerCase().includes(filter.toLowerCase())) && 
                product.price < maxPrice && 
                product.price > minPrice
            );
        },
        addProductToCart ({ commit }, product) {
            commit('addProductToCart', product)
          },
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
          }, 
        ADD_PRODUCT_TO_CART(state, product) {
            state.cart.push(product)
        }
    }
})