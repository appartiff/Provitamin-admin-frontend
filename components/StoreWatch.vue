<template>
  <div>

  </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex';

  export default {
    name: "StoreWatch",
    created() {
      this.unsubscribe = this.$store.subscribe((mutation, state) => {
        switch (mutation.type) {
          case 'setData':
        }
      });
    },
    methods: {
      ...mapActions({
        getBrands: 'brands/getBrands',
      }),
    },
    beforeDestroy() {
      this.unsubscribe();
    },

  }
</script>

<style scoped>

</style>
