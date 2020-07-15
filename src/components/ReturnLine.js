import React from "react";

const HistoryLine = ({ element, cumulativeReturn }) => {
  let { year, totalReturn } = element;
  return (
    <tr>
      <td>{year}</td>
      <td>{totalReturn}</td>
      <td>{cumulativeReturn}</td>
    </tr>
  );
};

export default HistoryLine;
