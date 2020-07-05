<template>
  <div id="livegames">
    <ScoreList v-bind:livegames="livegames"/>
  </div>
</template>


<script>
import ScoreList from '../components/ScoreList.vue';

export default {
  name: 'Home',
  components: {
    ScoreList
  },
  props: ["standings", "livegames", "nextgames", "lastgames"],
}
</script>


<style>

</style>
