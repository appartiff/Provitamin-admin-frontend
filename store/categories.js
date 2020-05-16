export const state = () => ({
  categories: [
  ],
});

export const mutations = {
  setCategories(state,payload){
    state.categories = payload;
  },
};
export const actions = {
  insertCategory ({ commit,dispatch }, brand) {
    this.$axios.post('/api/categories/create', {
      title: brand
    })
      .then(function (response) {
        dispatch('getBrands');
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  deleteCategory ({ commit,dispatch }, brand) {
    this.$axios.delete('/api/categories/delete', {
      data: {title: brand.title}
    })
      .then(function (response) {
        dispatch('getBrands');
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getCategory({commit}) {
    this.$axios.$get('/api/categories/get')
      .then(function (response) {
        commit('setCategories',response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
export const  getters ={
  categoryExists: (state) => (title) => {
    return state.brands.some(todo => todo.title === title);
  }
};
