<template>
  
  <section class="main">

    <div class="u-baseline-grid"></div>

    <nuxt/>

    <ogm-temp-nav></ogm-temp-nav>

  </section>
  
</template>

<script>
import ogmTempNav from '~/components/organisms/ogm-temp-nav'

export default {
  components: {
    ogmTempNav
  }
}
</script>
