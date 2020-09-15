<template>
  <div id="score-list" v-if="lastgames.length">
    <h2 v-if="!lastgames[leagueIndex].lastgames.length"><u>League has not started yet...</u></h2>
    <h2 v-else><u>Finished games - round {{ extractRound(lastgames[leagueIndex].lastgames[0]) }}</u></h2>
    <div v-bind:key="lastgame.fixtureId" v-for="lastgame in lastgames[leagueIndex].lastgames">
        <LastGamesListItem 
          v-bind:lastgame="lastgame" 
          v-if="league_id == lastgame.leagueId && 
            extractRound(lastgames[leagueIndex].lastgames[0]) === extractRound(lastgame) &&
            lastgame.status === 'Match Finished'" 
        />
    </div>
  </div>
  <h3 v-else>Loading previous games...</h3>
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
      leagueIndex: null
    }
  },
  methods: {
    extractRound(lastGame) {
      if (lastGame.round.includes(' - ')) {
        const splitRoundText = lastGame.round.split(' - ');
        if (splitRoundText[0] === "Regular Season") {
          return splitRoundText[1] ? parseInt(splitRoundText[1]) : null;
        }
      } else {
        return "unknown"; // If cups get added to the app
      }
    },
    findLeagueIndex() {
      if(this.lastgames.length) {
        for (let i = 0; i < this.lastgames.length; i++) {
          if(this.lastgames[i].leagueId == this.league_id) {
            this.leagueIndex = i;
          }
        }
        console.log(this.lastgames[this.leagueIndex].lastgames.length);
        return null;
      }
    }
  },
  created() {
    this.findLeagueIndex();
  },
  watch: {
    lastgames: function() {
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
