<template>
  <blockquote class="c__ c__--large">
    <div class="c__inner">
      <p class="c__text  u-text--bold">
        I make digital interfaces for humans.
      </p>
      <p class="c__text  u-text--low-contrast">
        It&#39;s mostly putting text in boxes.
      </p>
    </div>
  </blockquote>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>

@import "~assets/styles/imports/imports";
$quote-width: 34px;
$quote-height: 20px;

.c__ {
  @include inuit-clearfix;
  text-align: center;
  position: relative;
  display: block;

  @include mq($from: tablet) {
  }

}

.c__text {
  @include vr($font-body, $font-size-lg);  
  margin-bottom: $heading-trailer;

  &:last-child {
    margin-bottom: none;
  }
}

.c__inner {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: $unit-lg $unit-xl;
  display: inline-block;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: $quote-width;
    height: $quote-height;
    background-size: $quote-width $quote-height;
  }
  
  &:before {
    background-image: url('~assets/images/quote-double-start.svg');
    top: -$quote-height;
    left: 0;
  }

  &:after {
    background-image: url('~assets/images/quote-double-end.svg');
    bottom: 0;
    right: 0;
  }
}

.c__--large {
  
  @include mq($from: desktop) {
    
    > .c__text {
      @include vr($font-body, $font-size-xl);
      margin-bottom: $heading-trailer;
    }

  }
}

</style>
