<template>
  <ul class="o-layout">
    <li class="o-layout__item  u-1/2@desktop">
      <a-color-block color="neutral-100"></a-color-block>
    </li>
    <li class="o-layout__item  u-1/2@desktop">
      <a-color-block color="neutral-00"></a-color-block>
    </li>
    <li class="o-layout__item  u-1/3@desktop">
      <a-color-block color="red"></a-color-block>
    </li>
    <li class="o-layout__item  u-1/3@desktop">
      <a-color-block color="green"></a-color-block>
    </li>
    <li class="o-layout__item  u-1/3@desktop">
      <a-color-block color="blue"></a-color-block>
    </li>
    <li class="o-layout__item  u-1/6@desktop">
      <a-color-block color="pink"></a-color-block>
    </li>
    <li class="o-layout__item  u-1/6@desktop">
      <a-color-block color="purple"></a-color-block>
    </li>
    <li class="o-layout__item  u-1/6@desktop">
      <a-color-block color="blue-green"></a-color-block>
    </li>
    <li class="o-layout__item  u-1/6@desktop">
      <a-color-block color="yellow-green"></a-color-block>
    </li>
    <li class="o-layout__item  u-1/6@desktop">
      <a-color-block color="yellow"></a-color-block>
    </li>
    <li class="o-layout__item  u-1/6@desktop">
      <a-color-block color="orange"></a-color-block>
    </li>
  </ul>
</template>

<script>

  import colorBlock from '../atoms/color-block';

  export default {
    components: {
      'a-color-block': colorBlock,
    },
  };

</script>
