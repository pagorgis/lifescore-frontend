<template>
  <div id="league">
    <Standings v-bind:standings="standings" />
    <ScoreList v-bind:livescores="livescores" v-if="false"/>
  </div>
</template>


<script>
import Standings from '../components/Standings.vue';
import ScoreList from '../components/ScoreList.vue';

export default {
  name: 'LeagueView',
  components: {
    ScoreList,
    Standings,
  },
  props: ["livescores", "standings"],
}
</script>


<style>

</style>
