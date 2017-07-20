<template>
  
  <section class="">
    <ogm-site-nav></ogm-site-nav>

    <div class="u-baseline-grid"></div>

    <nuxt/>

    <ogm-temp-nav></ogm-temp-nav>

  </section>
  
</template>

<script>
import ogmSiteNav from '~components/organisms/ogm-site-nav'
import ogmTempNav from '~components/organisms/ogm-temp-nav'

export default {
  components: {
    ogmSiteNav,
    ogmTempNav
  }
}
</script>
