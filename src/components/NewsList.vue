<template>
  <div class="news-list">
    <div class="news-list__heading">
      <h1>{{ $t('title.sportNews') }}</h1>
    </div>
    <a class="news-list__item" v-for="news in news_list.articles" :key="news.titler" :href="news.url" target="_blank">
      <img class="news-list__item-img" :src="news.urlToImage">
      <div class="news-list__item-text">
        <h1 class="heading"> {{ news.title }} </h1>
        <p> {{ news.description }}</p>
      </div>
    </a>
    <div class="loading-content" :class="{loading : loading}"></div>
  </div>
</template>

<script>
import NewsApi from "@/services/api/NewsApi";
export default {
  name: "NewsList",
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

<style lang="scss" scoped>
  .news-list{
    &__heading {
      border-bottom: 1px solid rgba(0,0,0,0.1);
      margin-bottom: 30px;
      h1 {
        font-size: 20px;
        padding: 10px;
        font-weight: bold;
      }
    }
    &__item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      padding: 15px;
      border: 1px solid rgba(0,0,0,0.1);
      color: rgba(0,0,0,0.8);
      opacity: 0.9;
      transition: all 0.3s;
      &:hover {
        opacity: 1;
      }
    }
    &__item-img {
      width: 30%;
      height: auto;
    }
    &__item-text {
      width: 68%;
      .heading {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
</style>