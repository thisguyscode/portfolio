<template>
<div class="c__">
  
  <div class="c__bar-placeholder">
    <div class="u-wrapper">
      <div ref="jsGlassesPlaceholderFixed" class="c__glasses-placeholder-fixed"></div>
    </div>
  </div>

  <v-waypoint class="c__glasses-waypoint" @waypoint="waypointLogoGlasses"></v-waypoint>
  <div class="c__bar" :class="cssBar">
    <div class="u-wrapper">
      <div ref="jsGlasses" class="c__glasses" :class="cssGlasses">
        <a href="#" v-scroll-to="'#page-top'" class=""><span class="u-link-bloater"></span></a>
        <img src="~assets/images/logo-glasses.svg"/>
      </div>
    </div>
  </div>

  <div ref="jsGlassesPlaceholderRelative" class="c__glasses-placeholder-relative"></div>
  
  <div class="c__name">
    <img src="~assets/images/logo-name.svg"/>
  </div>
  
  <h2 class="c__tagline  u-text--low-contrast">digital interface designer</h2>

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
      // glassesReached: false,
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
    console.log('mounted')
  },
  methods: {
    setGlasses () {
      console.log('setGlasses')
      var glasses = this.$refs.jsGlasses
      var glassesHeight = glasses.clientHeight
      var glassesRelative = this.$refs.jsGlassesPlaceholderRelative
      glasses.removeAttribute('style')
      glassesRelative.setAttribute('style', 'height:' + glassesHeight + 'px')
    },
    waypointLogoGlasses (direction, going) {
      var glasses = this.$refs.jsGlasses
      var glassesRelative = this.$refs.jsGlassesPlaceholderRelative
      var glassesFixed = this.$refs.jsGlassesPlaceholderFixed

      // var glassesOffsets = glasses.getBoundingClientRect()
      // var glassesHeight = glassesOffsets.height

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

// Import settings / tools
@import "~assets/styles/imports/imports";

// Local variables
$glasses-max-width: 264px;
$name-max-width: 292px;
$header-padding: $unit-md;


// Base
.c__ {
  text-align: center;
  padding: $unit-xxl $unit-lg;

  @include mq($from: tablet) {
    padding: $unit-xxl;
  }
}

// Navbar
.c__bar,
.c__bar-placeholder {
  width: 100%;
  top: 0;
  left: 0;
}

.c__bar {
  @at-root .c__bar-placeholder,
  &.s-is-fixed {
    position: fixed;
  }
}


// .c__glasses,
// .c__glasses-placeholder-relative {
//   width: $glasses-max-width/2;

//   @include mq($from: desktop) {
//     width: $glasses-max-width;
//   }
// }

// Glasses
.c__glasses {
  position: absolute;
  left: 0;
  right: 0;
  height: auto;
  width: $glasses-max-width/2;
  margin-right: auto;
  margin-left: auto;
  
  @include mq($from: desktop) {
    width:  $glasses-max-width;
  }
  
  @at-root .c__glasses-placeholder-fixed,
  &.s-is-fixed {
    margin: 0;
    top: $header-padding;
    left: $header-padding;
    width: $glasses-max-width/4;
  }
}

.c__glasses-placeholder-fixed {
  position: absolute;
}

.c__glasses-placeholder-relative {
  margin-right: auto;
  margin-left: auto;
  width: $glasses-max-width/2;
  margin-bottom: $unit-md;

  @include mq($from: desktop) {
    width:  $glasses-max-width;
    margin-bottom: $unit-lg;
  }
}

.c__glasses-waypoint {
  position: absolute;
  top: 1px;
  width: 100%;
}


// Name
.c__name {
  width: $name-max-width/2;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: $unit-md;

  @include mq($from: desktop) {
    margin-bottom: $unit-lg;
    width: $name-max-width;
  }

}


// Tagline
.c__tagline {
  @include vr($font-display, $font-size-lg);
  margin-bottom: $unit-lg;
}

</style>
