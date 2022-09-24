import classes from "../styles.module.scss";

const MySkills = ({ skills }) => {
  return (
    <>
      <div className={classes.my_skills} id="skills">
        <div className={classes.my_skills_section} >
          <h2 className={classes.title}>
            <span>مهارت های</span> من
          </h2>
          <div className={classes.skills}>
            {skills.map((skill, key) => {
              const width = `${skill.degree}%`;
              return (
                <div className={classes.skill} key={key}>
                  <p className={classes.name}>{skill.name}</p>
                  <div className={classes.bar}>
                    <div
                      className={classes.bar_value}
                      style={{ width: width }}
                    ></div>
                  </div>
                  <span className={classes.degree} style={{ right: width }}>
                    {width}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
