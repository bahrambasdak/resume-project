import {  MySkillLogo } from "../img/mySkill";
import classes from "../styles.module.scss";

const MySkills = ({ skills }) => {
  return (
    <>
      <div className={classes.my_skills} id="skills">
        <div className={classes.my_skills_section} >
          <h2 className={classes.title}>
          My <span>Skills</span> 
          </h2>
          <div style={{display:'flex',width:'80%',gap:'20px'}}>
          <MySkillLogo style={{width:'40%'}}/>
          <div className={classes.skills} style={{width:'60%'}}>

            {skills.map((skill, key) => {
              const width = `${skill.degree}%`;
              return (
                <div className={classes.skill} key={key}>
                  
                  <div className={classes.bar}>
                    <div></div>
                  </div>
                  <p className={classes.name}>{skill.name}</p>

                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
