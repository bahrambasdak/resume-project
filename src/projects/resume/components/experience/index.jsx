
import webDevLogo from "./icon/web-dev.png";
import teamYabLogo from "./icon/about us.jpg";

import classes from "./styles.module.scss";
import { Marginer } from "../global/Marginer";

const experiences = [
  {
    logo: <img src={teamYabLogo} style={{ width: "100%" }}></img>,
    company: "Team Yab",
    role: "Front-end Developer",
    period: "October 2022 - until now",
    desc: "I work in the front end team of the company",
  },
  {
    logo: <img src={webDevLogo} style={{ width: "100%" }}></img>,
    company: "Freelance",
    role: "Web Developer",
    period: "November 2021 - October 2022",
    desc: "Taking on different projects in web development to learn as much as possible.",
  },
];

export const Experience = () => {
  return (
    <div className={`${classes.experience_page} page`}>
      <div className={classes.page_container}>
        <h2 className={classes.title}>
          My<span> Experience </span>
        </h2>
        <div className={classes.experience_container}>
          {experiences.map((experience, key) => {
            return (
              <div className={classes.experience} key={key}>
                <div className={classes.logo}> {experience.logo}</div>
                <Marginer size="10px" />
                <p className={classes.company}>{experience.company}</p>
                <Marginer size="10px" />
                <p className={classes.role}>{experience.role}</p>
                <p className={classes.period}>{experience.period}</p>
                <Marginer size="10px" />
                <p className={classes.desc}>{experience.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
