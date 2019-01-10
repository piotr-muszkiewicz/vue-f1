<template>
  <div>
    <div v-if="!loading">
      <table class="table center">
        <tbody>
          <tr v-for="item in seasonsData" :key="item.season">
            <td>{{$t('title.season')}} {{ item.season }}</td>
            <td>
              <router-link class="button is-light" :to="{name: 'calendar', params: {year: item.season}}">{{$t('title.calendar')}}</router-link>
            </td>
            <td>Zwycięzca (liczba wygranych)</td>
            <td>
              <a class="button is-light is-small" :href="item.url" target="_blank">Wikipedia</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="loading-content" :class="{loading : loading}"></div>
  </div>
</template>

<script>
import SeasonsApi from "@/services/api/SeasonsApi";

export default {
  name: "Seasons",
  data() {
    return {
      loading: true,
      seasonsData: [],
      error: "",
      limit: 100,
      offset: 0
    };
  },
  created() {
    SeasonsApi.getSeasons(this.limit, this.offset)
      .then(seasons => {
        var season_list = seasons.SeasonTable.Seasons;
        season_list.sort().reverse();
        this.seasonsData = season_list;
      })
      .catch(error => (this.error = error))
      .finally(() => {
        this.loading = false;
      });
  }
};
</script>
