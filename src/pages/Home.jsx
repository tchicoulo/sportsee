import React, { useEffect } from "react";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import axios from "axios";
import { useState } from "react";
import DailyActivity from "../components/DailyActivity";
// import { dataGlobal } from "../services";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataActivity, setDataActivity] = useState([]);
  // const [dataSessions, setDataSessions] = useState([]);
  // const [dataPerf, setDataPerf] = useState([]);

  if (process.env.REACT_APP_ENV === "dev") {
    console.log("okok");
  } else {
    console.log("non...");
  }

  useEffect(() => {
    // dataGlobal()
    //   .then((res) => setData(res))
    //   .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/user/12")
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3000/user/12/activity")
      .then((res) => {
        setDataActivity(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .get("http://localhost:3000/user/12/average-sessions")
    //   .then((res) => {
    //     setDataSessions(res.data.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // axios
    //   .get("http://localhost:3000/user/12/performance")
    //   .then((res) => {
    //     setDataPerf(res.data.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    // });
  }, []);

  // console.log(data);
  // console.log(dataActivity);
  // console.log(dataSessions);
  // console.log(dataPerf);

  if (isLoading) {
    return (
      <div>
        <HorizontalNav />
        <div className="content">
          <VerticalNav />
          <div className="loading">
            <h2>Chargement...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HorizontalNav />
      <div className="container">
        <VerticalNav />
        <div className="content">
          <h1>Bonjour {data.userInfos.firstName}</h1>
          <DailyActivity data={dataActivity} />
        </div>
      </div>
    </div>
  );
};

export default Home;
