<template>
  <div class="o-search-bar">
    <span class="o-search-bar__icon-wrapper">
      <icon class="o-search-bar__icon" name="search"></icon>
    </span>
    <label class="o-search-bar__label" for="pName">
      {{ pLabel }}
    </label>
    <input class="o-search-bar__field" type="search"/>
    <input class="o-search-bar__submit" type="submit"/>
  </div>
</template>

<script>
export default {
  props: {
    pLabel: {
      type: String,
      required: true,
      default: 'Search'
    },
    pName: {
      type: String,
      required: true
    },
    pPlaceholder: {
      type: String,
      required: false
    }
  }
}
</script>

