import classes from '../todoListStyles.module.css';

const TodosHeader = () => {
  const time = new Date();
  const day = () => {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][time.getDay()];
  };

  const month = () => {
    return [
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
    ][time.getMonth()];
  };

  // Use a different header image depending on the time of day
  const getHeaderImageClass = (hour) => {
    if (hour >= 6 && hour < 16) {
      // Day time - 06:00 to 16:00
      return classes.bg_todo_header_day;
    } else if (hour >= 16 && hour < 20) {
      // Afternoon - 16:00 to 20:00
      return classes.bg_todo_header_afternoon;
    } else if (hour >= 20 || hour <= 5) {
      // Night time - 20:00 to 05:00
      return classes.bg_todo_header_night;
    }
  };

  return (
    <div className={`${classes.todos_header} ${getHeaderImageClass(time.getHours())}`}>
      <div className={classes.day}>{day()}</div>
      <div className={classes.month}>{month()}</div>
    </div>
  );
};

export default TodosHeader;
