<template>
  <section class="mlc-project-group-details">
    
    
    <!-- WAYPOINT -->
    <v-waypoint class="__waypoint" @waypoint="this.waypointHeaderTop"></v-waypoint>
    <!-- HEADER  -->
    <div class="__header-mock-bar" :class="cssHeaderMockBar">
      <div class="u-wrapper">
        <div class="__header" ref="jsHeader">
          <h3 class="__name">{{ name }}</h3>
          
          <div class="__logo-wrapper  __logo-wrapper--landscape">
            <img class="__logo" :src="logoSrc">
          </div>
          
          <p class="__link-wrapper">
            <a class="__link" :href="link" target="_blank" rel="noopener">
              {{ link }}
            </a>
          </p>
          <div class="__divider"></div> 
        </div>
      </div>
    </div><!--END __header -->

    <!-- HEADER PLACEHOLDER  -->
    <div class="__header-relative-placeholder" ref="jsHeaderRelativePlaceholder"></div>

    <p class="__description-main">
      {{ descriptionMain }}
    </p>
    
    <span @click="toggleDescription" class="__description-trigger">
      <p v-if="!showDescription">Show more</p>
      <p v-if="showDescription">Hide</p>
    </span>

    <p class="__description-sub" :class="cssDescriptionSub">
      {{ descriptionSub }}
    </p>
    
    <v-waypoint position="bottom" class="__waypoint" @waypoint="this.waypointHeaderBottom"></v-waypoint>

  </section>
</template>

<script>
export default {
  data: () => {
    return {
      showDescription: false,
      headerIsFixed: false
    }
  },
  computed: {
    cssDescriptionSub: function () {
      return {
        's-is-hidden': !this.showDescription
      }
    },
    cssHeaderMockBar: function () {
      return {
        's-is-fixed': this.headerIsFixed
      }
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    logoSrc: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    descriptionMain: {
      type: String,
      required: true
    },
    descriptionSub: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleDescription () {
      if (this.showDescription === false) {
        this.showDescription = true
      } else {
        this.showDescription = false
      }
    },
    waypointHeaderTop (direction, going) {
      var header = this.$refs.jsHeader
      var relativePlaceholder = this.$refs.jsHeaderRelativePlaceholder
      var headerHeight = header.clientHeight

      if (going === 'in' && direction.y === 'up') {
        this.headerIsFixed = false
        relativePlaceholder.removeAttribute('style')
      } else if (going === 'out' && direction.y === 'down') {
        relativePlaceholder.setAttribute('style',
          'height: ' + headerHeight + 'px; '
        )
        this.headerIsFixed = true
      }
    },
    waypointHeaderBottom (direction, going) {
      var header = this.$refs.jsHeader
      // var relativePlaceholder = this.$refs.jsHeaderRelativePlaceholder
      var headerHeight = header.clientHeight

      if (going === 'out' && direction.y === 'down') {
        header.setAttribute('style',
          'transition: transform .2s ease; ' +
          'transform: translateY(' + -headerHeight + 'px);'
        )
      } else if (going === 'in' && direction.y === 'up') {
        header.removeAttribute('style')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

/* NOTES
** None
*/

/* Import project settings
   ====================================================================== */
@import "~assets/styles/imports/imports";


/* Local variables
   ====================================================================== */


/* Base component class
   ====================================================================== */
.mlc-project-group-details {
  height: 100%;
  text-align: left;
  
  @include mq($from: mobile, $until: desktop) {
    // @include inner-border(bottom, 1px, low);
  }
}

/* --
   ====================================================================== */

.__header-mock-bar {
  &.s-is-fixed {
    width: 100%;
    z-index: 10;
    padding-left: $unit-md;
    padding-right: $unit-md;
    position: fixed;
    top: $navbar-height;
    left: 0;

    .__header {
      
      // @include inner-border(bottom, 1px, low);
      background: white;
      // display: inline-block;
      
      @include mq($from: desktop) {
        width: 33.3333%;
        padding-right: $unit-xxl;
      }
    }
  }
}

.__header {
  transition: transform .2s ease;
  padding-top: $unit-md;

  @include mq($from: desktop) {
    // width: 100%;
  }
}

.__waypoint {
  margin-top: -$navbar-height;
  margin-bottom: $navbar-height;
}


.__name {
  @include vr($font-body, $font-size-sm);
  margin-bottom: $heading-trailer;
}

.__logo-wrapper {
  position: relative;
  height: $unit-lg;
  width: 100%;
  margin-bottom: $paragraph-trailer;

  @include mq($from: desktop) {
    height: $unit-lg;
  }
}

.__logo-wrapper--portrait {
  
}

.__logo-wrapper--square {
  
}

.__logo {
  height: 100%;
  display: block;
  position: absolute;
  object-fit: inside;
  top: 0;
  left: 0;
  bottom: 0;
}


.__link-wrapper {
  @include vr($font-body, $font-size-xs);
  margin-bottom: $heading-trailer;
}

.__link {
  display: inline-block;
}

.__divider {
  height: 1px;
  background-color: $neutral-10;
  width: 100%;
  margin-top: -1px;
}

.__description-main {
  font-weight: 600;
  padding-top: $unit-md;
}

.__description-trigger {
  display: block;
  @include mq($from: desktop) {
    display: none;
  }
}

.__description-sub {
  @include vr($font-body, $font-size-sm);
  display: block;
  margin-bottom: $paragraph-trailer;

  @include mq($from: mobile, $until: desktop) {
    &.s-is-hidden {
      display: none;
    }
  }
}


</style>
