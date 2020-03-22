<template>
  <div class="control">
    <label class="label">{{label}}</label>
    <input v-if="type === 'text'" v-model="content" @input="handleInput" class="input" :type="type" :placeholder="placeholder">
    <input v-if="type === 'number'" v-model.number="content" @input="handleInput" class="input" :type="type" :placeholder="placeholder">
  </div>
</template>

<script>
    export default {
        name: "InputBox",
      props: {
        value: String,
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
        }
      }
    }
</script>

<style scoped>
input {
  font-size: 0.8rem;
}
  label {
    font-size: 0.9rem
  }
</style>
