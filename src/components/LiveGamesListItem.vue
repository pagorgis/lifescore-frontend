<template>
  <div class="live-games-info">
    <h3 class="home-team-name">{{ livegame.homeTeam.teamName }}</h3>
    <router-link class="link-to-fixture" v-bind:to="'/livegame/' + livegame.fixtureId"><h3 class="score-line">{{livegame.goalsHomeTeam}}-{{livegame.goalsAwayTeam}}<br><span class="elapsed">{{livegame.elapsed}}'</span></h3></router-link>
    <h3 class="away-team-name">{{ livegame.awayTeam.teamName }}</h3>
  </div>
</template>


<script>

export default {
  name: 'LiveGamesListItem',
  props: ["livegame"],
  data() {
    return {
      league_id: this.$route.params.id,
    }
  },
}

</script>


<style scoped>

  .live-games-info {
      display: flex !important;
      justify-content: space-between;
      width: 80%;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
  }
  .elapsed {
    color: #44D073;
  }
  .home-team-name, .away-team-name, .home-team-side, .away-team-side {
    width: 40%;
  }
  .home-team-name, .home-team-side {
    text-align: left;
  }
  .away-team-name, .away-team-side {
    text-align: right;
  }
  .event-date {
    width: 20%;
  }
  .link-to-fixture {
    text-decoration: none;
    color: white;
    white-space: nowrap;
  }

  @media screen and (max-width: 768px) {
    .live-games-info {
      width: 96%;
    }
    h3 {
      margin: 0.4em 0;
    }
  }

</style>
