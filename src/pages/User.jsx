import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
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

import Api from "../services/callApi";
import User from "../models/User";

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../services/data";

const Home = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataActivity, setDataActivity] = useState([]);
  const [dataSessions, setDataSessions] = useState([]);
  const [dataPerf, setDataPerf] = useState([]);

  useEffect(() => {
    const api = new Api();

    if (process.env.REACT_APP_MODE === "dev") {
      const mainData = USER_MAIN_DATA.find((el) => el.id === parseInt(id));
      const activityData = USER_ACTIVITY.find(
        (el) => el.userId === parseInt(id)
      );
      const averageSessionsData = USER_AVERAGE_SESSIONS.find(
        (el) => el.userId === parseInt(id)
      );
      const performanceData = USER_PERFORMANCE.find(
        (el) => el.userId === parseInt(id)
      );

      try {
        if (mainData.id) {
          const userInfos = new User(
            mainData.id,
            mainData.userInfos,
            mainData.todayScore ? mainData.todayScore : mainData.score,
            mainData.keyData
          );

          setData(userInfos);
          setDataActivity(activityData);
          setDataSessions(averageSessionsData);
          setDataPerf(performanceData);
          setLoading(false);
        }
      } catch (error) {
        navigate("/error");
      }
    } else {
      api
        .getUser(id)
        .then((data) => setData(data))
        .catch(() => navigate("/error"));

      api
        .getActivity(id)
        .then((data) => setDataActivity(data))
        .catch(() => navigate("/error"));

      api
        .getDataSessions(id)
        .then((data) => setDataSessions(data))
        .catch(() => navigate("/error"));

      api
        .getDataPerf(id)
        .then((data) => {
          setDataPerf(data);
          setLoading(false);
        })
        .catch(() => navigate("/error"));
    }
  }, [id, navigate]);

  if (!isLoading) {
    return (
      <div>
        <HorizontalNav />
        <div className="container">
          <VerticalNav />
          <div className="content">
            <div className="content-name">
              <div className="title-box">
                <h1>
                  Bonjour{" "}
                  <span className="name">
                    {data.firstName ? data.firstName : "..."}
                  </span>
                </h1>
                <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
              </div>
              <div className="title-box-side"></div>
            </div>
            <div className="content-charts">
              <div className="charts">
                <DailyActivity data={dataActivity} />
                <div className="charts-box">
                  <AverageSessions data={dataSessions} />
                  <Performances data={dataPerf} />
                  <Objectifs data={data} />
                </div>
              </div>
              <div className="infos-user">
                <Nutriments
                  img={energy}
                  count={data.calorieCount}
                  style={{ backgroundColor: "#FF0000", opacity: 0.07 }}
                  unit="KCal"
                  nutriment="Calories"
                />
                <Nutriments
                  img={chicken}
                  count={data.proteinCount}
                  style={{ backgroundColor: "rgba(74, 184, 255, 0.1)" }}
                  unit="g"
                  nutriment="Proteines"
                />
                <Nutriments
                  img={apple}
                  count={data.carbohydrateCount}
                  style={{ backgroundColor: "#F9CE23", opacity: 0.1 }}
                  unit="g"
                  nutriment="Glucides"
                />
                <Nutriments
                  img={cheeseburger}
                  count={data.lipidCount}
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
  }
};

export default Home;
