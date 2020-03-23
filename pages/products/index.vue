<template>
  <div class="full-width">
    <ProductsNavbar @addProductClicked="isAddProductActive = true" ></ProductsNavbar>

  <div class="column is-main-content">
    <div class="columns is-multiline">
      <ProductsTable @delete="clickedDelete"></ProductsTable>
      <DeleteProduct :active="isDeleteProductActive" @reset="reset"></DeleteProduct>
      <AddProduct :active="isAddProductActive" @reset="reset"></AddProduct>
    </div>
  </div>
  </div>
</template>

<script>
  import ProductsNavbar from '../../components/products/ProductsNavbar';
  import ProductsTable from '../../components/products/ProductsTable';
  import DeleteProduct from '../../components/products/DeleteProduct';
  import AddProduct from '../../components/products/AddProduct';
    export default {
        name: "index",
      components: {
        ProductsTable,
          ProductsNavbar,
        DeleteProduct,
        AddProduct
      },
      data() {
        return {
          isDeleteProductActive : false,
          isAddProductActive : false,
        }
      },
      methods:{
          clickedDelete(data){
            this.isDeleteProductActive = true;
          },
        reset(){
          this.isDeleteProductActive = false;
          this.isAddProductActive =false;

        }
      }
    }
</script>

<style scoped>

</style>
