<template>
  <div id="app">
    <h1 class="site-header"><router-link class="home-link" to="/">LIFESCORE</router-link></h1>
    <div class="leagues-container">
        <img class="league-img" src="./assets/uk.png" alt="Premier League">
        <img class="league-img" src="./assets/spain.png" alt="Primera Division">
        <img class="league-img" src="./assets/italy.png" alt="Serie A">
        <img class="league-img" src="./assets/germany.png" alt="Bundesliga">
        <img class="league-img" src="./assets/sweden.png" alt="Allsvenskan">
    </div>
    <router-view
      :livegames="livegames" 
      :standings="standings"
      :lastgames="lastgames" 
      :nextgames="nextgames" />
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    timerBoy() {
      //setInterval(() => console.log("Tick"), 10000);
      fetch("http://localhost:3000/lastgames/test")
        .then(data => data.json())
        .then(jsondata => {
          console.log(jsondata);
          this.lastgames = jsondata;
        })
        .catch(err => console.log(err));

      fetch("http://localhost:3000/standings/test")
        .then(data => data.json())
        .then(jsondata => {
          console.log(jsondata);
          this.standings = jsondata;
        })
        .catch(err => console.log(err));

      fetch("http://localhost:3000/nextgames/test")
        .then(data => data.json())
        .then(jsondata => {
          console.log(jsondata);
          this.nextgames = jsondata;
        })
        .catch(err => console.log(err));

      fetch("http://localhost:3000/livegames/test")
        .then(data => data.json())
        .then(jsondata => {
          console.log(jsondata);
          this.livegames = jsondata;
        })
        .catch(err => console.log(err));

    }
  },
  created() {
    this.timerBoy();
  },
  data() {
    return {
      livegames: [],
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
      ],
      nextgames: [
        {
          fixtureId: 157334,
          leagueId: 524,
          leagueName: "Premier League",
          eventDate: 1593630900000,
          eventTimestamp: 1593630900,
          round: "Regular Season - 32",
          status: "Not Started",
          homeTeam: {
            teamId: 48,
            teamName: "West Ham",
            teamLogo: "https://media.api-sports.io/football/teams/48.png"
          },
          awayTeam: {
            teamId: 49,
            teamName: "Chelsea",
            teamLogo: "https://media.api-sports.io/football/teams/49.png"
          }
        },
        {
          fixtureId: 157332,
          leagueId: 524,
          leagueName: "Premier League",
          eventDate: 1593709200000,
          eventTimestamp: 1593709200,
          round: "Regular Season - 32",
          status: "Not Started",
          homeTeam: {
            teamId: 62,
            teamName: "Sheffield Utd",
            teamLogo: "https://media.api-sports.io/football/teams/62.png"
          },
          awayTeam: {
            teamId: 47,
            teamName: "Tottenham",
            teamLogo: "https://media.api-sports.io/football/teams/47.png"
          }
        },
        {
          fixtureId: 157341,
          leagueId: 524,
          leagueName: "Premier League",
          eventDate: 1593862200000,
          eventTimestamp: 1593862200,
          round: "Regular Season - 33",
          status: "Not Started",
          homeTeam: {
            teamId: 71,
            teamName: "Norwich",
            teamLogo: "https://media.api-sports.io/football/teams/71.png"
          },
          awayTeam: {
            teamId: 51,
            teamName: "Brighton",
            teamLogo: "https://media.api-sports.io/football/teams/51.png"
          }
        },
      ],
      lastgames: [
        {
          fixtureId: 157336,
          leagueId: 524,
          leagueName: "Premier League",
          eventDate: 1593889200000,
          eventTimestamp: 1593889200,
          round: "Regular Season - 33",
          status: "Halftime",
          homeTeam: {
            teamId: 49,
            teamName: "Chelsea",
            teamLogo: "https://media.api-sports.io/football/teams/49.png"
          },
          awayTeam: {
            teamId: 38,
            teamName: "Watford",
            teamLogo: "https://media.api-sports.io/football/teams/38.png"
          },
          goalsHomeTeam: 2,
          goalsAwayTeam: 0
        },
        {
          fixtureId: 157344,
          leagueId: 524,
          leagueName: "Premier League",
          eventDate: 1593880200000,
          eventTimestamp: 1593880200,
          round: "Regular Season - 33",
          status: "Match Finished",
          homeTeam: {
            teamId: 39,
            teamName: "Wolves",
            teamLogo: "https://media.api-sports.io/football/teams/39.png"
          },
          awayTeam: {
            teamId: 42,
            teamName: "Arsenal",
            teamLogo: "https://media.api-sports.io/football/teams/42.png"
          },
          goalsHomeTeam: 0,
          goalsAwayTeam: 2
        },
        {
          fixtureId: 157337,
          leagueId: 524,
          leagueName: "Premier League",
          eventDate: 1593871200000,
          eventTimestamp: 1593871200,
          round: "Regular Season - 33",
          status: "Match Finished",
          homeTeam: {
            teamId: 46,
            teamName: "Leicester",
            teamLogo: "https://media.api-sports.io/football/teams/46.png"
          },
          awayTeam: {
            teamId: 52,
            teamName: "Crystal Palace",
            teamLogo: "https://media.api-sports.io/football/teams/52.png"
          },
          goalsHomeTeam: 3,
          goalsAwayTeam: 0
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
  h1,h2,h3,h4,h5,h6 {
    font-weight: 300;
  }
  .home-link {
    text-decoration: none;
    color: white;
    white-space: nowrap;
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
