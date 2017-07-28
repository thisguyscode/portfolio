<template>
<div class="ogm-site-header">

  <mlc-glasses></mlc-glasses>
  
  <!-- name -->
  <div class="__name">
    <img src="~assets/images/logo-name.svg"/>
  </div>
  
  <!-- tagline -->
  <h2 class="__tagline  u-text--low-contrast">digital interface designer</h2>

  <mlc-site-nav></mlc-site-nav>

</div>

</template>

<script>
import mlcSiteNav from '~components/molecules/mlc-site-nav'
import mlcGlasses from '~components/molecules/mlc-glasses'

export default {
  scrollToTop: false,
  components: {
    mlcSiteNav,
    mlcGlasses
  }
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
$glasses-max-width: 264px;
$name-max-width: 292px;


/* Base component class
   ====================================================================== */
.ogm-site-header {
  text-align: center;
  padding: $unit-xxl $unit-md;

  @include mq($from: tablet) {
    padding: $unit-xxl;
  }
  
  @include mq($from: tablet) {
    padding: $unit-xxl*2;
  }
}


/* Name
   ====================================================================== */
.__name {
  width: $name-max-width/2;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: $unit-md;

  @include mq($from: desktop) {
    margin-bottom: $unit-lg;
    width: $name-max-width;
  }

}


/* Tagline
   ====================================================================== */
.__tagline {
  @include vr($font-display, $font-size-lg);
  margin-bottom: $unit-lg;
}

</style>
