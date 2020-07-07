<template>
  <div id="score-list" v-if="livegames.length">
      <div v-bind:key="league" v-for="league in leagues">
        <h2 class="league-name">{{league}}</h2>
        <div v-bind:key="livegame.fixtureId" v-for="livegame in livegames">
          <ScoreListItem v-bind:livegame="livegame" v-if="league === livegame.leagueName"/>
        </div>
      </div>
  </div>
  <h2 v-else-if="fetchingLiveGames">Loading live games...</h2>
  <h2 v-else class="no-live-games">There are no live games currently...</h2>
</template>

<script>
import ScoreListItem from './ScoreListItem.vue';

export default {
  name: 'ScoreList',
  components: {
    ScoreListItem
  },
  props: ["livegames", "fetchingLiveGames"],
  data() {
    return {
      leagues: []
    }
  },
  methods: {
    checkOngoingLeagues(data) {
      for(let i = 0; i < data.length; i++) {
        if(!this.leagues.includes(data[i].leagueName)) {
          
          this.leagues.push(data[i].leagueName);
        }
      }
    }
  },
  created() {
    this.checkOngoingLeagues(this.livegames);
  },
  watch: {
    livegames: function() {
      this.checkOngoingLeagues(this.livegames);
    }
  }
  
}
</script>

<style scoped>

  .league-name {
    margin: 0.2em;
    text-decoration: underline;
  }

  .no-live-games {
    color: #FF4848;
    text-decoration: underline;
  }

</style>
