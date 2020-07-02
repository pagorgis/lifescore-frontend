<template>
  <div id="app">
    <h1 class="site-header">LIFESCORE</h1>
    <div class="leagues-container">
        <img class="league-img" src="./assets/uk.png" alt="Premier League">
        <img class="league-img" src="./assets/spain.png" alt="Primera Division">
        <img class="league-img" src="./assets/italy.png" alt="Serie A">
        <img class="league-img" src="./assets/germany.png" alt="Bundesliga">
        <img class="league-img" src="./assets/sweden.png" alt="Allsvenskan">
    </div>
    <ScoreList v-bind:livescores="livescores"/>
  </div>
</template>

<script>
import ScoreList from './components/ScoreList.vue';

export default {
  name: 'App',
  components: {
    ScoreList
  },
  data() {
    return {
      livescores: [
        {
          fixtureId: 214350,
          leagueId: 775, 
          leagueName: "Primera Division",
          eventTimestamp: 1593624600,
          round: "Regular Season - 33",
          status: "Second Half",
          elapsed: 74,
          homeTeam: {
            teamId: 532,
            teamName: "Valencia",
            teamLogo: "https://media.api-sports.io/football/teams/532.png",
          },
          awayTeam: {
            teamId: 531,
            teamName: "Athletic Club",
            teamLogo: "https://media.api-sports.io/football/teams/531.png",
          },
          goalsHomeTeam: 0,
          goalsAwayTeam: 2,
          events: [
            {
              elapsed: 13,
              teamId: 531,
              player: "R. Garcia",
              assist: "I. Williams",
              type:"Goal",
              detail:"Normal Goal"
            },
            {
              elapsed: 47,
              teamId: 531,
              player: "R. Garcia",
              assist:"I. Cordoba",
              type:"Goal",
              detail: "Normal Goal"
            },
            {
              elapsed: 62,
              teamId: 532,
              player: "C. Soler",
              assist: "G. Guedes",
              type:"subst",
              detail: "G. Guedes"
            },
            {
              elapsed: 62,
              teamId: 532,
              player: "D. Cheryshev",
              assist: "F. Torres",
              type: "subst",
              detail: "F. Torres"
            },
            {
              elapsed: 66,
              teamId: 531,
              player: "M. Vesga",
              assist: "I. Williams",
              type: "subst",
              detail:"I. Williams"
            },
            {
              elapsed: 66,
              teamId: 531,
              player: "A. Villalibre",
              assist: "U. Lopez",
              type: "subst",
              detail:"U. Lopez"
            }
          ]
        },
        {
          fixtureId: 214350,
          leagueId: 775, 
          leagueName: "Primera Division",
          eventTimestamp: 1593624600,
          round: "Regular Season - 33",
          status: "Second Half",
          elapsed: 74,
          homeTeam: {
            teamId: 532,
            teamName: "Valencia",
            teamLogo: "https://media.api-sports.io/football/teams/532.png",
          },
          awayTeam: {
            teamId: 531,
            teamName: "Athletic Club",
            teamLogo: "https://media.api-sports.io/football/teams/531.png",
          },
          goalsHomeTeam: 0,
          goalsAwayTeam: 2,
          events: [
            {
              elapsed: 13,
              teamId: 531,
              player: "R. Garcia",
              assist: "I. Williams",
              type:"Goal",
              detail:"Normal Goal"
            },
            {
              elapsed: 47,
              teamId: 531,
              player: "R. Garcia",
              assist:"I. Cordoba",
              type:"Goal",
              detail: "Normal Goal"
            },
            {
              elapsed: 62,
              teamId: 532,
              player: "C. Soler",
              assist: "G. Guedes",
              type:"subst",
              detail: "G. Guedes"
            },
            {
              elapsed: 62,
              teamId: 532,
              player: "D. Cheryshev",
              assist: "F. Torres",
              type: "subst",
              detail: "F. Torres"
            },
            {
              elapsed: 66,
              teamId: 531,
              player: "M. Vesga",
              assist: "I. Williams",
              type: "subst",
              detail:"I. Williams"
            },
            {
              elapsed: 66,
              teamId: 531,
              player: "A. Villalibre",
              assist: "U. Lopez",
              type: "subst",
              detail:"U. Lopez"
            }
          ]
        }
      ]
    }
  }
}

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

  body {
    font-family: 'Righteous', cursive;
    line-height: 1.4;
    background-color: #121212;
    color: white;
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .site-header {
    font-size: 3em;
    font-weight: 300;
  }

  .leagues-container {
    display: inline-flex;
    justify-content: center;
  }

  .league-img {
    width: 10%;
    min-width: 4em;
    margin: 0 0.3em;
    opacity: 0.6;
  }

  .league-img:hover {
    transition: 0.2s;
    opacity: 1;
    cursor: pointer;
  }

</style>
