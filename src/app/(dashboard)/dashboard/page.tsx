"use client";
import { useState, useEffect } from "react"
import axios from "axios";
import DashBoardRIghtSection from "./DashboardRightSection";
const Dashboard = () => {
  const [dataValue, setDataValue] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3100/city')
    .then(res => setDataValue(res.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="flex">
      <DashBoardRIghtSection />
    </div>
  );
};

export default Dashboard;
