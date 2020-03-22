<template>
  <div class="control">
    <label class="label">{{label}}</label>
    <input v-if="type === 'text'" v-model="content" @input="handleInput" class="input is-small" :type="type" :placeholder="placeholder">
    <input v-if="type === 'number'" v-model.number="content" @input="handleInput" :class="isNumber(value) ? 'is-danger' : ''" class="input is-small" :type="type" :placeholder="placeholder">
  </div>
</template>

<script>
    export default {
        name: "InputBox",
      props: {
        value: [String,Number],
        type: {
          required:true,
          Type: String,
          validator: value => {
            // Only accepts values that contain the string 'cookie-dough'.
            return value.indexOf('text') !== -1 || value.indexOf('number') !== -1
          }
        },
        label: {
          required: true,
          Type: String
        },
        placeholder: String,

      },
      data () {
        return {
          content: this.value
        }
      },
      methods: {
        handleInput (e) {
          this.$emit('input', this.content)
        },
        isNumber(input){
          return !(/^\d+$/.test(input));
        }
      }
    }
</script>

<style scoped>
  label {
    font-size: 0.9rem
  }
</style>
