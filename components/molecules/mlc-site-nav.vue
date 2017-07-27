<template>
  <div class="mlc-site-nav">
    <ul class="__nav-list">
      <li class="__nav-item">
        <nuxt-link class="__nav-link" to="/" v-scroll-to="'#content-top'">Projects</nuxt-link>
      </li>
      <li class="__nav-item">
        <nuxt-link class="__nav-link" to="/profile" v-scroll-to="'#content-top'">Profile</nuxt-link>
      </li>
      <li class="__nav-item">
        <nuxt-link class="__nav-link" to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
/* NOTE
** There are various styles being added inline to the glasses as they are
** scrolled past. These styles are removed once the element reaches the end
** of the transition (in both directions).
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */

// NONE


/* Base component class
   ====================================================================== */

.mlc-site-nav {
  
}


/* Nav list / links
   ====================================================================== */

/**
 * 1. Remove default left margin applied to <ul>
 * 2. Basic alignment and margins
 * 3. Set the font size for different breakpoints (maintaining
      vertial rhythm)
 * 2. Style and position the markers next to each link
 */

.__nav-list {
  margin-left: 0; /*[1]*/
}


.__nav-item {
  display: inline-block; /*[2]*/
  margin-right: $unit-md; /*[2]*/
  
  @include mq($from: desktop) {
    margin-right: $unit-lg; /*[2]*/
  }

  &:last-of-type {
    margin-right: 0; /*[2]*/
  }
}


.__nav-link {

  @include vr($font-body, $font-size-sm); /*[3]*/

  @include mq($from: desktop) {
    @include vr($font-body, $font-size-md); /*[3]*/
  }
  
  &:before {
    content: '';
    position: relative; /*[4]*/
    display: inline-block; /*[4]*/
    background-color: red; /*[4]*/
    width: .8em; /*[4]*/
    height: .8em; /*[4]*/
    margin-right: $unit-xs; /*[4]*/
  }
}

</style>
