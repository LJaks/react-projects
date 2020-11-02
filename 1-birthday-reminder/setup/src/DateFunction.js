const DateFunction = (num) => {
  const dateObj = new Date(num);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return {
    day: day,
    month: months[month],
    year: year,
  };
};

export default DateFunction;
