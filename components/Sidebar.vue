<template>

    <div class="column is-2 is-sidebar-menu is-hidden-mobile">
  <aside class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><nuxt-link to="/#">Dashboard</nuxt-link></li>
      <li><nuxt-link to="/customers">Customers</nuxt-link></li>
      <li><nuxt-link to="/products">Products</nuxt-link></li>
    </ul>
    <p class="menu-label">
      Transactions
    </p>
    <ul class="menu-list">
      <li><a>Payments</a></li>
      <li><a>Orders</a></li>
    </ul>
  </aside>
    </div>

</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style lang="scss" scoped>
  @import '~/assets/variables/_variables.scss';
  .is-sidebar-menu
  {
    background: $color--dark-shade;
  li a {
    color: $color--light-shades;
  }
  }

</style>
