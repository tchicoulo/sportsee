import axios from "axios";

const dataGlobal = async () => {
  try {
    const resp = await axios.get("http://localhost:3000/user/12");
    return resp.data.data;
  } catch (err) {
    console.log(err);
  }
};

// const dataGlobal = () => {
//   axios
//     .get("http://localhost:3000/user/12")
//     .then((res) => {
//       return res.data.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// // const dataAct = axios
// //   .get("http://localhost:3000/user/12/activity")
// //   .then((res) => {
// //     return res.data.data;
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // axios
// //   .get("http://localhost:3000/user/12/average-sessions")
// //   .then((res) => {
// //     setDataSessions(res.data.data);
// //     setLoading(false);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // axios
// //   .get("http://localhost:3000/user/12/performance")
// //   .then((res) => {
// //     setDataPerf(res.data.data);
// // setLoading(false);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

export { dataGlobal };
