<template>
<ul class="o-fixed-footer o-flexgrid o-list-inline">
  <li class="o-flexgrid__item o-list-inline__item">
    <nuxt-link to="/">projects</nuxt-link>
  </li>
  <li class="o-flexgrid__item o-list-inline__item">
    <nuxt-link to="/profile">profile</nuxt-link>
  </li>
  <li class="o-flexgrid__item o-list-inline__item">
    <nuxt-link to="/recache">Recache</nuxt-link>
  </li>
</ul>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">

@import '~assets/styles/imports/imports';

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
