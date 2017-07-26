<template>
  <section class="o-box">

    <atm-blockquote></atm-blockquote>

    <nuxt-child/>

  </section>
</template>

<script>
import atmBlockquote from '~components/atoms/atm-blockquote.vue'

export default {
  layout: 'default',
  components: {
    atmBlockquote
  }
}
</script>

<style>
</style>
