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
      standings: [],
      nextgames: [],
      lastgames: []
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
