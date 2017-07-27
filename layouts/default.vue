<template>
  
  <section id="page-top" class="u-wrapper">

    <div class="u-baseline-grid"></div>

    <ogm-site-header></ogm-site-header>
    <ogm-temp-nav></ogm-temp-nav>

    <v-waypoint id="content-top" @waypoint="waypointContentTop"></v-waypoint>

    <nuxt/>

  </section>
  
</template>

<script>
import ogmSiteHeader from '~/components/organisms/ogm-site-header'
import ogmTempNav from '~/components/organisms/ogm-temp-nav'

export default {
  scrollToTop: false,
  components: {
    ogmSiteHeader,
    ogmTempNav
  },
  data: () => {
    return {
      text: 'not-trigger-yet'
    }
  },
  methods: {
    waypointContentTop (direction, going) {
      this.text = 'the Waypoint has been triggered with: direction: { x: ' + direction.x + ', y: ' + direction.y + ' } and going: ' + going
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
