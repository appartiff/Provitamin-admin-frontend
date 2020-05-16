<template>
  <div class="full-width">
    <BrandsNavbar @addBrandClicked="openModal"></BrandsNavbar>
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
              {{brand.title}}
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
        <InputBox v-model="input" type="text" placeholder="Christopher" label="Brand"></InputBox>
      </div>
      <div class="field">
        <button @click="addBrand" class="button is-primary">Insert</button>
      </div>
    </Modal>
  </div>
</template>

<script>

  import {mapState, mapMutations,mapGetters,mapActions} from 'vuex';
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
      }),
      ...mapGetters({
        brandExists: 'brands/brandExists',
  }),
    },
    methods:{
      ...mapActions({
        insertBrand:'brands/insertBrand',
        deleteBrand:'brands/deleteBrand',
      }),
      deleteClicked(brand){
        this.deleteBrand(brand);
      },
      openModal(){
        this.active =true;
      },
      addBrand(){
       let exists = this.brandExists(this.input);
       if(!exists){
         this.insertBrand(this.input);
         this.reset();
       }
      },
      reset(){
        this.active =false;
        this.input = '';
      }
    }

  }
</script>

<style scoped>

</style>
