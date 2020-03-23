<template>
  <div class="full-width">
    <BrandsNavbar @addBrandClicked="addClicked"></BrandsNavbar>
    <div class="column is-main-content">
      <div class="columns is-multiline">
        <table class="table column is-full">
          <thead>
          <tr>
            <th>Brand</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          <tr class="is-size-6" v-for="brand in brands">
            <th>
              {{brand}}
            </th>
            <td>
              <button @click="deleteClicked(brand)" class="button is-danger">
                Delete
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Modal v-if="active" :active="active" @closed="reset">
      <div class="field">
        <InputBox v-model="input" type="text" placeholder="input" label="Brand"></InputBox>
      </div>
      <div class="field">
        <button @click="insertBrand" class="button is-primary">Insert</button>
      </div>
    </Modal>
  </div>
</template>

<script>

  import {mapState, mapMutations} from 'vuex';
  import BrandsNavbar from '../../components/brands/BrandsNavbar';
  import Modal from '../../components/modals/Modal';
  import InputBox from '../../components/formControls/InputBox';
  export default {
    name: "index",
    components: {
      BrandsNavbar,
      Modal,
      InputBox
    },
    data() {
      return {
        active: false,
        input: '',
      }
    },
    computed: {
      ...mapState({
        brands: state => state.brands.brands
      })
    },
    methods:{
      ...mapMutations({
        deleteBrand: 'brands/deleteBrand',
        addBrand: 'brands/addBrand'
      }),
      deleteClicked(brand){
        this.deleteBrand(brand);
      },
      addClicked(){
        this.active=true;
      },
      insertBrand(){
       this.addBrand(this.input);
       this.reset();
      },
      reset(){
        this.active =false;
        this.input = '';
      }
    },

  }
</script>

<style scoped>

</style>
