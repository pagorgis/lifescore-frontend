<template>
  <div id="livescore-games">
    <ScoreList v-bind:livescores="livescores"/>
  </div>
</template>


<script>
import ScoreList from '../components/ScoreList.vue';

export default {
  name: 'Home',
  components: {
    ScoreList
  },
  props: ["standings", "livescores", "nextgames", "lastgames"],
}
</script>


<style>

</style>
