import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";
import ReturnList from "./ReturnList";
import _ from "lodash"
import "./App.css";

import data from "../data/data.json";

function App() {
  const [allHistory, setAllHistory] = useState([])
  const [filteredHistory, setFilteredHistory] = useState(null)

  useEffect(() => {
    setAllHistory(data)
  })

  const handleChange = (rangeValue) => {
    let min = rangeValue[0]
    let max = rangeValue[1]

    const tempHistory = _.filter(data, obj => {
      return min <= obj.year && obj.year <= max
    })
    setFilteredHistory(tempHistory)
  }
  

  return (
    <div className="ui raised segment">
      <div className="ui segment blue inverted">
        <h2>S&P 500 History</h2>
      </div>
      <RangeSlider handleChange={handleChange}/>
      <ReturnList data={
        filteredHistory ? 
        filteredHistory :
        allHistory
      } />
    </div>
  );
}

export default App;
