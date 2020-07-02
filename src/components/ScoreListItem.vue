<template>
  <div id="score-item">
      <p>{{livescore.fixtureId}}</p>
  </div>
</template>

<script>

export default {
  name: 'ScoreListItem',
  props: ["livescore"]
}
</script>

<style scoped>

</style>
