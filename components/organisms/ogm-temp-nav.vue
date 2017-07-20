<template>
<ul class="o-fixed-footer o-flexgrid o-list-inline">
  <li class="o-flexgrid__item o-list-inline__item">
    <nuxt-link to="/">Home</nuxt-link>
  </li>
  <li class="o-flexgrid__item o-list-inline__item">
    <nuxt-link to="/user">User</nuxt-link>
  </li>
  <li class="o-flexgrid__item o-list-inline__item">
    <nuxt-link to="/test">Test</nuxt-link>
  </li>
</ul>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">

@import '~assets/styles/components/imports';

 .o-fixed-footer {
   position: fixed;
   margin: 0;
   padding: 0;
   text-align: center;
   top: auto;
   bottom: $unit-lg;
   left: $unit-lg;
   right: $unit-lg;
 }

</style>
