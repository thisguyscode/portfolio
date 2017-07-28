<template>
  <section class="u-box u-box--xxxl">
    <atm-blockquote>
      <p class="u-text--xl  u-text--heading-margin  u-text--bold">
        I make digital interfaces for humans.
      </p>
      <p class="u-text--xl  u-text--low-contrast">
        It&#39;s mostly putting text in boxes.
      </p>
    </atm-blockquote>
  </section>
</template>

<script>
import atmBlockquote from '~components/atoms/atm-blockquote.vue'

export default {
  scrollToTop: false,
  layout: 'default',
  components: {
    atmBlockquote
  }
}
</script>

<style lang="scss" scoped>

/* NOTES
** None
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */


/* Base component class
   ====================================================================== */
.page-projects {
}

/* --
   ====================================================================== */

</style>
