import axios from "axios";

export default {
  getCalendar(year = 2019) {
    return axios.get("/" + year + ".json").then(response => {
      return response.data.MRData;
    });
  }
};
