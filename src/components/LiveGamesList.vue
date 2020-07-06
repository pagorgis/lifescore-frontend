<template>
  <div id="score-list" v-if="livegames.length">
    <h2><u>LIVE games</u></h2>
    <div v-bind:key="livegame.fixtureId" v-for="livegame in livegames">
        <LiveGamesListItem v-bind:livegame="livegame" v-if="league_id == livegame.leagueId" />
    </div>
  </div>
  <h3 v-else>Loading live games...</h3>
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
  },
  watch: {
    $route(to, from) {
      if(to.params.id !== from.params.id) {
        this.league_id = this.$route.params.id;
      }
    }
  }
}
</script>

<style scoped>

</style>
