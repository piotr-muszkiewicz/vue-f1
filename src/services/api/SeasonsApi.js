import axios from "axios";

export default {
  getSeasons(limit = 15, offest = 0) {
    return axios
      .get("/seasons.json?limit=" + limit + "&offset=" + offest)
      .then(response => {
        return response.data.MRData;
      });
  }
};
