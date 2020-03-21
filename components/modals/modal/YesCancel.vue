<template>

  <div>
    <div class="field">
      <label class="label">{{title}}</label>
    </div>
    <div class="field">
      <label class="label">{{text}}</label>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button @click="$emit('yes')" class="button is-danger">Delete</button>
      </div>
      <div class="control">
        <button class="button" @click="$emit('canceled')">Cancel</button>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "DeleteConfirmation",
      props:{
          title: String,
        text: String
      }
    }
</script>

<style scoped>

</style>
