import React, { useEffect } from "react";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import axios from "axios";
import { useState } from "react";
import DailyActivity from "../components/DailyActivity";
import Performances from "../components/Performances";
import AverageSessions from "../components/AverageSessions";
import Objectifs from "../components/Objectifs";
import Nutriments from "../components/Nutriments";
import apple from "../assets/img/apple.png";
import cheeseburger from "../assets/img/cheeseburger.png";
import chicken from "../assets/img/chicken.png";
import energy from "../assets/img/energy.png";
// import { dataGlobal } from "../services";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataActivity, setDataActivity] = useState([]);
  const [dataSessions, setDataSessions] = useState([]);
  // const [dataPerf, setDataPerf] = useState([]);

  // const calories = data.keyData.calorieCount;
  // const calories = data.keyData.calorieCount;
  // console.log(typeof calories);
  // console.log(calories.toLocalString());

  if (process.env.REACT_APP_ENV === "dev") {
    console.log("okok");
  } else {
    console.log("non...");
  }

  useEffect(() => {
    // dataGlobal()
    // .then((res) => {
    //   setData(res);
    //   setLoading(false);
    // })
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
    axios
      .get("http://localhost:3000/user/12/average-sessions")
      .then((res) => {
        setDataSessions(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
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

  console.log(data.keyData);

  return (
    <div>
      <HorizontalNav />
      <div className="container">
        <VerticalNav />
        <div className="content">
          <h1>Bonjour {data.userInfos.firstName}</h1>
          <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
          <div className="content-charts">
            <div className="charts">
              <DailyActivity data={dataActivity} />
              <div className="charts-box">
                <AverageSessions data={dataSessions} />
                <Performances />
                <Objectifs />
              </div>
            </div>
            <div className="infos-user">
              <Nutriments
                img={energy}
                count={data.keyData.calorieCount}
                style={{ backgroundColor: "#FF0000", opacity: 0.07 }}
                unit="KCal"
                nutriment="Calories"
              />
              <Nutriments
                img={chicken}
                count={data.keyData.proteinCount}
                style={{ backgroundColor: "rgba(74, 184, 255, 0.1)" }}
                unit="g"
                nutriment="Proteines"
              />
              <Nutriments
                img={apple}
                count={data.keyData.carbohydrateCount}
                style={{ backgroundColor: "#F9CE23", opacity: 0.1 }}
                unit="g"
                nutriment="Glucides"
              />
              <Nutriments
                img={cheeseburger}
                count={data.keyData.lipidCount}
                style={{ backgroundColor: "rgba(253, 81, 129, 0.1)" }}
                unit="g"
                nutriment="Lipides"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
