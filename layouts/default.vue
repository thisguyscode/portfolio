<template>
  
  <section class="main">

    <ogm-site-header></ogm-site-header>

    <div class="u-baseline-grid"></div>

    <nuxt/>

  </section>
  
</template>

<script>
import ogmSiteHeader from '~components/organisms/ogm-site-header'

export default {
  components: {
    ogmSiteHeader
  }
}
</script>
