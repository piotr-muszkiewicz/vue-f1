<template>
  <div>
    <div v-if="!loading">
        <table class="table">
            <caption>Klasyfikacja kierowców sezonu {{this.$route.params.year}} </caption>
            <thead>
                <th>Nr.</th>
                <th>Name</th>
                <th>Team</th>
                <th>Points</th>
            </thead>
            <tbody>
                <tr v-for="(driver, key) in drivers.StandingsTable.StandingsLists[0].DriverStandings" :key="driver.givenName">
                    <td>
                        {{ key + 1 }}
                    </td>
                    <td>
                        {{ driver.Driver.givenName }} {{ driver.Driver.familyName }}
                    </td>
                    <td>{{ driver.Constructors[0].name}}</td>
                    <td>{{driver.points}}</td>
                </tr>
            </tbody>
        </table>
        <table class="table">
            <caption>Klasyfikacja konstruktorów sezonu {{this.$route.params.year}} </caption>
            <thead>
                <th>Nr.</th>
                <th>Team</th>
                <th>Wins</th>
                <th>Points</th>
            </thead>
            <tbody>
                <tr v-for="(construtor, key) in constructors.StandingsTable.StandingsLists[0].ConstructorStandings" :key="construtor.Constructor.name">
                    <td>
                        {{ key + 1 }}
                    </td>
                    <td>
                        {{ construtor.Constructor.name }}
                    </td>
                    <td>
                        {{ construtor.wins }}
                    </td>
                    <td>
                        {{ construtor.points }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="loading-content" :class="{loading : loading}"></div>
  </div>
</template>

<script>
import StandingsApi from "@/services/api/StandingsApi";

export default {
  name: "Race",
  data() {
    return {
      loading: true,
      drivers: [],
      constructors: [],
      error: ""
    };
  },
  created() {
    StandingsApi.getStandingsDriver(this.$route.params.year)
      .then(standingDriver => {
        this.drivers = standingDriver;
      })
      .catch(error => ((this.error = error), (this.loading = false)))
      .finally(() => {
        this.loading = false;
      });
    StandingsApi.getStandingsConstructor(this.$route.params.year)
      .then(standingDriver => {
        this.constructors = standingDriver;
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
