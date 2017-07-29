<template>
  <span class="mlc-site-nav">
    
    <v-waypoint v-if="clientRender" class="__waypoint" @waypoint="waypointNav"></v-waypoint>
    
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
      navFixed: false,
      clientRender: false
    }
  },
  props: {
    isStyled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cssNavbar: function () {
      return {
        's-is-fixed': this.navFixed,
        's-is-styled': this.isStyled
      }
    }
  },
  mounted () {
    this.clientRender = true
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
  z-index: z("site-header", "links");
  position: relative;
}

/* Navbar
   ====================================================================== */

/**
 * 1. Simoulanteously sets the placeholder bar and fixed-state bar as fixed
 * 2. Only set the padding once header becomes fixed (prevents page jumping)
 * 3. Position the bar at the top
 */

.__navbar {
  z-index: z("site-header", "links");
  // transition: background-color .1s ease-in-out;
  width: 100%; /*[3]*/
  top: 0; /*[3]*/
  left: 0; /*[3]*/

  &.s-is-fixed {
    position: fixed; /*[1]*/
    text-align: right;
    
    @include mq($from: tablet) {
      text-align: center;
    }
  }

  &.s-is-styled {
    @include inner-border(bottom, 1px, high);
    background: white;
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
  @include mq($from: mobile, $until: desktop) {
    &:last-of-type {
      margin-right: $navbar-padding/2;
    }
  }
}


.__nav-link {
  @include vr($font-body, $font-size-sm);
  @include vr-reset;
  text-decoration: none;
  color: $neutral-60;
  padding: $navbar-padding $navbar-padding/2;
  display: block;
  position: relative;

  @include mq($from: desktop) {
    @include vr($font-body, $font-size-md);
    @include vr-reset;
    padding: $navbar-padding;
    position: relative;
  }

  &:before {
    content: '';
    position: relative; /*[4]*/
    display: inline-block; /*[4]*/
    background-color: $neutral-80; /*[4]*/
    width: .8em; /*[4]*/
    height: .8em; /*[4]*/
    margin-right: $unit-xs; /*[4]*/
    transition: background-color .2s ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    // left: 0;
    bottom: 0;
    transition: width .2s ease;
    transform: translateX(-50%);
    left: 50%;
  }

  &:hover {
    color: $neutral-100;
    &:before {
      background-color: $neutral-100; /*[4]*/
    }
    &:after {
      width: 100%;
      background-color: $neutral-100;
    }
  }

  &.nuxt-link-active {
    color: $blue;

    &:before {
      background-color: $blue; /*[4]*/
    }

    &:after {
      width: 100%;
      background-color: $blue;
    }
  }
}
</style>
