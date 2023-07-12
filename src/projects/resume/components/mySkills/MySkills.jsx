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
          <div className={classes.content} style={{display:'flex',flexWrap:'wrap',width:'100%',justifyContent:'space-between'}}>
            <div style={{width:'400px', maxWidth:'80%'}}>
            <MySkillLogo />
            </div>
          <div className={classes.skills} style={{width:'400px', maxWidth:'90%'}}>

            {skills.map((skill, key) => {
              const width = `${skill.degree}%`;
              return (
                <div className={classes.skill} key={key}>
                  
                  <div className={classes.logo}>
                    <div>
                      
                    </div>
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
