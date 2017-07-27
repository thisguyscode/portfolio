<template>
  <div class="c__">
    <ul class="c__nav-list">
      <li class="c__nav-item">
        <nuxt-link class="c__nav-link" to="/" v-scroll-to="'#content-top'">Projects</nuxt-link>
      </li>
      <li class="c__nav-item">
        <nuxt-link class="c__nav-link" to="/profile" v-scroll-to="'#content-top'">Profile</nuxt-link>
      </li>
      <li class="c__nav-item">
        <nuxt-link class="c__nav-link" to="/contact">Contact</nuxt-link>
      </li>
      <li class="c__nav-item">
         <a href="#" v-scroll-to="'#test'">Scroll to #test</a> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~assets/styles/imports/imports';

.c__ {
  @include vr($font-body, $font-size-sm);
}


.c__nav-list {
  
}


.c__nav-item {
  display: inline-block;
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
