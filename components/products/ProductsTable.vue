<template>
  <table class="table column is-full">
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
    <tr class="is-size-6" v-for="product in products">
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
        <button @click="deleteClicked(product)" class="button is-danger">
          Delete
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import { mapState,mapMutations } from 'vuex';
    export default {
        name: "ProductsTable",
      computed: {
        ...mapState({
          products: state => state.products.products
        })
      },
      methods:{
          ...mapMutations({
            selectProduct: 'products/selectProduct'
          }),
          editClicked(product){
            this.selectProduct(product);
            this.$emit('edit')

          },
        deleteClicked(product){
          this.selectProduct(product);
          this.$emit('delete')
        }
      }
    }
</script>

<style scoped>
.center{
  text-align: center;
}
</style>
