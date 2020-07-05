<template>
  <div id="score-list">
    <h2>Ongoing games</h2>
    <div v-bind:key="livegame.fixtureId" v-for="livegame in livegames">
        <LiveGamesListItem v-bind:livegame="livegame" v-if="league_id == livegame.leagueId" />
    </div>
  </div>
</template>

<script>
import LiveGamesListItem from './LiveGamesListItem.vue';

export default {
  name: 'LiveGamesList',
  components: {
    LiveGamesListItem
  },
  props: ["livegames"],
  data() {
    return {
      league_id: this.$route.params.id,
    }
  }
}
</script>

<style scoped>

</style>
