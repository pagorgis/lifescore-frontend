<template>
  <div class="score-item">
      <h3 class="home-team-name">{{livegame.homeTeam.teamName}}</h3>
      <router-link class="link-to-fixture" v-bind:to="'/livegame/' + livegame.fixtureId"><h3 class="score-line">{{livegame.goalsHomeTeam}}-{{livegame.goalsAwayTeam}}<br><span class="elapsed">{{livegame.elapsed}}'</span></h3></router-link>
      <h3 class="away-team-name">{{livegame.awayTeam.teamName}}</h3>
  </div>
</template>


<script>

export default {
  name: 'ScoreListItem',
  props: ["livegame"]
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
  .link-to-fixture {
    text-decoration: none;
    color: white;
    white-space: nowrap;
    text-align: center;
    width: 20%;
  }

  @media screen and (max-width: 768px) {
    .score-item {
      width: 96%;
      margin-left: auto;
      margin-right: auto;
    }
  }

</style>
