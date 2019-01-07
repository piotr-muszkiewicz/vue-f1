<template>
  <div>
    <table class="table center">
      <thead>
        <tr>
          <th>Rok</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.season">
          <td>Sezon {{ item.season }}</td>
          <td>
            <a class="button" :href="item.url" target="_blank">Wikipedia</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SeasonsApi from "@/services/api/SeasonsApi";

export default {
  name: "home",
  data() {
    return {
      loading: true,
      data: [],
      error: "",
      limit: 100,
      offset: 0
    };
  },
  mounted() {
    SeasonsApi.getSeasons(this.limit, this.offset)
      .then(seasons => {
        this.data = seasons.SeasonTable.Seasons;
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
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  text-align: center;
}
</style>
