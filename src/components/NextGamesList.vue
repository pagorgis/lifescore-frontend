<template>
  <div id="score-list" v-if="nextgames.length">
    <h2><u>Upcoming fixtures - round {{ extractRound(nextgames[leagueIndex].nextgames[0]) }}</u></h2>
    <div v-bind:key="nextgame.fixtureId" v-for="nextgame in nextgames[leagueIndex].nextgames">
        <NextGamesListItem v-bind:nextgame="nextgame" 
        v-if="league_id == nextgame.leagueId && 
        extractRound(nextgames[leagueIndex].nextgames[0]) === extractRound(nextgame)" 
    />
    </div>
  </div>
  <h3 v-else>Loading upcoming games...</h3>
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
      leagueIndex: null
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
    },
    findLeagueIndex() {
      if(this.nextgames.length) {
        for (let i = 0; i < this.nextgames.length; i++) {
          if(this.nextgames[i].leagueId == this.league_id) {
            this.leagueIndex = i;
          }
        }
        return null;
      }
    }
  },
  created() {
    this.findLeagueIndex();
  },
  watch: {
    nextgames: function() {
      this.findLeagueIndex();
    },
    $route(to, from) {
      if(to.params.id !== from.params.id) {
        this.league_id = this.$route.params.id;
        this.findLeagueIndex();
      }
    }
  }
}
</script>

<style scoped>

</style>
