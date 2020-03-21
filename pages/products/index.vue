<template>
  <div>
    <div class="columns is-multiline">
    <ProductsNavbar @addProductClicked="isAddProductActive = true" ></ProductsNavbar>
      <ProductsTable @delete="clickedDelete"></ProductsTable>
      <DeleteProduct :active="isDeleteProductActive" @reset="reset"></DeleteProduct>
      <AddProduct :active="isAddProductActive" @reset="reset"></AddProduct>
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
