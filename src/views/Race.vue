<template>
  <div>
    <div v-if="!loading">
      <table class="table" v-if="race.RaceTable.Races.length !== 0">
        <thead>
          <tr>
            <th>Nr.</th>
            <th>Driver</th>
            <th>Team</th>
            <th></th>
            <th>Points</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(raceDriver, key) in race.RaceTable.Races[0].Results"
            :key="raceDriver.Driver.driverId"
          >
            <td>{{key + 1}}</td>
            <td>
              {{raceDriver.Driver.givenName}}
              {{raceDriver.Driver.familyName}}
            </td>
            <td>{{raceDriver.Constructor.name}}</td>
            <td>
              <div
                class="down position"
                v-if="Number(raceDriver.grid) < Number(raceDriver.position)"
              >&#8600; {{Number(raceDriver.grid) - Number(raceDriver.position)}}</div>
              <div
                class="up position"
                v-else-if="Number(raceDriver.grid) > Number(raceDriver.position)"
              >&#8599; {{Number(raceDriver.grid) - Number(raceDriver.position)}}</div>
              <div class="equal position" v-else>=</div>
            </td>
            <td>{{raceDriver.points}}</td>
            <td>{{raceDriver.status}}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="content">
        <h1 class="has-text-centered">Comming Soon</h1>
      </div>
    </div>
    <div class="loading-content" :class="{loading : loading}"></div>
  </div>
</template>

<script>
import RaceApi from "@/services/api/RaceApi";

export default {
  name: "Race",
  data() {
    return {
      loading: true,
      race: [],
      error: ""
    };
  },
  created() {
    RaceApi.getRace(this.$route.params.year, this.$route.params.raceNumber)
      .then(raceData => {
        this.race = raceData;
      })
      .catch(error => ((this.error = error), (this.loading = false)))
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>

<style lang="scss" scoped>
.table {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  text-align: center;
  .position {
    text-align: center;
    font-weight: bold;
    &.up {
      color: green;
    }
    &.down {
      color: red;
    }
  }
}
</style>
