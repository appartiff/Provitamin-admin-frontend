<template>
  <div class="modal" :class="active ? 'is-active' : ''">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <slot>
        </slot>
      </div>
    </div>
    <button @click="$emit('closed')" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
    export default {
        name: "Modal",
      props:{
          active: {
            required: false,
            type: Boolean,
            default: false
          }
      },
      data() {
        return {
        }
      },

    }
</script>

<style scoped>

</style>
