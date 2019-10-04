import React from "react";
import Refresh from "../Refresh";
import "./Filters.css";

const Filters = ({ onRefresh, refreshStatus }) => {
  return <Refresh onRefresh={onRefresh} refreshStatus={refreshStatus} />;
};

export default Filters;
