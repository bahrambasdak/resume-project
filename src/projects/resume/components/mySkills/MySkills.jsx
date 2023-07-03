import {  MySkillLogo } from "../../img/mySkill";
import classes from "./styles.module.scss";
import "../..//mainStyles.scss"



const MySkills = ({ skills }) => {
  return (
      <div className={`${classes.my_skills} page`} id="skills">
        <div className={classes.my_skills_section} >
          <h2 className={classes.title}>
          My <span>Skills</span> 
          </h2>
          <div style={{display:'flex'}}>
          <MySkillLogo style={{width:'50%'}}/>
          <div className={classes.skills} style={{width:'50%'}}>

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
  );
};

export default MySkills;
