<template>
  <div class="next-games-info">
    <h3 class="home-team-name">{{ nextgame.homeTeam.teamName }}</h3>
    <h3 class="event-date">{{ convertToDate(nextgame.eventTimestamp) }}</h3>
    <h3 class="away-team-name">{{ nextgame.awayTeam.teamName }}</h3>
  </div>
</template>


<script>
import moment from 'moment'

export default {
  name: 'NextGamesListItem',
  props: ["nextgame"],
  data() {
    return {
      league_id: this.$route.params.id,
    }
  },
  methods: {
    convertToDate(timeStamp) {
      return moment.unix(timeStamp).format('DD/MM/YYYY HH:mm');
    }
  }
}

</script>


<style scoped>

  .next-games-info {
      display: flex !important;
      justify-content: space-between;
      width: 50%;
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
    #score-details, .event-details {
      width: 96%;
    }
    h3 {
      margin: 0em;
    }
  }

</style>
