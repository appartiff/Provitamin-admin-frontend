<template>
  <div class="select is-small">
    <select   v-model="selected">
      <option selected="selected"> Select dropdown</option>
      <option v-for="(item,index) in collection" :key="index">{{item}}</option>
    </select>
  </div>
</template>

<script>
    export default {
      name: "SelectBox",
      props: {
        collection: {
          type: Array,
          required: true
        }
      },
      data() {
        return {
          selected:null
        }
      }
    }
</script>

<style scoped>

</style>
