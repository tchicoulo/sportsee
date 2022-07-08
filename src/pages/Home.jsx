import React, { useEffect } from "react";
import HorizontalNav from "../components/HorizontalNav";
import VerticalNav from "../components/VerticalNav";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/12")
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  if (isLoading) {
    return (
      <div>
        <HorizontalNav />
        <div className="content">
          <VerticalNav />
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
        </div>
      </div>
    </div>
  );
};

export default Home;
