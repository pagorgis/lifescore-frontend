<template>
  <div id="app">
    <h1 class="site-header"><router-link class="home-link" to="/" @click.native="changeLeague(null)">LIFESCORE</router-link></h1>
    <div class="leagues-container">
        <router-link to="/league/3456" tag="img" :src="require('./assets/uk.png')" alt="Premier League" 
            :class="currentLeague === 3456 ? 'league-img active-league' : 'league-img'" @click.native="changeLeague(3456)"></router-link>
        <router-link to="/league/3513" tag="img" :src="require('./assets/spain.png')" alt="Primera Division"
            :class="currentLeague === 3513 ? 'league-img active-league' : 'league-img'" @click.native="changeLeague(3513)"></router-link>
        <router-link to="/league/3576" tag="img" :src="require('./assets/italy.png')" alt="Serie A"
            :class="currentLeague === 3576 ? 'league-img active-league' : 'league-img'" @click.native="changeLeague(3576)"></router-link>
        <router-link to="/league/3510" tag="img" :src="require('./assets/germany.png')" alt="Bundesliga"
            :class="currentLeague === 3510 ? 'league-img active-league' : 'league-img'" @click.native="changeLeague(3510)"></router-link>
        <router-link to="/league/3176" tag="img" :src="require('./assets/sweden.png')" alt="Allsvenskan"
            :class="currentLeague === 3176 ? 'league-img active-league' : 'league-img'" @click.native="changeLeague(3176)"></router-link>
    </div>
    <router-view
      :livegames="livegames" 
      :standings="standings"
      :lastgames="lastgames" 
      :nextgames="nextgames"
      :fetchingLiveGames="fetchingLiveGames" 
    />
  </div>
</template>


<script>

export default {
  name: 'App',
  data() {
    return {
      livegames: [],
      standings: [],
      nextgames: [],
      lastgames: [],
      currentLeague: null,
      fetchingLiveGames: true,

    }
  },
  methods: {
    fetchAllData() {
      fetch("https://lifescore-api.herokuapp.com/lastgames/")
        .then(data => data.json())
        .then(jsondata => {
          this.lastgames = jsondata;
        })
        .catch(err => console.log(err));

      fetch("https://lifescore-api.herokuapp.com/standings/")
        .then(data => data.json())
        .then(jsondata => {
          this.standings = jsondata;
        })
        .catch(err => console.log(err));

      fetch("https://lifescore-api.herokuapp.com/nextgames/")
        .then(data => data.json())
        .then(jsondata => {
          this.nextgames = jsondata;
        })
        .catch(err => console.log(err));

      fetch("https://lifescore-api.herokuapp.com/livegames/")
        .then(data => data.json())
        .then(jsondata => {
          this.livegames = jsondata;
          this.fetchingLiveGames = false;
        })
        .catch(err => {
          console.log(err);
          this.fetchingLiveGames = false;
        });
    },
    fetchLiveGamesOnly: function() {
      fetch("https://lifescore-api.herokuapp.com/livegames/")
        .then(data => data.json())
        .then(jsondata => {
          this.livegames = jsondata;
          this.fetchingLiveGames = false;
        })
        .catch(err => {
          console.log(err);
          this.fetchingLiveGames = false;
        });
    },
    changeLeague: function(leagueId) {
      this.currentLeague = leagueId;
    }
  },
  created() {
    this.fetchAllData();
    this.changeLeague(parseInt(this.$route.params.id));
    setInterval(() => {
      this.fetchingLiveGames = true;
      this.fetchLiveGamesOnly();
    }, 1000*60*1);
  },
  watch: {
    $route(to, from) {
      if(to.params.id !== from.params.id) {
        this.currentLeague = parseInt(this.$route.params.id);
      }
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
    opacity: 0.5;
    transition: 0.2s;
  }
  .league-img:hover {
    transition: 0.2s;
    opacity: 1;
    cursor: pointer;
  }
  .active-league {
    opacity: 1;
  }

</style>
