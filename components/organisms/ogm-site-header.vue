<template>
<div class="c__">
  <v-waypoint class="c__logo__glasses-waypoint" @waypoint="waypointLogoGlasses"></v-waypoint>
  <div class="c__logo">
    <div class="c__logo__glasses-wrapper">
      <div ref="jsLogoGlassesPreceder" class="c__logo__glasses-preceder" :class="classLogoGlassesPreceder"></div>
      <div ref="jsLogoGlassesFiller" class="c__logo__glasses-filler"></div>
      <div ref="jsLogoGlasses" class="c__logo__glasses" :class="classLogoGlasses">
        <img src="~assets/images/logo-glasses.svg"/>
      </div>
    </div>

    <div class="c__logo__name-wrapper">
      <div class="c__logo__name">
        <img src="~assets/images/logo-name.svg"/>
      </div>
    </div>
    
  </div>
  
  <h2 class="c__tagline  u-text--low-contrast">digital interface designer</h2>

    <v-waypoint @waypoint="waypointNavList"></v-waypoint>
    <div class="c__nav-list">
      <ul class="c__nav-list">
        <li class="c__nav-item">
          <nuxt-link class="c__nav-link" to="/">
            Projects
          </nuxt-link>
        </li>
        <li class="c__nav-item">
          <nuxt-link class="c__nav-link" to="/profile">
            Profile
          </nuxt-link>
        </li>
        <li class="c__nav-item">
          <nuxt-link class="c__nav-link" to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </div>

</div>
</template>

<script>
export default {
  data: () => {
    return {
      logoGlassesReached: false,
      logoGlassesMoved: false,
      navLinksReached: false
    }
  },
  computed: {
    classLogoGlasses: function () {
      return {
        's-is-reached': this.logoGlassesMoved
      }
    },
    classLogoGlassesPreceder: function () {
      return {
        's-is-reached': this.logoGlassesReached
      }
    },
    classNavLinks: function () {
      return {
        's-is-reached': this.navLinksReached
      }
    }
  },
  methods: {
    waypointLogoGlasses (direction, going) {
      var glasses = this.$refs.jsLogoGlasses
      var filler = this.$refs.jsLogoGlassesFiller
      var preceder = this.$refs.jsLogoGlassesPreceder

      var glassesHeight = glasses.clientHeight
      var glassesOffsets = glasses.getBoundingClientRect()
      var glassesTop = glassesOffsets.top
      var glassesLeft = glassesOffsets.left

      var precederWidth = preceder.clientWidth
      var precederOffsets = preceder.getBoundingClientRect()
      var precederTop = precederOffsets.top
      var precederLeft = precederOffsets.left

      if (going === 'out') {
        this.logoGlassesReached = true

        glasses.setAttribute('style',
          'position: fixed;' +
          'top: ' + glassesTop + 'px; ' +
          'left: ' + glassesLeft + 'px; ' +
          'width:' + precederWidth + 'px; ' +
          'transform: translate(' + -(glassesLeft - precederLeft) + 'px,' + -(glassesTop - precederTop) + 'px' + ');'
        )
        filler.setAttribute('style', 'height:' + glassesHeight + 'px')
        // setTimeout(() => {
        //   this.logoGlassesMoved = true
        //   glasses.removeAttribute('style')
        // }, 550)
      } else if (going === 'in') {
        glasses.removeAttribute('style')
        filler.removeAttribute('style')
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
.c__ {
text-align: center;
padding: $unit-xxl $unit-xl;

@include mq($from: tablet) {
  padding: $unit-xxl;
}

  &.s-is-fixed {
    position: fixed;
    
  }

  &.s-is-slid-up {
    transform: translateY(-60px);
  }
  
}


.c__logo__glasses-waypoint {
  margin-bottom: $unit-xl;
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

.c__logo__glasses-wrapper {
  margin-bottom: $unit-md;
  @include mq($from: desktop) {
    margin-bottom: $unit-lg;
  }
}

.c__logo__glasses-filler {
  // transition: height .2s ease;
}

.c__logo__glasses-preceder,
.c__logo__glasses {
  margin-right: auto;
  margin-left: auto;
  width: $glasses-max-width/2;

  @include mq($from: desktop) {
    width:  $glasses-max-width;
  }

  &.s-is-reached {
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


// Nav links
.c__nav-list {
  @include vr($font-display, $font-size-sm);
}

  .c__nav-item {
    margin-right: $unit-sm;
    
    @include mq($from: desktop) {
      margin-right: $unit-lg;
    }
  }

  .c__nav-link {
    
    &:before {
      content: '';
      position: relative;
      display: inline-block;
      background-color: red;
      width: .8em;
      height: .8em;
      margin-right: $unit-xs;
    }

  }
</style>
