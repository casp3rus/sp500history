import React from "react";
import ReturnLine from "./ReturnLine";

const ReturnList = ({ data }) => {
  const list = data.map((element) => {
    return (
      <ReturnLine key={`${element.year} + ${element.id}`} element={element} />
    );
  });
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Year</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Return</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Cumulative Return</h3>
          </th>
        </tr>
        {list}
      </tbody>
    </table>
  );
};

export default ReturnList;