function getDate() {
  const date = new Date();
  const getFullYear = date.getFullYear();
  const getMonth = date.getMonth() + 1;
  const getDate = date.getDate();
  let getHour = date.getHours();
  let getMinutes = date.getMinutes();

  if (parseInt(getHour) < 10) {
    getHour = "0" + getHour;
  }
  if (parseInt(getMinutes) < 10) {
    getMinutes = "0" + getMinutes;
  }
  const today =
    getFullYear +
    "-" +
    getMonth +
    "-" +
    getDate +
    " " +
    getHour +
    ":" +
    getMinutes;
  return today;
}

export { getDate };
