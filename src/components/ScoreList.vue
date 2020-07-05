<template>
  <div id="score-list">
      <div v-bind:key="league" v-for="league in leagues">
        <h2>{{league}}</h2>
        <div v-bind:key="livescore.fixtureId" v-for="livescore in livescores">
          <ScoreListItem v-bind:livescore="livescore" v-if="league === livescore.leagueName"/>
        </div>
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
    checkOngoingLeagues(data) {
      console.log(data);
      for(let i = 0; i < data.length; i++) {
        if(!this.leagues.includes(data[i].leagueName)) {
          
          this.leagues.push(data[i].leagueName);
        }
      }
      console.log(this.leagues);
    }
  },
  created() {
    this.checkOngoingLeagues(this.livescores);
  },
  watch: {
    livescores: function() {
      this.checkOngoingLeagues(this.livescores);
    }
  }
  
}
</script>

<style scoped>

</style>
