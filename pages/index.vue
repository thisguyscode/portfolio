<template>
  <section class="o-box">
    
    <div class="o-wrapper">
      
      <h2>index</h2>

      <v-waypoint @waypoint="waypointHandler"></v-waypoint>
      
      <h1>{{text}}</h1>


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
    waypointHandler (direction, going) {
      this.text = 'the Waypoint has been triggered with: direction: { x: ' + direction.x + ', y: ' + direction.y + ' } and going: ' + going
    }
  }
}
</script>

<style>
</style>
