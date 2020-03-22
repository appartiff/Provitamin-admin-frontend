<template>
  <div class="field">
    <label class="label">Brand</label>
    <SelectionBox :collection="brands"></SelectionBox>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import SelectionBox from '../../formControls/SelectionBox';
    export default {
        name: "ProductBrand",

      computed:{
        ...mapState
        ('brands', ['brands'])
      },
      components:{
          SelectionBox
      }
    }
</script>

<style scoped>

</style>
