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
  props: ["livegames"]
}
</script>


<style>

</style>
