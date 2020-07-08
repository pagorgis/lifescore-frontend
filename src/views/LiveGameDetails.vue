<template>
  <div id="live">
    <ScoreListItemDetails v-bind:livegames="livegames"/>
  </div>
</template>


<script>
import ScoreListItemDetails from '../components/ScoreListItemDetails.vue';

export default {
  name: 'LiveGameDetails',
  components: {
    ScoreListItemDetails
  },
  props: ["standings", "livegames", "nextgames", "lastgames", "fetchingLiveGames"] // Only uses livegames and fetchingLiveGames
}
</script>


<style>

</style>
