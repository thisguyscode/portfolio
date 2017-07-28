<template>
  
  <section id="page-top">

    <div class="u-wrapper">
      <div class="u-baseline-grid"></div>
    </div>

    <ogm-site-header :contentReached="contentReached"></ogm-site-header>
    <ogm-temp-nav></ogm-temp-nav>
    
    <div class="__content-waypoint-wrapper">
      <v-waypoint class="__content-waypoint" id="content-top" @waypoint="waypointContentTop"></v-waypoint>
    </div>

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
      contentReached: false
    }
  },
  methods: {
    waypointContentTop (direction, going) {
      if (going === 'out') {
        this.contentReached = true
      } else {
        this.contentReached = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/imports/imports";

.__content-waypoint-wrapper {
  position: relative;
  height: 0;
}
.__content-waypoint {
  position: absolute;
  top: -$navbar-height;
}

</style>
