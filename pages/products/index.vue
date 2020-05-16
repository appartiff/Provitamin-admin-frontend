<template>
  <div class="full-width">
    <ProductsNavbar @addProductClicked="isAddProductActive = true" ></ProductsNavbar>

  <div class="column is-main-content">
    <div class="columns is-multiline">
      <ProductsTable></ProductsTable>
      <AddProduct :active="isAddProductActive" @reset="reset"></AddProduct>
    </div>
  </div>
  </div>
</template>

<script>
  import ProductsNavbar from '../../components/products/ProductsNavbar';
  import ProductsTable from '../../components/products/ProductsTable';
  import AddProduct from '../../components/products/AddProduct';
  import {mapActions} from 'vuex';
    export default {
        name: "index",
      components: {
        ProductsTable,
          ProductsNavbar,
        AddProduct
      },
      data() {
        return {
          isAddProductActive : false,
        }
      },

      methods:{
          ...mapActions({
            getProducts:'products/getProducts',
          }),
        reset(){
          this.isAddProductActive =false;
        }
      },
      mounted(){
        this.getProducts();
      },
    }
</script>

<style scoped>

</style>
