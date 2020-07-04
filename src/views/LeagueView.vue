<template>
  <div id="league">
    <Standings v-bind:standings="standings" v-if="false"/>
    <ScoreList v-bind:livescores="livescores" />
    <NextGamesList v-bind:nextgames="nextgames" />
  </div>
</template>


<script>
import Standings from '../components/Standings.vue';
import ScoreList from '../components/ScoreList.vue';
import NextGamesList from '../components/NextGamesList.vue';

export default {
  name: 'LeagueView',
  components: {
    Standings,
    ScoreList,
    NextGamesList,
  },
  props: ["standings", "livescores", "nextgames"],
}
</script>


<style>

</style>
