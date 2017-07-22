<template>
  <div class="o-header">
    <div class="o-header-logo">
      <div class="o-header-logo__glasses">
        <img src="~assets/images/logo-glasses.svg"/>
      </div>
      <div class="o-header-logo__name">
        <img src="~assets/images/logo-name.svg"/>
      </div>
    </div>
    
    <h2 class="o-header__tagline  u-text--low-contrast">digital interface designer</h2>

      <div class="o-header__nav-list">
        <ul class="o-list-inline o-list-inline--large">
          <li class="o-header__nav-item  o-list-inline__item">
            <nuxt-link class="o-header__link" to="/">
              Projects
            </nuxt-link>
          </li>
          <li class="o-header__nav-item  o-list-inline__item">
            <nuxt-link class="o-header__link" to="profile">
              Profile
            </nuxt-link>
          </li>
          <li class="o-header__nav-item  o-list-inline__item">
            <nuxt-link class="o-header__link" to="contact">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>

  </div>
</template>


<style lang="scss">
</style>


<script>
export default {
  data: () => {
    return {
      text: 'not-trigger-yet'
    }
  },
  methods: {
    waypointHandler (direction, going) {
      console.log('logged')
      // this.text = 'the Waypoint has been triggered with: direction: { x: ' + direction.x + ', y: ' + direction.y + ' } and going: ' + going
    }
  }
}
</script>
