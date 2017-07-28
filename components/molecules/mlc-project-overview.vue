<template>
  <div class="mlc-project-overview">
    <div class="__header __header--data-dashboard">
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
    <img class="__image" :src="project.imgSrc"/>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
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
.mlc-project-overview {
  margin-bottom: $unit-xl;
  padding-top: $unit-xl;
}

/* --
   ====================================================================== */

.__header {
  text-align: left;
  display: flex;
  margin-bottom: $unit-lg;
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
