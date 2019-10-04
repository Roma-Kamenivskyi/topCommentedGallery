import React from "react";
import "./Refresh.css";

// async refresh = () => {
//     await
//     onRefresh()
// }

const Refresh = ({ refreshStatus, onRefresh }) => {
  let value = "Start";
  if (refreshStatus) {
    value = "Stop";
  } else {
    value = "Start";
  }

  return <button onClick={onRefresh}>{value} auto refresh</button>;
};

export default Refresh;
