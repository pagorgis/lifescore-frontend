<template>
  <div id="standings">
    <h2>Standings here</h2>
    <table class="league-table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Team</th>
          <th>Pl</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th class="desktop-only">GF</th>
          <th class="desktop-only">GA</th>
          <th>GD</th>
          <th>Po</th>
          <th class="desktop-only">Form</th>
        </tr>
      </thead>
      <tbody v-bind:key="standing.teamId" v-for="standing in standings">
        <tr>
          <td>{{standing.rank}}</td>
          <td><img class="team-logo-table" v-bind:src="standing.teamLogo" v-bind:alt="standing.teamId"></td>
          <td>{{standing.gamesPlayed}}</td>
          <td>{{standing.wins}}</td>
          <td>{{standing.draws}}</td>
          <td>{{standing.losses}}</td>
          <td class="desktop-only">{{standing.goalsFor}}</td>
          <td class="desktop-only">{{standing.goalsAgainst}}</td>
          <td>{{standing.goalsDiff}}</td>
          <td>{{standing.points}}</td>
          <td class="desktop-only">{{standing.form}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Standings',
  props: ["standings"],
  data() {
    return {
      league_id: this.$route.params.id,
    }
  }
}
</script>

<style scoped>

  table {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
  }
  tr {
    border-bottom: 1px solid rgba(255,255,255,0.4);
  }
  th {
    font-weight: 500;
  }
  th, td {
    font-size: 1.5em;
  }
  .team-logo-table {
    width: 3em;
    vertical-align: middle;
    margin: 0.2em 0;
  }

  @media screen and (max-width: 768px) {
    table {
      width: 96%;
      margin-left: auto;
      margin-right: auto;
    }
    .team-logo-table {
      width: 2em;
    }
    .desktop-only {
      display: none;
    }
  }

</style>