<template>
<div class="c__">
  <v-waypoint class="c__logo__glasses-waypoint" @waypoint="waypointLogoGlasses"></v-waypoint>
  <div class="c__logo">
    <!-- <div class="c__glasses-wrapper"> -->
      
      <div ref="jsGlassesPlaceholderFixed" class="c__glasses-placeholder-fixed"></div>
      
      <div ref="jsGlassesPlaceholderRelative" class="c__glasses-placeholder-relative">
        <div ref="jsGlasses" class="c__glasses" :class="cssGlasses">
          <img src="~assets/images/logo-glasses.svg"/>
        </div>
      </div>

    <!-- </div> -->

    <div class="c__logo__name-wrapper">
      <div class="c__logo__name">
        <img src="~assets/images/logo-name.svg"/>
      </div>
    </div>
    
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
    }
  },
  mounted () {
    this.setGlassesPlaceholderHeight()
  },
  methods: {
    setGlassesPlaceholderHeight () {
      var glassesHeight = this.$refs.jsGlasses.clientHeight
      var glassesRelative = this.$refs.jsGlassesPlaceholderRelative
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
          'transition: transform .2s ease, width .2s ease;' +
          'transform: translate(' +
            (glassesRelativeLeft - glassesFixedLeft) + 'px,' +
            (glassesRelativeTop - glassesFixedTop) + 'px' +
          ');'
        )
        setTimeout(() => {
          glasses.removeAttribute('style')
          this.glassesFixed = false
        }, 200)
      } else if (going === 'out') {
        glasses.setAttribute('style',
          'position: fixed;' +
          'top: ' + glassesRelativeTop + 'px; ' +
          'left: ' + glassesRelativeLeft + 'px; ' +
          'width:' + glassesFixedWidth + 'px; ' +
          'transition: transform .2s ease, width .2s ease;' +
          'transform: translate(' +
            -(glassesRelativeLeft - glassesFixedLeft) + 'px,' +
            -(glassesRelativeTop - glassesFixedTop) + 'px' +
          ');'
        )
        setTimeout(() => {
          glasses.removeAttribute('style')
          this.glassesFixed = true
        }, 200)
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
$header-padding: $unit-sm;

// Base class

.c__glasses {

  @at-root .c__glasses-placeholder-fixed,
  &.s-is-fixed {
    position: fixed;
    top: $header-padding;
    left: $header-padding;
    width: $glasses-max-width/4;
  }
}

.c__glasses-placeholder-fixed {
  background: blue;
  height: $unit-md;
}

.c__glasses-placeholder-relative {
  background: orange;
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



.c__ {
  text-align: center;
  padding: $unit-xxl*2 $unit-xl;

  @include mq($from: tablet) {
    padding: $unit-xxl*2;
  }
}


.c__logo__glasses-waypoint {
  position: absolute;
  top: 20px;
  width: 100%;
}

// Logo
.c__logo {
  position: relative;
  text-align: center;
  margin-bottom: $unit-lg;
  margin-left: auto;
  margin-right: auto;
  width: $name-max-width/2;

  @include mq($from: desktop) {
    width: $name-max-width;
    height: $glasses-max-width;
  }

}


.c__logo__glasses-filler {
  // transition: height .2s ease;
}

// .c__logo__glasses-preceder {
//   position: fixed;
//   top: $header-padding;
//   left: $header-padding;
//   width: $glasses-max-width/4;
// }

.c__logo__glasses {
  margin-right: auto;
  margin-left: auto;
  width: $glasses-max-width/2;

  @include mq($from: desktop) {
    width:  $glasses-max-width;
  }

  &.s-is-reached,
  :root.c-logo-glasses-preceder {
    position: fixed;
    top: $header-padding;
    left: $header-padding;
    width: $glasses-max-width/4;
  }
}

.c__logo__glasses {
  transition: transform .5s ease, width .5s ease;
}

.c__logo__name {
  width: $name-max-width/2;

  @include mq($from: desktop) {
    width: $name-max-width;
  }

}


// Tagline
.c__tagline {
  @include vr($font-display, $font-size-lg);
  margin-bottom: $unit-lg;
}

</style>
