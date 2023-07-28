import classes from "./styles.module.scss";
import { BsGithub} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import { Marginer } from "../global/Marginer";
// import {footerBG} from "./img/wave.svg"
import myphoto from "./img/jsCertificate.JPG"


const Footer = () => {
    return ( 
        <footer className={classes.page_container} >
        <div className={classes.container} >

            <p className={classes.title}>Contact</p>
            <p className={classes.desc}>Would you like to work with me? Awesome!</p>
            <div className={classes.link}>
            <a href="https://github.com/bahrambasdak">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/bahrambasdak/">
              <AiFillLinkedin />
            </a>
          </div>
          <Marginer size={100}/>
          <p className={classes.name}>Bahram Basdak's Portfolio</p>




        </div> 

        
        <svg viewBox="0 0 120 20" className={classes.footerBG}>
 <defs> 
   <mask id="xxx">
     <circle cx="7" cy="12" r="40" fill="#fff" />
   </mask>
   
   <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
  	</filter>
     <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
  </defs> 

   <use id={classes.wave3} class={classes.wave} xlinkHref="#wave" x="0" y="-2" ></use> 
   <use id={classes.wave2} class={classes.wave} xlinkHref="#wave" x="0" y="0" ></use>
 
  <g class={classes.topball}>

    
  </g>
  <g class={classes.gooeff}>
  <circle class={`${classes.drop} ${classes.drop1}`} cx="20" cy="2" r="1.8"  />
  <circle class={`${classes.drop} ${classes.drop2}`} cx="25" cy="2.5" r="1.5"  />
  <circle class={`${classes.drop} ${classes.drop3}`} cx="16" cy="2.8" r="1.2"  />
    <use id={classes.wave1} class={classes.wave} xlinkHref="#wave" x="0" y="1" />
  
</g>


</svg>
    </footer> );
}
 
export default Footer;