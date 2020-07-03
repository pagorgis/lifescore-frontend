<template>
  <div id="live">
    <ScoreListItemDetails v-bind:livescores="livescores"/>
  </div>
</template>


<script>
import ScoreListItemDetails from '../components/ScoreListItemDetails.vue';

export default {
  name: 'LiveGameDetails',
  components: {
    ScoreListItemDetails
  },
  props: ["livescores"]
}
</script>


<style>

</style>
