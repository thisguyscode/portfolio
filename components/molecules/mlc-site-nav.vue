<template>
  <span class="mlc-site-nav">
    
    <v-waypoint class="__waypoint" @waypoint="waypointNav"></v-waypoint>
    
    <nav class="__navbar" ref="jsNavbar" :class="cssNavbar">
      <div class="u-wrapper">
        <ul class="__nav-list">
          <li class="__nav-item">
            <nuxt-link class="__nav-link" to="/projects" v-scroll-to="'#content-top'">
              Projects
            </nuxt-link>
          </li>
          <li class="__nav-item">
            <nuxt-link class="__nav-link" to="/profile" v-scroll-to="'#content-top'">
              Profile
            </nuxt-link>
          </li>
          <li class="__nav-item">
            <nuxt-link class="__nav-link" to="/contact" v-scroll-to="'#content-top'">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <div ref="jsRelativePlaceholder" class="__relative-placeholder"></div>

  </span>
</template>


<script>

export default {
  data: () => {
    return {
      navFixed: false
    }
  },
  computed: {
    cssNavbar: function () {
      return {
        's-is-fixed': this.navFixed
      }
    }
  },
  methods: {
    waypointNav (direction, going) {
      var navBar = this.$refs.jsNavbar
      var relativePlaceholder = this.$refs.jsRelativePlaceholder
      var navHeight = navBar.clientHeight

      if (going === 'in') {
        this.navFixed = false
        relativePlaceholder.removeAttribute('style')
      } else if (going === 'out') {
        relativePlaceholder.setAttribute('style',
          'height: ' + navHeight + 'px; '
        )
        this.navFixed = true
      }
    }
  }
}
</script>


<style lang="scss" scoped>

/* NOTE
** None
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */

// None


/* Base component class
   ====================================================================== */
.mlc-site-nav {
}

/* Navbar
   ====================================================================== */

/**
 * 1. Simoulanteously sets the placeholder bar and fixed-state bar as fixed
 * 2. Only set the padding once header becomes fixed (prevents page jumping)
 * 3. Position the bar at the top
 */

.__navbar {
  transition: box-shadow .5s ease, background-color .5s ease;
  width: 100%; /*[3]*/
  top: 0; /*[3]*/
  left: 0; /*[3]*/

  &.s-is-fixed {
    // line-height: $navbar-inner-height;
    @include inner-border(bottom, 1px);
    position: fixed; /*[1]*/
    text-align: right;
    background: white;
    z-index: 10;
    
    @include mq($from: tablet) {
      text-align: center;
    }
  }
}

/* Nav Links
   ====================================================================== */
/**
 * 1. Remove default left/bottom margin applied to <ul>
 * 2. Basic alignment and margins
 * 3. Set the font size for different breakpoints (maintaining
      vertial rhythm)
 * 2. Style and position the markers next to each link
 */

.__nav-list {
  margin-left: 0; /*[1]*/
  margin-bottom: 0; /*[1]*/

  // &.s-is-fixed {
  //   position: fixed;
  //   top: $navbar-padding;
  //   right: $navbar-padding;
  // }
}


.__nav-item {
  display: inline-block; /*[2]*/
}


.__nav-link {
  text-decoration: none;
  color: $neutral-60;
  padding: $navbar-padding $navbar-padding/2;
  font-size: $font-size-sm;
  display: block;

  @include mq($from: desktop) {
    padding: $navbar-padding;
    font-size: $font-size-md;
  }
  
  &:before {
    content: '';
    position: relative; /*[4]*/
    display: inline-block; /*[4]*/
    background-color: red; /*[4]*/
    width: .8em; /*[4]*/
    height: .8em; /*[4]*/
    margin-right: $unit-xs; /*[4]*/
  }

  &.nuxt-link-active {
    background: $neutral-05;
    margin-bottom: 1px;
    color: $neutral-100;
  }
}
</style>
