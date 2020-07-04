<template>
  <div id="app">
    <h1 class="site-header">LIFESCORE</h1>
    <router-link to="/standings">Standings</router-link>
    <div class="leagues-container">
        <img class="league-img" src="./assets/uk.png" alt="Premier League">
        <img class="league-img" src="./assets/spain.png" alt="Primera Division">
        <img class="league-img" src="./assets/italy.png" alt="Serie A">
        <img class="league-img" src="./assets/germany.png" alt="Bundesliga">
        <img class="league-img" src="./assets/sweden.png" alt="Allsvenskan">
    </div>
    <router-view :livescores="livescores" :standings="standings"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      livescores: [
        {
          fixtureId: 214351,
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
              detail: "U. Lopez"
            }
          ]
        }
      ],
      standings: [
        {
          rank: 1,
          teamId: 40,
          teamName: "Liverpool",
          teamLogo: "https://media.api-sports.io/football/teams/40.png",
          group: "Premier League",
          form: "WDWLW",
          gamesPlayed: 31,
          wins: 28,
          draws: 2,
          losses: 1,
          goalsFor: 70,
          goalsAgainst: 21,
          goalsDiff: 49,
          points: 86
        },
        {
          rank: 2,
          teamId: 50,
          teamName: "Manchester City",
          teamLogo: "https://media.api-sports.io/football/teams/50.png",
          group: "Premier League",
          form: "LWWLW",
          gamesPlayed: 31,
          wins: 20,
          draws: 3,
          losses: 8,
          goalsFor: 77,
          goalsAgainst: 33,
          goalsDiff: 44,
          points: 63
        },
        {
          rank: 3,
          teamId: 46,
          teamName: "Leicester",
          teamLogo: "https://media.api-sports.io/football/teams/46.png",
          group: "Premier League",
          form: "DDWLL",
          gamesPlayed: 31,
          wins: 16,
          draws: 7,
          losses: 8,
          goalsFor: 59,
          goalsAgainst: 29,
          goalsDiff: 30,
          points: 55
        },
        {
          rank: 4,
          teamId: 49,
          teamName: "Chelsea",
          teamLogo: "https://media.api-sports.io/football/teams/49.png",
          group: "Premier League",
          form: "WWWDW",
          gamesPlayed: 31,
          wins: 16,
          draws: 6,
          losses: 9,
          goalsFor: 55,
          goalsAgainst: 41,
          goalsDiff: 14,
          points: 54
        },
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

  h1,h2,h3,h4,h5,h6 {
    font-weight: 300;
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
