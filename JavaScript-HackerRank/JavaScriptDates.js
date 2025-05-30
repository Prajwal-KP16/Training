// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName;
  // Write your code here
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  dayName = new Date(dateString);
  for (let i = 0; i < days.length; i++) {
    if (dayName.getDay() == i) {
      return days[i];
    }
  }
  return dayName;
}
