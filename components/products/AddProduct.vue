<template>
  <Modal v-if="active" :active="active" @closed="reset">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
    </div>

    <div class="field">
      <label class="label">Sku</label>
      <div class="control">
        <input class="input is-success" type="text" placeholder="Text input">
      </div>
      <p class="help is-success">This sku is available</p>
    </div>
    <div class="field">
      <label class="label">Categories</label>
      <div class="control">
        <input class="input" type="text" placeholder="vitaminer/b vitamin">
    </div>
    </div>
    <h2 class="title is-3">Pricing</h2>
    <div class="field is-grouped">
      <div class="control">
        <label class="label">Listing Price</label>
        <input class="input" type="text" placeholder="56">
      </div>
      <div class="control">
        <label class="label">Retail Price</label>
        <input class="input" type="text" placeholder="56">
      </div>
      <div class="control">
        <label class="label">discount</label>
        <span>5%</span>
      </div>
    </div>
    <h2 class="title is-3">Shipping</h2>
    <div class="field is-grouped">

      <div class="control">
        <label class="label">Weight</label>
        <input class="input" type="text" placeholder="346g">
      </div>
      <div class="control">
        <label class="label">Height</label>
        <input class="input" type="text" placeholder="56cm">
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <label class="label">Width</label>
        <input class="input" type="text" placeholder="35cm">
      </div>
      <div class="control">
        <label class="label">Depth</label>
        <input class="input" type="text" placeholder="10cm">
      </div>
    </div>
  </Modal>
</template>

<script>
  import Modal from '../modals/Modal';
    export default {
        name: "AddProduct",
      components:{
          Modal
      },
      data() {
        return {
          product:{}
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
            this.$emit('reset');
          }
      }
    }
</script>

<style scoped>

</style>
