<template>
  <div id="score-list">
    <h2>Finished games - round {{ extractRound(lastgames[0]) }}</h2>
    <div v-bind:key="lastgame.fixtureId" v-for="lastgame in lastgames">
        <LastGamesListItem 
          v-bind:lastgame="lastgame" 
          v-if="league_id == lastgame.leagueId && 
            extractRound(lastgames[0]) === extractRound(lastgame) &&
            lastgame.status === 'Match Finished'" />
    </div>
  </div>
</template>

<script>
import LastGamesListItem from './LastGamesListItem.vue';

export default {
  name: 'LastGamesList',
  components: {
    LastGamesListItem
  },
  props: ["lastgames"],
  data() {
    return {
      league_id: this.$route.params.id,
    }
  },
  methods: {
    extractRound(lastGame) {
      const splitRoundText = lastGame.round.split(' - ');
      if (splitRoundText[0] === "Regular Season") {
        return splitRoundText[1] ? parseInt(splitRoundText[1]) : null;
      } else {
        return lastGame.round; // If cups get added to the app
      }
    }
  }
}
</script>

<style scoped>

</style>
