<template>
<div class="ogm-site-header">
  
  <div class="__bar-placeholder">
    <div class="u-wrapper">
      <div ref="jsGlassesPlaceholderFixed" class="__glasses-placeholder-fixed"></div>
    </div>
  </div>

  <v-waypoint class="__glasses-waypoint" @waypoint="waypointLogoGlasses"></v-waypoint>
  <div class="__bar" :class="cssBar">
    <div class="u-wrapper">
      <div ref="jsGlasses" class="__glasses" :class="cssGlasses">
        <a href="#" v-scroll-to="'#page-top'" class=""><span class="u-link-bloater"></span></a>
        <img src="~assets/images/logo-glasses.svg"/>
      </div>
    </div>
  </div>

  <div ref="jsGlassesPlaceholderRelative" class="__glasses-placeholder-relative"></div>
  
  <div class="__name">
    <img src="~assets/images/logo-name.svg"/>
  </div>
  
  <h2 class="__tagline  u-text--low-contrast">digital interface designer</h2>

  <v-waypoint @waypoint="waypointNavList"></v-waypoint>
  <mlc-site-nav></mlc-site-nav>

</div>

</template>

<script>
import mlcSiteNav from '~components/molecules/mlc-site-nav'
export default {
  components: {
    mlcSiteNav
  },
  data: () => {
    return {
      glassesFixed: false
    }
  },
  computed: {
    cssGlasses: function () {
      return {
        's-is-fixed': this.glassesFixed
      }
    },
    cssBar: function () {
      return {
        's-is-fixed': this.glassesFixed
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
    waypointLogoGlasses (direction, going) {
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
$header-padding: $unit-md;


/* Base component class
   ====================================================================== */
.ogm-site-header {
  text-align: center;
  padding: $unit-xxl $unit-md;

  @include mq($from: tablet) {
    padding: $unit-xxl;
  }
}

/* Navbar
   ====================================================================== */

/**
 * 1. Simoulanteously sets the placeholder bar and fixed-state bar as fixed
 * 2. Only set the padding once header becomes fixed (prevents page jumping)
 * 3. Position the bar at the top
 */

.__bar {
  @at-root .__bar-placeholder,
  &.s-is-fixed {
    position: fixed; /*[1]*/
    padding: $header-padding; /*[2]*/
  }
}

.__bar,
.__bar-placeholder {
  width: 100%; /*[3]*/
  top: 0; /*[3]*/
  left: 0; /*[3]*/
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

</style>
