import "./App.css";
import React, { useState, useEffect } from "react";
import { fetchHistory } from "./Api";
import MisionCard from "./Components/MisionCard";
import Header from "./Components/Header";
import Date from "./Components/DateInput";

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const history = await fetchHistory({
        start: startDate,
        end: endDate,
      });
      setData(history);
    };

    getHistory();
  }, [startDate, endDate]);

  return (
    <div className="App">
      <Header title="SpaceX Record " />
      <div className="filters">
        <Date
          label="Start Date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Date label="End Date" onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div className="mission-list">
        {data.map((item, index) => (
          <MisionCard key={index} mission={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
