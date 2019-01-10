import axios from "axios";

const API_KEY = "b764558fb41248eaa1937d6646764e8c";

export default {
  getNews() {
    return axios
      .get("https://newsapi.org/v2/everything?sources=bbc-sport&apiKey=" + API_KEY)
      .then(response => {
        return response;
      });
  }
};