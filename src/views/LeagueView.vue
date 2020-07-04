<template>
  <div id="league">
    <div class="standings-flex">
      <Standings v-bind:standings="standings" />
    </div>
    <div class="games-list">
      <LastGamesList v-bind:lastgames="lastgames" />
      <ScoreList v-bind:livescores="livescores" />
      <NextGamesList v-bind:nextgames="nextgames" />
    </div>
  </div>
</template>


<script>
import Standings from '../components/Standings.vue';
import LastGamesList from '../components/LastGamesList.vue';
import ScoreList from '../components/ScoreList.vue';
import NextGamesList from '../components/NextGamesList.vue';

export default {
  name: 'LeagueView',
  components: {
    Standings,
    LastGamesList,
    ScoreList,
    NextGamesList,
  },
  props: ["standings", "livescores", "nextgames", "lastgames"],
}
</script>


<style>

  #league {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .games-list, .standings-flex {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    #league {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .games-list, .standings-flex {
      width: 96%;
    }
  }

</style>
