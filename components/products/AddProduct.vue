<template>
  <Modal v-if="active" :active="active" @closed="reset">
    <div class="field">
      <InputBox v-model="product.sku" type="text" placeholder="input" label="Sku"></InputBox>
      <p class="help is-success">This sku is available</p>
    </div>
    <h2 class="title is-3">Details</h2>
    <div class="field">
      <InputBox v-model="product.details.title" type="text" placeholder="input" label="Title"></InputBox>
    </div>
    <ProductBrand></ProductBrand>
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
      <button class="button is-primary">Insert</button>
    </div>
  </Modal>
</template>

<script>
  import Modal from '../modals/Modal';
import InputBox from '../formControls/InputBox';
import ProductBrand from './AddProduct/ProductBrand';
import {ProductDto} from '../../entities/products/productDto';

  export default {
        name: "AddProduct",
      components:{
          Modal,
        InputBox,
        ProductBrand
      },
      data() {
        return {
          product:ProductDto()
        }
      },
      props:{
        active : {
          default:false,
          type:Boolean
        }
      },
      methods:{
          reset(){
            this.product = ProductDto();
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
