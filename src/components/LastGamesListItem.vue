<template>
  <div class="last-games-info">
    <h3 class="home-team-name">{{ lastgame.homeTeam.teamName }}</h3>
    <h3 class="score-line">{{lastgame.goalsHomeTeam}}-{{lastgame.goalsAwayTeam}}</h3>
    <h3 class="away-team-name">{{ lastgame.awayTeam.teamName }}</h3>
  </div>
</template>


<script>

export default {
  name: 'LastGamesListItem',
  props: ["lastgame"],
  data() {
    return {
      league_id: this.$route.params.id,
    }
  },
}

</script>


<style scoped>

  .last-games-info {
      display: flex !important;
      justify-content: space-between;
      width: 80%;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
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

  @media screen and (max-width: 768px) {
    .last-games-info {
      width: 96%;
    }
    h3 {
      margin: 0.4em 0;
    }
  }

</style>
