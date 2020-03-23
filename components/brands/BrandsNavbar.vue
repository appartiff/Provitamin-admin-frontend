<template>
  <nav class="navbar column" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button @click="$emit('addBrandClicked')" class="button is-primary">
              <strong>Add Brand</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "BrandsNavbar"
    }
</script>

<style scoped>

</style>
