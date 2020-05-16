<template>
  <table class="table column">
    <thead>
    <tr>
      <th>Sku</th>
      <th>Brand</th>
      <th>Title</th>
      <th>Inventory</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    <tr class="is-size-6" v-for="(product, index) in products" :key="product.id">
      <th>
        {{product.sku}}
      </th>
      <td>
        {{product.details.brand}}
      </td>
      <td>
        {{product.details.title}}
      </td>
      <td class="center">
       0
      </td>
      <td>
        <button @click="editClicked(product)" class="button is-primary">
         Edit
        </button>
      </td>
      <td>
        <button @click="showDeleteModal = index" class="button is-danger">
          Delete
        </button>
        <DeleteProduct :product="product" :active="showDeleteModal === index"  @reset="reset"></DeleteProduct>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import DeleteProduct from './DeleteProduct';
  import { mapState,mapMutations } from 'vuex';
    export default {
        name: "ProductsTable",
      computed: {
        ...mapState
        ('products', ['products'])
      },
      components:{
        DeleteProduct
      },
      data() {
        return {
          showDeleteModal:-1,
          showEditModal:-1,
        }
      },
      methods:{
          editClicked(product){
           // this.selectProduct(product);
            this.$emit('edit')
          },
        reset(){
          this.showDeleteModal = -1;
        }
      }
    }
</script>

<style scoped>
.center{
  text-align: center;
}
</style>
