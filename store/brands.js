import axios from 'axios'

export const state = () => ({
  brands: ['Christopher\'s Original Formulas', '21st Century'],
});
export const mutations = {
  addBrand(state, text) {
    state.brands.push(text)
  },
  deleteBrand(state, payload) {
    let index = state.brands.indexOf(payload);
    if (index > -1)
      state.brands.splice(index, 1);
  }
};
export const actions = {
  insertBrand ({ commit }, brand) {
    axios.post('/api/brands', {
      title: brand
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
