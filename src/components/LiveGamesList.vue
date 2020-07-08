<template>
  <div id="score-list" v-if="livegames.length">
    <h2><u>LIVE games</u></h2>
    <div v-bind:key="livegame.fixtureId" v-for="livegame in livegames">
        <LiveGamesListItem v-bind:livegame="livegame" v-if="league_id == livegame.leagueId" />
    </div>
  </div>
  <h3 v-else-if="fetchingLiveGames">Loading live games...</h3>
  <h2 v-else class="no-live-games">There are no live games currently...</h2>
</template>

<script>
import LiveGamesListItem from './LiveGamesListItem.vue';

export default {
  name: 'LiveGamesList',
  components: {
    LiveGamesListItem
  },
  props: ["livegames", "fetchingLiveGames"],
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

  .no-live-games {
    color: #FF4848;
    text-decoration: underline;
  }

</style>
