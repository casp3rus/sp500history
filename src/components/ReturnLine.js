import React from "react";

const ReturnLine = ({ element }) => {
  let { year, totalReturn, cumulativeReturn } = element;
  return (
    <tr>
      <td>{year}</td>
      { totalReturn >= 0 ? 
        <td className='positive'>{ totalReturn }<i className="arrow up icon"></i></td> :
        <td className='negative'>{ totalReturn }<i className="arrow down icon"></i></td> 
      }
      <td>{cumulativeReturn.toFixed(2)}</td>
    </tr>
  );
};

export default ReturnLine;