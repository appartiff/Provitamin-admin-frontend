export const state = () => ({
  brands: [
   ],
});

export const mutations = {
  setBrands(state,payload){
    state.brands = payload;
  },
};
export const actions = {
  insertBrand ({ commit,dispatch }, brand) {
    this.$axios.post('/api/brands/create', {
      title: brand
    })
      .then(function (response) {
        dispatch('getBrands');
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  deleteBrand ({ commit,dispatch }, brand) {
    this.$axios.delete('/api/brands/delete', {
    data: {title: brand.title}
    })
      .then(function (response) {
        dispatch('getBrands');
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getBrands({commit}) {
    this.$axios.$get('/api/brands/get')
      .then(function (response) {
        commit('setBrands',response);
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
