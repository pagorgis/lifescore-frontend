<template>
  <div id="score-list">
    <h2>Upcoming fixtures - round {{ extractRound(nextgames[0]) }}</h2>
    <div v-bind:key="nextgame.fixtureId" v-for="nextgame in nextgames">
        <NextGamesListItem v-bind:nextgame="nextgame" v-if="league_id == nextgame.leagueId && extractRound(nextgames[0]) === extractRound(nextgame)" />
    </div>
  </div>
</template>

<script>
import NextGamesListItem from './NextGamesListItem.vue';

export default {
  name: 'NextGamesList',
  components: {
    NextGamesListItem
  },
  props: ["nextgames"],
  data() {
    return {
      league_id: this.$route.params.id,
    }
  },
  methods: {
    extractRound(nextGame) {
      const splitRoundText = nextGame.round.split(' - ');
      if (splitRoundText[0] === "Regular Season") {
        return splitRoundText[1] ? parseInt(splitRoundText[1]) : null;
      } else {
        return nextGame.round; // If cups get added to the app
      }
    }
  }
}
</script>

<style scoped>

</style>
