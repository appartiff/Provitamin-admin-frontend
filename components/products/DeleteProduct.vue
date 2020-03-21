<template>
  <Modal v-if="active" :active="active" @closed="reset">
    <DeleteConfirmation title="Do you want to delete:" :text="selectedProduct.details.title" @yes="yesClicked" @canceled="$emit('reset')"></DeleteConfirmation>
  </Modal>
</template>
<script>
  import Modal from '../modals/Modal';
  import { mapMutations,mapState } from 'vuex';
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
      },
      computed:{
          ...mapState
          ('products', ['selectedProduct'])

      },
      methods:{
        ...mapMutations({
          deleteProduct: 'products/deleteProduct'
        }),
        yesClicked(){
          this.deleteProduct(this.selectedProduct);
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
