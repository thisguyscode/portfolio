<template>
  <div class="c-site-nav  o-box o-box--small">
    <nav>
      <ul class="o-flexgrid o-list-inline  u-margin-bottom-none  u-padding-bottom-none  u-top-0" style="align-items: center;">
        <li class="o-flexgrid__item"><icon name="bars"></icon></li>
        <li style="font-family: 'Patua One', serif;" class="o-flexgrid__item o-list-inline__item">tinyworld</li>
        <li class="o-flexgrid  o-flexgrid__item o-flexgrid__item--fill o-list-inline__item">
          <mlc-search-bar :pLabel="siteSearchLabel" pName="site-search-bar"></mlc-search-bar>
        </li>
      </ul>
    </nav>
  </div>
</template>


<style lang="scss">
@import "~assets/styles/components/components.atm-button";
@import "~assets/styles/components/components.ogm-site-nav";
</style>


<script>
import mlcSearchBar from '~components/molecules/mlc-search-bar'

export default {
  data () {
    return {
      test: false
    }
  },
  computed: {
    siteSearchLabel () {
      if (this.test) {
        return 'Search tinyworld'
      }
      return 'Search'
    }
  },
  components: {
    mlcSearchBar
  }
}
</script>
