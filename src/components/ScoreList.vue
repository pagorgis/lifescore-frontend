<template>
  <div id="score-list">
      <div v-bind:key="livescore.fixtureId" v-for="livescore in livescores">
        <ScoreListItem v-bind:livescore="livescore" />
      </div>
  </div>
</template>

<script>
import ScoreListItem from './ScoreListItem.vue';

export default {
  name: 'ScoreList',
  components: {
    ScoreListItem
  },
  props: ["livescores"]
}
</script>

<style scoped>

</style>
