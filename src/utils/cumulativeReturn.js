export default function cumulativeReturn(data) {
  let tempAllHistory = [];
  for (let i = data.length - 1; i >= 0; i--) {
    if (i === data.length - 1) {
      data[i].cumulativeReturn = parseFloat(data[i].totalReturn);
      tempAllHistory.unshift(data[i]);
    } else {
      data[i].cumulativeReturn =
        (parseFloat(data[i].totalReturn) + data[i + 1].cumulativeReturn);
      tempAllHistory.unshift(data[i]);
    }
  }
  return tempAllHistory;
}
