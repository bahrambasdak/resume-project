import classes from "../../styles.module.scss";

const DashboardWidget = ({ title, icon, value, color }) => {
  return (
    <div className={`${classes.card} ${classes.widget}`}>
      <span className={classes.icon} style={{ backgroundColor: color }}>
        {icon}
      </span>
      <span className={classes.description}>
        <div>{value}</div>
        <div>{title}</div>
      </span>
    </div>
  );
};

export default DashboardWidget;
