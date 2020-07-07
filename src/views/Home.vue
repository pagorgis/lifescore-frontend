<template>
  <div id="livegames">
    <ScoreList :livegames="livegames" :fetchingLiveGames="fetchingLiveGames" />
  </div>
</template>


<script>
import ScoreList from '../components/ScoreList.vue';

export default {
  name: 'Home',
  components: {
    ScoreList
  },
  props: ["standings", "livegames", "nextgames", "lastgames", "fetchingLiveGames"],
}
</script>


<style>

</style>
