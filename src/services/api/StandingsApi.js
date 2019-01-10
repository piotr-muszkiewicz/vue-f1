import axios from "axios";

export default {
  getStandingsDriver(year = 2019) {
    return axios
      .get("/" + year + "/driverStandings.json")
      .then(response => {
        return response.data.MRData;
      });
  },
  getStandingsConstructor(year = 2019) {
    return axios
      .get("/" + year + "/constructorStandings.json")
      .then(response => {
        return response.data.MRData;
      });
  },
  getRaceStandingsDriver(year = 2019, raceNumber = 1) {
    return axios
      .get("/" + year + "/" + raceNumber + "/driverStandings.json")
      .then(response => {
        return response.data.MRData;
      });
  }
};
