<template>
<div class="ogm-site-header">
  
  <!-- glasses placeholder (fixed position) -->
  <div class="__navbar-placeholder">
    <div class="u-wrapper">
      <div ref="jsGlassesPlaceholderFixed" class="__glasses-placeholder-fixed"></div>
    </div>
  </div>

  <!-- glasses (initial position) -->
  <v-waypoint class="__glasses-waypoint" @waypoint="waypointGlasses"></v-waypoint>
  <div class="__navbar-glasses" :class="cssGlassesBar">
    <div class="u-wrapper">
      <div ref="jsGlasses" class="__glasses" :class="cssGlasses">
        
        <nuxt-link to="/" v-scroll-to="'#page-top'">
          <span class="u-link-bloater"></span>
        </nuxt-link>

        <img src="~assets/images/logo-glasses.svg"/>
      </div>
    </div>
  </div>

  <!-- glasses placeholder (relative position)  -->
  <div ref="jsGlassesPlaceholderRelative" class="__glasses-placeholder-relative"></div>
  
  <!-- name -->
  <div class="__name">
    <img src="~assets/images/logo-name.svg"/>
  </div>
  
  <!-- tagline -->
  <h2 class="__tagline  u-text--low-contrast">digital interface designer</h2>
  
  <!-- links -->
  <v-waypoint class="__links-waypoint" @waypoint="waypointLinks"></v-waypoint>
  <div class="__navbar" ref="jsNavbar" :class="cssNavbar">
    <div class="u-wrapper">
      <ul class="__nav-list">
        <li class="__nav-item">
          <nuxt-link class="__nav-link" to="/projects" v-scroll-to="'#content-top'">Projects</nuxt-link>
        </li>
        <li class="__nav-item">
          <nuxt-link class="__nav-link" to="/profile" v-scroll-to="'#content-top'">Profile</nuxt-link>
        </li>
        <li class="__nav-item">
          <nuxt-link class="__nav-link" to="/contact" v-scroll-to="'#content-top'">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </div>

  <!-- links placeholder (relative position)  -->
  <div ref="jsLinksPlaceholderRelative" class="__links-placeholder-relative"></div>

</div>

</template>

<script>
import mlcSiteNav from '~components/molecules/mlc-site-nav'
export default {
  scrollToTop: false,
  components: {
    mlcSiteNav
  },
  data: () => {
    return {
      glassesFixed: false,
      linksFixed: false
    }
  },
  computed: {
    cssGlasses: function () {
      return {
        's-is-fixed': this.glassesFixed
      }
    },
    cssGlassesBar: function () {
      return {
        's-is-fixed': this.glassesFixed
      }
    },
    cssLinks: function () {
      return {
        's-is-fixed': this.linksFixed
      }
    },
    cssNavbar: function () {
      return {
        's-is-fixed': this.linksFixed
      }
    }
  },
  mounted () {
    this.setGlasses()
  },
  methods: {
    setGlasses () {
      var glasses = this.$refs.jsGlasses
      glasses.removeAttribute('style')
    },
    waypointLinks (direction, going) {
      var navBar = this.$refs.jsNavbar
      var linksPlaceholderRelative = this.$refs.jsLinksPlaceholderRelative
      var linksHeight = navBar.clientHeight
      if (going === 'in') {
        this.linksFixed = false
        linksPlaceholderRelative.removeAttribute('style')
      } else if (going === 'out') {
        linksPlaceholderRelative.setAttribute('style',
          'height: ' + linksHeight + 'px; '
        )
        this.linksFixed = true
      }
    },
    waypointGlasses (direction, going) {
      var glasses = this.$refs.jsGlasses
      var glassesRelative = this.$refs.jsGlassesPlaceholderRelative
      var glassesFixed = this.$refs.jsGlassesPlaceholderFixed

      var glassesRelativeOffsets = glassesRelative.getBoundingClientRect()
      var glassesRelativeWidth = glassesRelativeOffsets.width
      var glassesRelativeTop = glassesRelativeOffsets.top
      var glassesRelativeLeft = glassesRelativeOffsets.left

      var glassesFixedOffsets = glassesFixed.getBoundingClientRect()
      var glassesFixedWidth = glassesFixedOffsets.width
      var glassesFixedTop = glassesFixedOffsets.top
      var glassesFixedLeft = glassesFixedOffsets.left

      if (going === 'in') {
        glasses.setAttribute('style',
          'position: fixed;' +
          'top: ' + glassesFixedTop + 'px; ' +
          'left: ' + glassesFixedLeft + 'px; ' +
          'width:' + glassesRelativeWidth + 'px; ' +
          'transition: transform .3s ease-in-out, width .3s ease-in-out;' +
          'transform: translate(' +
            (glassesRelativeLeft - glassesFixedLeft) + 'px,' +
            (glassesRelativeTop - glassesFixedTop) + 'px' +
          ');'
        )
        setTimeout(() => {
          glasses.removeAttribute('style')
          this.glassesFixed = false
        }, 300)
      } else if (going === 'out') {
        glasses.setAttribute('style',
          'position: fixed;' +
          'top: ' + glassesRelativeTop + 'px; ' +
          'left: ' + glassesRelativeLeft + 'px; ' +
          'width:' + glassesFixedWidth + 'px; ' +
          'margin: 0;' +
          'transition: transform .3s ease-in-out, width .3s ease-in-out;' +
          'transform: translate(' +
            -(glassesRelativeLeft - glassesFixedLeft) + 'px,' +
            -(glassesRelativeTop - glassesFixedTop) + 'px' +
          ');'
        )
        setTimeout(() => {
          glasses.removeAttribute('style')
          this.glassesFixed = true
        }, 300)
      } else {
        glasses.removeAttribute('style')
      }
    },
    waypointNavList (direction, going) {
      this.text = 'the Waypoint has been triggered with: direction: { x: ' + direction.x + ', y: ' + direction.y + ' } and going: ' + going
    }
  }
}
</script>


<style lang="scss" scoped>

/* NOTE
** There are various styles being added inline to the glasses as they are
** scrolled past. These styles are removed once the element reaches the end
** of the transition (in both directions).
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */
$glasses-max-width: 264px;
$name-max-width: 292px;


/* Base component class
   ====================================================================== */
.ogm-site-header {
  text-align: center;
  padding: $unit-xxl $unit-md;

  @include mq($from: tablet) {
    padding: $unit-xxl;
  }
  
  @include mq($from: tablet) {
    padding: $unit-xxl*2;
  }
}

/* Navbar
   ====================================================================== */

/**
 * 1. Simoulanteously sets the placeholder bar and fixed-state bar as fixed
 * 2. Only set the padding once header becomes fixed (prevents page jumping)
 * 3. Position the bar at the top
 */

.__navbar,
.__navbar-glasses {
  @at-root .__navbar-placeholder,
  &.s-is-fixed {
    position: fixed; /*[1]*/
    padding: $navbar-padding; /*[2]*/
    text-align: right;
    @include mq($from: tablet) {
      text-align: center;
    }
  }
}
.__navbar-glasses {
  &.s-is-fixed {
    padding-bottom: 0;
  }
}

.__navbar,
.__navbar-glasses,
.__navbar-placeholder {
  line-height: $navbar-inner-height;
  top: 0; /*[3]*/
  left: 0; /*[3]*/
  width: 100%; /*[3]*/
}

.__navbar-placeholder {
  z-index: -1;
}

.__navbar {
  width: 100%;
  transition: box-shadow .5s ease, background-color .5s ease;
  &.s-is-fixed {
    @include inner-border(bottom, 1px);
    background: white;
    z-index: 10;
  }
}
.__navbar-glasses {
  z-index: 20;  
}


/* Glasses
   ====================================================================== */

/**
 * 1. Take the glasses out of the flow (see __glasses-placeholder-relative)
      below for for positioning
 * 2. Simultaneously set the final fixed position/size of the glasses and 
 *    the associated placeholder
 * 3. Remove the centering margins from [4]
 * 4. Center on page
 * 5. Set the width (must be divided by 2 or 4 for pixel-perfect edges)
 * 6. Harcode the placeholder height to reduce amount of js required
 * 7. Set the waypoint (scroll trigger) 1px from the top of the viewport
 */

.__glasses {
  position: absolute; /*[1]*/  
  
  @at-root .__glasses-placeholder-fixed,
  &.s-is-fixed {
    width: $glasses-max-width/4; /*[2]*/
    margin: 0; /*[3]*/
  }
}

.__glasses {
  &.s-is-fixed {
    z-index: 20;
  }
}

.__glasses-placeholder-fixed {
  z-index: -1;
}

.__glasses,
.__glasses-placeholder-relative {
  margin-right: auto; /*[4]*/
  margin-left: auto; /*[4]*/
  left: 0; /*[4]*/
  right: 0; /*[4]*/
  width: $glasses-max-width/2; /*[5]*/

  @include mq($from: desktop) {
    width:  $glasses-max-width; /*[5]*/
  }
}

.__glasses-placeholder-relative {
  height: $unit-xxl;

  @include mq($from: desktop) {
    height: $unit-xxl*2;
  }
}

.__glasses-waypoint {
  position: absolute; /*[7]*/
  top: 1px; /*[7]*/
}


/* Name
   ====================================================================== */
.__name {
  width: $name-max-width/2;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: $unit-md;

  @include mq($from: desktop) {
    margin-bottom: $unit-lg;
    width: $name-max-width;
  }

}


/* Tagline
   ====================================================================== */
.__tagline {
  @include vr($font-display, $font-size-lg);
  margin-bottom: $unit-lg;
}


/* Nav Links
   ====================================================================== */
.__links-waypoint {
  margin-bottom: $navbar-padding;
}

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

  &.s-is-fixed {
    position: fixed;
    top: $navbar-padding;
    right: $navbar-padding;
    // text-align: right;
  }
}


.__nav-item {
  display: inline-block; /*[2]*/
  margin-right: $unit-md; /*[2]*/
  
  @include mq($from: desktop) {
    margin-right: $unit-lg; /*[2]*/
  }

  &:last-of-type {
    margin-right: 0; /*[2]*/
  }
}


.__nav-link {

  font-size: $font-size-sm;

  @include mq($from: desktop) {
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
}
</style>
