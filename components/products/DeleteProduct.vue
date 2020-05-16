<template>
  <Modal v-if="active" :active="active" @closed="reset">
    <DeleteConfirmation title="Do you want to delete:" :text="product.details.title" @yes="yesClicked" @canceled="$emit('reset')"></DeleteConfirmation>
  </Modal>
</template>
<script>
  import Modal from '../modals/Modal';
  import { mapState,mapActions } from 'vuex';
  import DeleteConfirmation from '../modals/modal/YesCancel';
    export default {
        name: "DeleteProduct",
      components:{
          Modal,
        DeleteConfirmation
      },
      props:{
          active : {
            default:false,
            type:Boolean
          },
        product:{
            type:Object,
          required:true
        }
      },
      computed:{

      },
      methods:{
        ...mapActions({
          deleteProduct: 'products/deleteProduct'
        }),
        yesClicked(){
          this.deleteProduct(this.product);
          this.reset();
        },
        reset(){
          this.$emit('reset');
        }
      }
    }
</script>

<style scoped>

</style>
