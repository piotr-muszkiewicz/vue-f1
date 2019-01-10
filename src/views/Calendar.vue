<template>
  <div>
    <div v-if="!loading">
      <table class="table">
        <tbody>
          <tr v-for="race in calendar" :key="race.raceName">
            <td>{{race.round}}</td>
            <td>
              <img
                :src="require('@/assets/img/flags/' + race.Circuit.Location.country.toLowerCase() + '.png')"
              >
              {{race.raceName}}
            </td>
            <td>{{race.date}}</td>
            <td>
              <router-link
               class="button is-light"
                :to="{name: 'race', params: {year: $route.params.year, raceNumber: race.round}}"
              >{{$t('title.results')}}</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="loading-content" :class="{loading : loading}"></div>
  </div>
</template>

<script>
import CalendarApi from "@/services/api/CalendarApi";

export default {
  name: "Calendar",
  data() {
    return {
      loading: true,
      calendar: [],
      error: ""
    };
  },
  created() {
    CalendarApi.getCalendar(this.$route.params.year)
      .then(calendarData => {
        this.calendar = calendarData.RaceTable.Races;
      })
      .catch(error => (this.error = error))
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>

<style lang="scss" scoped>
.table {
  img {
    width: 30px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 2px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }
}
</style>
