<template>
  <div class="columns is-fullheight">
    <Sidebar></Sidebar>
    <nuxt />
    <StoreWatch></StoreWatch>
  </div>
</template>

<script>
  import {mapState, mapMutations,mapGetters,mapActions} from 'vuex';
  import Sidebar from '../components/Sidebar';
  import StoreWatch from '../components/StoreWatch';
  export default {
    components:{
      Sidebar,
      StoreWatch
    },
    methods:{
      ...mapActions({
        getBrands: 'brands/getBrands',
      })
    },
    mounted(){
      this.getBrands();
    },
  }
</script>
<style>

  .is-main-content {
    background: #dbdbdb;
    min-height: 100vh;
  }

  html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
