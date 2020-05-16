<template>
  <Modal v-if="active" :active="active" @closed="reset">
    <h2 class="title is-3">Sku</h2>
    <div class="field is-grouped">
      <InputBox v-model="product.sku" type="text" placeholder="VGC-fdf-44e" label="Sku"></InputBox>
    </div>
    <div class="field">
      <p class="help is-success">This sku is available</p>
    </div>
    <h2 class="title is-3">Details</h2>
    <div class="control">
      <label class="label">Brand</label>
      <SelectionBox @selected="updateBrand" :collection="brands.map(x=>x.title)"></SelectionBox>
    </div>
    <div class="field">
      <InputBox v-model="product.details.title" type="text" placeholder="input" label="Title"></InputBox>
    </div>
    <div class="field">
      <InputBox v-model="product.details.category" type="text" placeholder="input" label="Categories"></InputBox>
    </div>
    <h2 class="title is-3">Pricing</h2>
    <div class="field is-grouped">
      <InputBox v-model="product.pricing.list"  type="number" placeholder="input" label="Listing Price"></InputBox>
      <InputBox v-model="product.pricing.retail"  type="number" placeholder="input" label="Retail Price"></InputBox>
      <div class="control">
        <label class="label">discount</label>
        <span>{{calculateDiscountPercentage()}}%</span>
      </div>
    </div>
    <h2 class="title is-3">Shipping</h2>
    <div class="field is-grouped">
      <InputBox v-model="product.shipping.weight"  type="number" placeholder="input" label="Weight"></InputBox>
      <InputBox v-model="product.shipping.dimensions.height"  type="number" placeholder="input" label="Height"></InputBox>
    </div>
    <div class="field is-grouped">
      <InputBox v-model="product.shipping.dimensions.width"  type="number" placeholder="input" label="Width"></InputBox>
      <InputBox v-model="product.shipping.dimensions.depth"  type="number" placeholder="input" label="Depth"></InputBox>
    </div>
    <div class="field">
      <button @click="addProduct" class="button is-primary">Insert</button>
    </div>
  </Modal>
</template>

<script>
  import Modal from '../modals/Modal';
import InputBox from '../formControls/InputBox';
import SelectionBox from '../formControls/SelectionBox';
import ProductBrand from './AddProduct/ProductBrand';
import {ProductDto} from '../../entities/products/productDto';
import {mapState,mapActions} from 'vuex';
  export default {
        name: "AddProduct",
      components:{
          Modal,
        InputBox,
        ProductBrand,
        SelectionBox
      },
      data() {
        return {
          product:ProductDto(),
        }
      },
    computed:{
      ...mapState
      ('brands', ['brands']),
    },
      props:{
        active : {
          default:false,
          type:Boolean
        }
      },
      methods:{
        ...mapActions({
          insertProduct:'products/insertProduct',
        }),
          reset(){
            this.product = ProductDto();
            this.$emit('reset');
          },
        updateBrand(index){
            this.product.details.brand = index;
        },
        addProduct(){
          this.insertProduct(this.product);
          this.$emit('reset');
        },
        calculateDiscountPercentage(){
             let discount = this.product.pricing.list- this.product.pricing.retail;
             let discountPercentage = parseInt(((discount / this.product.pricing.list) * 100));
          this.product.pricing.savings = discount;
             this.product.pricing.pctSavings = discountPercentage;
            return discountPercentage
        },
      }
    }
</script>

<style scoped>

</style>
