import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    if (process.env.REACT_APP_MODE === "dev") {
      console.log("mode dev");

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
          setData(mainData);
          setDataActivity(activityData);
          setDataSessions(averageSessionsData);
          setDataPerf(performanceData);
          setLoading(false);
        }
      } catch (error) {
        navigate("/error");
      }
    } else {
      console.log("mode prod");

      const getUser = async () => {
        try {
          const { data } = await axios.get(`http://localhost:3000/user/${id}`);
          setData(data.data);
          // setLoading(false);
        } catch (error) {
          navigate("/error");
        }
      };

      const getActivity = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:3000/user/${id}/activity`
          );
          setDataActivity(data.data);
          // setLoading(false);
        } catch (error) {
          navigate("/error");
        }
      };

      const getDataSessions = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:3000/user/${id}/average-sessions`
          );
          setDataSessions(data.data);
          // setLoading(false);
        } catch (error) {
          navigate("/error");
        }
      };

      const getDataPerf = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:3000/user/${id}/performance`
          );
          setDataPerf(data.data);
          setLoading(false);
          return true;
        } catch (error) {
          navigate("/error");
        }
      };

      getUser();
      getActivity();
      getDataSessions();
      getDataPerf();

      if (getUser() && getActivity() && getDataSessions() && getDataPerf()) {
        console.log("youpi");
      }

      // axios
      //   .get(`http://localhost:3000/user/${id}`)
      //   .then((res) => {
      //     setData(res.data.data);
      //     setLoading(false);
      //   })
      //   .catch((err) => {
      //     if (err.response.status === 404) {
      //       navigate("/error");
      //     }
      //   });

      // axios
      //   .get(`http://localhost:3000/user/${id}/activity`)
      //   .then((res) => {
      //     setDataActivity(res.data.data);
      //     setLoading(false);
      //   })
      //   .catch((err) => {
      //     if (err.response.status === 404) {
      //       navigate("/error");
      //     }
      //   });

      // axios
      //   .get(`http://localhost:3000/user/${id}/average-sessions`)
      //   .then((res) => {
      //     setDataSessions(res.data.data);
      //     setLoading(false);
      //   })
      //   .catch((err) => {
      //     if (err.response.status === 404) {
      //       navigate("/error");
      //     }
      //   });
      // axios
      //   .get(`http://localhost:3000/user/${id}/performance`)
      //   .then((res) => {
      //     setDataPerf(res.data.data);
      //     setLoading(false);
      //   })
      //   .catch((err) => {
      //     if (err.response.status === 404) {
      //       navigate("/error");
      //     }
      //   });
    }
  }, [id, navigate]);

  // if (isLoading) {
  //   console.log(data.userInfos);
  //   console.log("loading");
  //   return (
  //     <div>
  //       <HorizontalNav />
  //       <div className="content">
  //         <VerticalNav />
  //         <div className="loading">
  //           <span>Chargement...</span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  if (!isLoading) {
    console.log("okokokok");
    console.log(data);
    return (
      <div>
        <HorizontalNav />
        <div className="container">
          <VerticalNav />
          <div className="content">
            <div className="content-name">
              <div className="title-box">
                <h1>
                  Bonjour
                  <span className="name">{data.userInfos.firstName}</span>
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
  }
};

export default Home;
