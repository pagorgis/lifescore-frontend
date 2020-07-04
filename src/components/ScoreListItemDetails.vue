<template>
  <div>
    <h2 class="league-name">{{livescore_obj.leagueName}}</h2>
    <div id="score-details">
        <h2 class="home-team-name">{{livescore_obj.homeTeam.teamName.toUpperCase()}}</h2>
        <h2 class="score-line">{{livescore_obj.goalsHomeTeam}}-{{livescore_obj.goalsAwayTeam}}<br><span class="elapsed">{{livescore_obj.elapsed}}'</span></h2>
        <h2 class="away-team-name">{{livescore_obj.awayTeam.teamName.toUpperCase()}}</h2>
    </div>
    <div class="event-details" v-bind:key="index" v-for="(event, index) in livescore_obj.events">
      <h3 class="home-team-side" v-if="livescore_obj.homeTeam.teamId === event.teamId">{{event.player}}<br><span class="assist" v-if="event.assist !== null">{{event.assist}}</span></h3>
      <h3 class="home-team-side" v-else></h3>
      <div class="event-img-div">
        <img class="event-img" :src="decideEventImg(event.type, event.detail)" alt="event-img">
        <h3 class="event-elapsed">{{event.elapsed}}'</h3>
      </div>
      <h3 class="away-team-side" v-if="livescore_obj.awayTeam.teamId === event.teamId">{{event.player}}<br><span class="assist" v-if="event.assist !== null">{{event.assist}}</span></h3>
      <h3 class="away-team-side" v-else></h3>
    </div>
  </div>
</template>


<script>

export default {
  name: 'ScoreListItemDetails',
  props: ["livescores"],
  data() {
      return {
          livescore_id: this.$route.params.id,
          livescore_obj: null
      }
  },
  created() {
    for (let i = 0; i < this.livescores.length; i++) {
      console.log(this.livescores[i].fixtureId);
      console.log(this.livescores[i].events.length);
      if (this.livescores[i].fixtureId == this.livescore_id) {
        this.livescore_obj = this.livescores[i];
        break;
      }
    }
  },
  methods: {
    decideEventImg(eventType, eventDetail) {
      switch (eventType) {
        case "Goal":
          return require("../assets/soccer.png");
        case "subst":
          return require("../assets/substitution.png");
        case "Card":
          if (eventDetail === "Yellow card") {
            return require("../assets/yellow-card.png");
          } else if (eventDetail === "Red card") {
            return require("../assets/red-card.png");
          } else {
            return null;
          }
        default:
          return null
      }
    }
  }
}

</script>


<style scoped>

  #score-details, .event-details {
      display: flex !important;
      justify-content: space-between;
      width: 80%;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
  }
  .event-details {
    margin-bottom: 0.5em;
  }
  h3 {
    margin: 1em;
  }
  .league-name {
    margin: 0.2em;
    text-decoration: underline;
  }
  .elapsed {
    color: greenyellow;
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
  .score-line, .event-img-div {
    width: 20%;
  }
  .event-img {
    width: 5%;
    min-width: 2em;
    margin-top: 0em;
  }
  .event-elapsed {
    margin: 0.1em;
  }
  .assist {
    color: grey;
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
