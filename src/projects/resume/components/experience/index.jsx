import { BsZoomIn, BsLink } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SiFreelancer } from "react-icons/si";



import classes from "./styles.module.scss";
import { Marginer } from "../global/Marginer";

const experiences = [
    {
        logo: <SiFreelancer size={100} className="logo_img"/>
        ,
        company:'teamYab',
        role:'Front-end Developer',
        period:'October 2022 - until now',
        desc:'I work in the front end team of the company',
    },
    {
        logo:'',
        company:'',
        role:'',
        period:'',
        desc:'',
    }
]

export const Experience = () => {


  return (
    
      <div className={classes.page_container}>

        <h2 className={classes.title}>
        My<span> Experience </span>
        </h2>
        <div className={classes.experience_container}>
          {experiences.map((experience, key) => {
            return (
              <div className={classes.experience} key={key}>
                <div className={classes.logo}
                > {experience.logo}</div>
                <Marginer size='10px'/>
                <p className={classes.company}>{experience.company}</p>
                <Marginer size='10px'/>
                <p className={classes.role}>{experience.role}</p>
                <p className={classes.period}>{experience.period}</p>
                <Marginer size='10px'/>
                <p className={classes.desc}>{experience.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
  );
};


