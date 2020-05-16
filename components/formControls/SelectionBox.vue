<template>
  <div class="select is-small">
    <select  @change="onChange">
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
        }
      },
      methods:{
        onChange(event) {
          this.$emit('selected',event.target.value);
          this.$emit('selectedIndex',event.target.selectedIndex)
        }
      }
    }
</script>

<style scoped>

</style>
