<template>
  <div id="standings">
    <ScoreList v-bind:livescores="livescores"/>
  </div>
</template>


<script>
import ScoreList from '../components/ScoreList.vue';

export default {
  name: 'Standings',
  components: {
    ScoreList
  },
  props: ["livescores"]
}
</script>


<style>

</style>
