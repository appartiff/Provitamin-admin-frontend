export const state = () => ({
    products: [],
    selectedProduct: null
});

export const mutations = {
  setProducts(state,payload) {
    state.products = payload;
  },
};
export const actions = {
  insertProduct ({ commit,dispatch }, payload) {
    this.$axios.post('/api/products/create', {
      ...payload
    })
      .then(function (response) {
       dispatch('getProducts');
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  deleteProduct ({ commit,dispatch }, product) {
    this.$axios.delete('/api/products/delete/'+product.id)
      .then(function (response) {
        dispatch('getProducts');
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getProducts({commit}) {
    this.$axios.$get('/api/products/get')
      .then(function (response) {
        commit('setProducts',response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
export const  getters ={
  brandExists: (state) => (title) => {
    return state.brands.some(todo => todo.title === title);
  }
};
