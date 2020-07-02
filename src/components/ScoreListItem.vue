<template>
  <div id="score-item">
      <h3 class="home-team-name">{{livescore.homeTeam.teamName}}</h3>
      <h3 class="score-line">{{livescore.goalsHomeTeam}}-{{livescore.goalsAwayTeam}}<br><span class="elapsed">{{livescore.elapsed}}'</span></h3>
      <h3 class="away-team-name">{{livescore.awayTeam.teamName}}</h3>
  </div>
</template>


<script>

export default {
  name: 'ScoreListItem',
  props: ["livescore"]
}

</script>


<style scoped>

  #score-item {
      display: flex;
      justify-content: space-between;
      width: 80%;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
  }

  .elapsed {
    color: greenyellow;
  }

  .home-team-name, .away-team-name {
    width: 40%;
  }
  .home-team-name {
    text-align: left;
  }
  .away-team-name {
    text-align: right;
  }
  .score-line {
    width: 20%;
  }

</style>
