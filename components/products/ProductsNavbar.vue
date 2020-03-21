<template>
  <nav class="navbar column is-full" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button @click="$emit('addProductClicked')" class="button is-primary">
              <strong>Add Product</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "ProductsNavbar"
    }
</script>

<style lang="scss" scoped>
  @import '~/assets/variables/_variables.scss';

  nav{
    background: $color--dark-shade-lighter;
  }
  a {
    color: $color--light-shades;
  }
  .navbar-dropdown {
    background: $color--light-shades;
  }
  .navbar-dropdown a {
    color: $color--dark-shade
  }

</style>
