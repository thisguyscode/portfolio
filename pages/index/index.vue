<template>
  <section class="o-box">

    <v-waypoint @waypoint-in="inHandler" @waypoint-out="outHandler"></v-waypoint>
    <h1>{{ text }}</h1>

    <div>
      <blockquote class="o-blockquote o-blockquote--large">
        <p class="o-blockquote__text  u-text--bold">
          I make digital interfaces for humans.
        </p>
        <p class="o-blockquote__text  u-text--low-contrast">
          It&#39;s mostly putting text in boxes.
        </p>
      </blockquote>
    </div>
    
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      text: 'not-trigger-yet'
    }
  },
  methods: {
    inHandler () {
      this.text = 'going in'
    },
    outHandler () {
      this.text = 'going out'
    }
  }
}
</script>

<style>
  .container {
    padding: 100px;
    text-align: center;
  }
</style>
