<template>
  <div class="mlc-project-overview">
    
    <!-- WAYPOINT -->
    <v-waypoint class="__waypoint" @waypoint="this.waypointHeaderTop"></v-waypoint>
    
    <div class="__header-mock-bar" :class="cssHeaderMockBar">
      <div class="u-wrapper">
        <div class="__header __header--data-dashboard" ref="jsHeader">
          <div class="__header__cell">
            <p class="__header__index">{{ index+1 }}</p>
          </div>
          <div class="__header__cell">
            <h3 class="__header__title">{{ project.name }}</h3>
          </div>
          <div class="__header__cell">
            <p class="__header__label">Role</p>
            <h4 class="__header__role">{{ project.role }}</h4>
          </div>
          <div class="__header__cell">
            <p class="__header__label">Date</p>
            <h4 class="__header__date">{{ project.date }}</h4>
          </div>
          <div class="__header__cell  __header__button-wrapper">
            <nuxt-link to="/" class="__header__button">
              <icon class="__header__button__icon" name="plus"></icon>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- RELATIVE PLACEHOLDER  -->
    <div class="__header-relative-placeholder" ref="jsHeaderRelativePlaceholder"></div>

    <img class="__image" :src="project.imgSrc"/>

    <v-waypoint class="__waypoint  __waypoint-bottom" @waypoint="this.waypointHeaderBottom"></v-waypoint>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      headerIsFixed: false
    }
  },
  computed: {
    cssHeaderMockBar: function () {
      return {
        's-is-fixed': this.headerIsFixed
      }
    }
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
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
$header-padding-y: $unit-lg;
$header-text-height: $font-size-xl;
$header-height: $header-padding-y*2 + $header-text-height;

/* Base component class
   ====================================================================== */
.mlc-project-overview {
  position: relative;
  z-index: 18;
  margin-bottom: $unit-xl;
  padding-top: $unit-xl;
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
    right: 0;

    .__header {
      position: absolute;
      right: 0;
      width: 100%;
      // @include inner-border(bottom, 1px, low);
      
      // display: inline-block;
      
      @include mq($from: desktop) {
        width: 66.6666%;
        // padding-right: $unit-xxl;
      }
    }
  }
}

.__header {
  transition: transform .2s ease;
  z-index: 15;
  padding-top: $unit-lg;
  text-align: left;
  display: flex;
  // margin-bottom: $unit-lg;
  background: white;
}

.__waypoint {
  margin-top: -$navbar-height;
  margin-bottom: $navbar-height;
}

.__waypoint-bottom {
  margin-top: -($navbar-height + $header-height);
  margin-bottom: ($navbar-height + $header-height);
} 

.__header--data-dashboard {
  box-shadow: inset 0 -1px 0 0 $green;

  .__header__index {
    color: $green;
  }
  .__header__label {
    color: $green;
  }
}

.__header__cell {
  margin-right: $unit-lg;

  &:last-of-type {
    margin-right: 0;
  }
}

.__header__index {
  @include vr($font-body, $font-size-xxxl);
}

.__header__title {
  @include vr($font-body, $font-size-md);
  font-weight: 600;
  color: $neutral-100;
  max-width: 220px;
}

.__header__button-wrapper {
  text-align: right;
  position: relative;
  flex-grow: 1;
}
.__header__button {
  position: relative;
  text-align: center;
  display: inline-block;
  background-color: $green;
  border-radius: 100%;
  width: $unit-lg;
  height: $unit-lg;
  color: white;
}

.__header__button__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.__header__label {
  @include vr($font-body, $font-size-sm);
  @include mq($from: mobile, $until: desktop) {
    display: none;
  }
}


.__header__role,
.__header__date {
  @include vr($font-body, $font-size-sm);
  @include mq($from: mobile, $until: desktop) {
    display: none;
  }
}


.__image {
  margin-bottom: $paragraph-trailer;
}
</style>
