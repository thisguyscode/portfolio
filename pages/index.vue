<template>
  <section class="o-box">

    <h2>projects</h2>

    <atm-blockquote></atm-blockquote>
    
    <nuxt-child/>

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

<style>
</style>
