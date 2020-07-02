<template>
  <div id="score-list">
      <div v-bind:key="livescore.fixtureId" v-for="livescore in livescores">
        <h2 v-if="!leagues.includes(livescore.leagueName)">{{livescore.leagueName}}</h2>
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
  props: ["livescores"],
  data() {
    return {
      leagues: []
    }
  },
  methods: {
    checkIfLeagueExists(leagueName) {
      
      if(!this.leagues.includes(leagueName)) {
        this.leagues.push(leagueName);
        console.log("true");
        return true;
      } else {
        console.log("false");
        return false;
      }
    }
  }
  
}
</script>

<style scoped>

</style>
