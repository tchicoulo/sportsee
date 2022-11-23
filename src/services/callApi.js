import axios from "axios";
import Activity from "../models/Activity";
import Sessions from "../models/Sessions";
import User from "../models/User";
import Performances from "../models/Performances";

class Api {
  url = "http://localhost:3000";

  constructor(url) {
    if (url) {
      this.url = url;
    }
  }

  async getUser(id) {
    const result = await axios.get(this.url + `/user/${id}`);
    const res = result.data.data;
    const userInfos = new User(
      res.id,
      res.userInfos,
      res.todayScore ? res.todayScore : res.score,
      res.keyData
    );
    return userInfos;
  }

  async getActivity(id) {
    const result = await axios.get(this.url + `/user/${id}/activity`);
    const res = result.data.data;
    const userActivity = new Activity(res.sessions);
    return userActivity;
  }

  async getDataSessions(id) {
    const result = await axios.get(this.url + `/user/${id}/average-sessions`);
    const res = result.data.data;
    const userSessions = new Sessions(res.sessions);
    return userSessions;
  }

  async getDataPerf(id) {
    const result = await axios.get(this.url + `/user/${id}/performance`);
    const res = result.data.data;
    const userPerformances = new Performances(res.data, res.kind);
    return userPerformances;
  }
}

export default Api;
