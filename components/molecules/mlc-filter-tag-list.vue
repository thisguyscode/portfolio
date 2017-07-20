<template>

  <ul :class="classObject">
    <li v-for="filterTag in filterTags"
        class="o-list-inline__item">

      <a-filter-tag
         :size="size"
         v-bind:key="filterTag.id"
         :onClick="filterTag.onClick"
         :type="filterTag.type"
         :state="filterTag.state"
      >
        {{ filterTag.text }}
      </a-filter-tag>

    </li>
  </ul>

</template>


<script>

  import filterTag from '../atoms/filter-tag';

  export default {
    computed: {
      classObject() {
        return {
          // Object
          'o-list-inline': true,
          'o-list-bare': true,
          'o-list-inline--small': true,
        };
      },
    },
    components: {
      'a-filter-tag': filterTag,
    },
    methods: {
      consoleClick() {
        // eslint-disable-next-line
        console.log('console-clicked');
      },
    },
    props: {
      filterTags: {
        type: Array,
        required: true,
      },
      group: {
        type: String,
        required: false,
        default: null,
      },
    },
  };

</script>
