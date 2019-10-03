import React from "react";
import "./Refresh.css";

const Refresh = ({ onRefresh, refreshStatus }) => {
  let value = "Start";
  if (refreshStatus) {
    value = "Stop";
  } else {
    value = "Start";
  }
  return <button onClick={onRefresh}>{value} auto refresh</button>;
};

export default Refresh;
