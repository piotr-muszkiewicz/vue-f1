import axios from "axios";

export default {
  getRace(year = 2019, raceNumber = 1) {
    return axios
      .get("/" + year + "/" + raceNumber + "/results.json")
      .then(response => {
        return response.data.MRData;
      });
  }
};
