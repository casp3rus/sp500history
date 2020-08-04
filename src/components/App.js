import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";
import ReturnList from "./ReturnList";
import TotalReturnGraph from "./TotalReturnGraph";
import LogRocket from "logrocket";
import _ from "lodash";
import "./App.css";

import data from "../data/data.json";
import cumulativeReturn from "../utils/cumulativeReturn";

function App() {
  const [allHistory, setAllHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState(null);

  useEffect(() => {
    setAllHistory(data);
  }, []);

  const handleChange = (rangeValue) => {
    let [min, max] = rangeValue;

    const tempFilteredHistory = _.filter(allHistory, (obj) => {
      return min <= obj.year && obj.year <= max;
    });
    setFilteredHistory(cumulativeReturn(tempFilteredHistory));
  };

  return (
    <div className="ui raised segment">
      <div className="ui segment blue inverted">
        <h2>S&P 500 History</h2>
      </div>
      <RangeSlider handleChange={handleChange} />
      <TotalReturnGraph
        data={filteredHistory ? filteredHistory : cumulativeReturn(allHistory)}
      />
      <ReturnList
        data={filteredHistory ? filteredHistory : cumulativeReturn(allHistory)}
      />
    </div>
  );
}

export default App;

LogRocket.init("x7qmce/adrian-m-popan");