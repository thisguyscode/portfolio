<template>
  <section class="o-box">

    <ogm-site-header></ogm-site-header>

    <v-waypoint @waypoint="waypointContentTop"></v-waypoint>
    {{ text }}

    <nuxt-child/>

  </section>
</template>

<script>
import ogmSiteHeader from '~components/organisms/ogm-site-header'
import ogmTempNav from '~components/organisms/ogm-temp-nav'

export default {
  data: () => {
    return {
      text: 'not-trigger-yet'
    }
  },
  methods: {
    waypointContentTop (direction, going) {
      this.text = 'the Waypoint has been triggered with: direction: { x: ' + direction.x + ', y: ' + direction.y + ' } and going: ' + going
    }
  },
  components: {
    ogmTempNav,
    ogmSiteHeader
  }
}
</script>

<style>
</style>
