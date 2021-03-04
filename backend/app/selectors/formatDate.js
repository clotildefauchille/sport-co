const dayjs = require("dayjs");
require("dayjs/locale/fr");
/*
var duration = require("dayjs/plugin/duration");
dayjs.extend(duration);
*/

const formatDate = (date) => {
  const newDate = dayjs(date).locale("fr").format("D MMM YYYY");
  return newDate;
};

// solution only js :
// formatedaActivity.duration = formatedaActivity.duration
//   .split(":")
//   .slice(0, 2)
//   .join(":");

const formatTime = (date, time) => {
  newTime = dayjs(`${date}T${time}`).format("HH:mm");
  return newTime;
};

module.exports = { formatDate, formatTime };
