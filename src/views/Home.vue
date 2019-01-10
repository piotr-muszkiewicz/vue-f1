<template>
  <div>
    <div class="news-list">
      <div class="news-item" v-for="news in news_list.articles" :key="news.titler">
        <h1> {{ news.title }} </h1>
        <img :src="news.urlToImage">
        <p> {{ news.content }}</p>
      </div>
    </div>
    <div class="loading-content" :class="{loading : loading}"></div>
  </div>
</template>

<script>
import NewsApi from "@/services/api/NewsApi";
export default {
  name: "Home",
  data() {
    return {
      loading: true,
      news_list: [],
      error: "",
      limit: 100,
      offset: 0
    };
  },
  created() {
    NewsApi.getNews()
      .then(news => {
        this.news_list = news.data
      })
      .catch(error => (this.error = error))
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>
