export default function cumulativeReturn(data) {
  let tempData = [];
  for (let i = data.length - 1; i >= 0; i--) {
    if (i === data.length - 1) {
      data[i].cumulativeReturn = parseFloat(
        parseFloat(data[i].totalReturn).toFixed(2)
      );
      tempData.unshift(data[i]);
    } else {
      data[i].cumulativeReturn = parseFloat(
        (
          parseFloat(data[i].totalReturn) +
          parseFloat(data[i + 1].cumulativeReturn)
        ).toFixed(2)
      );
      tempData.unshift(data[i]);
    }
  }
  return tempData;
}