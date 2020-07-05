<template>
  <div class="score-item">
      <h3 class="home-team-name">{{livescore.homeTeam.teamName}}</h3>
      <router-link class="link-to-fixture" v-bind:to="'/livegame/' + livescore.fixtureId"><h3 class="score-line">{{livescore.goalsHomeTeam}}-{{livescore.goalsAwayTeam}}<br><span class="elapsed">{{livescore.elapsed}}'</span></h3></router-link>
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

  .score-item {
      display: flex;
      justify-content: space-between;
      width: 80%;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
  }

  .elapsed {
    color: #44D073;
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
  .link-to-fixture {
    text-decoration: none;
    color: white;
    white-space: nowrap;
  }

  @media screen and (max-width: 768px) {
    #score-item {
      width: 96%;
      margin-left: auto;
      margin-right: auto;
    }
  }

</style>
