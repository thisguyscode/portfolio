<template>
<ul class="c__">
  <li class="c__nav-item">
    <nuxt-link class="c__nav-link" to="/">projects</nuxt-link>
  </li>
  <li class="c__nav-item">
    <nuxt-link class="c__nav-link" to="/profile">profile</nuxt-link>
  </li>
  <li class="c__nav-item">
    <nuxt-link class="c__nav-link" to="/recache">recache</nuxt-link>
  </li>
</ul>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

@import '~assets/styles/imports/imports';

.c__ {
  position: fixed;
  text-align: center;
  top: auto;
  bottom: $unit-lg;
  left: $unit-lg;
  list-style: none;
}

 .c__nav-item {
   display: inline-block;
   margin-right: $unit-xl;
 }

</style>
