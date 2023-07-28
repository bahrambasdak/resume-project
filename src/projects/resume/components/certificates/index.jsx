import { BsZoomIn, BsLink } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SiFreelancer } from "react-icons/si";
import webCertificate from "./img/webCertificate.JPG"
import jsCertificate from "./img/jsCertificate.JPG"

import classes from "./styles.module.scss";
import { Marginer } from "../global/Marginer";

const certificates = [
    {
        logo: <img src={jsCertificate} style={{width:'100%',height:'100%'}}></img>,
        title:'JavaScript Algorithms and Data Structures ',
        period:'February 1, 2022',
        desc:'I work in the front end team of the company',
        link:'https://freecodecamp.org/certification/fcca1e9d62f-440a-4640-80f7-63aef7eca4ac/javascript-algorithms-and-data-structures'
    },
    {
        logo:<img src={webCertificate} style={{width:'100%',height:'100%'}}></img>,
        title:'Responsive Web Design',
        period:'December 20, 2021',
        desc:'Taking on different projects in web development to learn as much as possible.',
        link:'https://freecodecamp.org/certification/fcca1e9d62f-440a-4640-80f7-63aef7eca4ac/responsive-web-design'
    }
]

export const Certificates = () => {


  return (
    <div className={`${classes.page_container} page`} >
      <div className={classes.container} >

        <h2 className={classes.page_title}>
        Degrees <span> & Certificates </span>
        </h2>
        <div className={classes.certificates}>
          {certificates.map((certificate, key) => {
            return (
              <div className={classes.certificate} key={key}>
                <div className={classes.text}>
                  <p className={classes.title}>{certificate.title}</p>
                  <Marginer size='10px'/>
                  <p className={classes.period}>{certificate.period}</p>
                  <Marginer size='10px'/>
                  <p className={classes.desc}>{certificate.desc}</p>
                </div>
                <a className={classes.logo} href={certificate.link}
                > {certificate.logo}</a>


              </div>
            );
          })}
        </div>
        </div>
            </div>

          );
};


