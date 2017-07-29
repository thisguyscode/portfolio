<template>
  
  <section id="page-top">

    <div class="u-wrapper">
      <div class="u-baseline-grid"></div>
    </div>

    <ogm-site-header :contentReached="contentReached"></ogm-site-header>
    <ogm-temp-nav></ogm-temp-nav>
    
    <div class="__content-waypoint-wrapper">
      <atm-no-ssr>
        <v-waypoint class="__content-waypoint" id="content-top" @waypoint="waypointContentTop"></v-waypoint>
      </atm-no-ssr>
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
      contentReached: true
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
