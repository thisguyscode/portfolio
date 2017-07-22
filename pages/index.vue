<template>
  <section>
    <v-waypoint @waypoint-in="inHandler" @waypoint-out="outHandler"></v-waypoint>
    <h1>{{ text }}</h1>
    <nuxt-child/>
  </section>
</template>

<style>
</style>

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
