import { BsZoomIn, BsLink } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SiFreelancer } from "react-icons/si";
import webDevLogo from "./icon/web-dev.png"
import lifeStyleLogo from "./icon/life_style_working_25.jpg"
import teamYabLogo from "./icon/about us.jpg"

import classes from "./styles.module.scss";
import { Marginer } from "../global/Marginer";

const certificates = [
    {
        logo: <img src={teamYabLogo} style={{width:'100%'}}></img>,
        company:'Team Yab',
        role:'Front-end Developer',
        period:'October 2022 - until now',
        desc:'I work in the front end team of the company',
    },
    {
        logo:<img src={webDevLogo} style={{width:'100%'}}></img>,
        company:'Freelance',
        role:'Web Developer',
        period:'November 2021 - October 2022',
        desc:'Taking on different projects in web development to learn as much as possible.',
    }
]

export const Certificates = () => {


  return (
    <div className={`${classes.page_container} page`} >
      <div className={classes.container} >

        <h2 className={classes.title}>
        Degrees <span> & Certificates </span>
        </h2>
        <div className={classes.certificates}>
          {certificates.map((certificate, key) => {
            return (
              <div className={classes.certificate} key={key}>
                <div className={classes.logo}
                > {certificate.logo}</div>
                <Marginer size='10px'/>
                <p className={classes.company}>{certificate.company}</p>
                <Marginer size='10px'/>
                <p className={classes.role}>{certificate.role}</p>
                <p className={classes.period}>{certificate.period}</p>
                <Marginer size='10px'/>
                <p className={classes.desc}>{certificate.desc}</p>
              </div>
            );
          })}
        </div>
        </div>
            </div>

          );
};


