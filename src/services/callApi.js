import axios from "axios";

class Api {
  url = "http://localhost:3000";

  constructor(url) {
    if (url) {
      this.url = url;
    }
  }

  async getUser(id) {
    const result = await axios.get(this.url + `/user/${id}`);
    return result;
  }

  async getActivity(id) {
    const result = await axios.get(this.url + `/user/${id}/activity`);
    return result;
  }

  async getDataSessions(id) {
    const result = await axios.get(this.url + `/user/${id}/average-sessions`);
    return result;
  }

  async getDataPerf(id) {
    const result = await axios.get(this.url + `/user/${id}/performance`);
    return result;
  }
}

export default Api;
