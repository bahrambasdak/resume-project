import classes from "../styles.module.scss";
import { memo, useEffect } from "react";
import resume from "../bahram-basdak-resume-1401.pdf";
const AboutMe = () => {
  console.log("about me render");
  useEffect(() => {
    console.log("about me useEfect");
  }, []);
  return (
     <div className={classes.about_me} id="aboutMe">


      <div className={classes.left}>
        <h1>
          <span>About</span> me
        </h1>
        <h3> Front-end | React Developer </h3>
        <div className={classes.text}>

          <p>
          Creative and self-starting Front-End Developer with 3+ years of experience in designing, developing, and maintaining front-end web applications using . Highly skilled in JavaScript, React and Redux .
          I am Interested in learning modern technologies and solving upcoming challenges.
          With the spirit of team work and also high ability to solve problems, I can be effective in advancing the team's goals
          </p>
        </div>
        <div className={classes.description}>
          <div>
            <div>
              <b>Name</b> : Bahram Basdak 
            </div>
            <div>
              <b>Email</b> : bahrambasdak@gmail.com
            </div>
            <div>
              <b>Age</b> : 33
            </div>
          </div>
          <div>
            <div>
              <b>Location</b> : Tehran
            </div>
            <div>
              <b>GitHub: </b>
              <a href="https://github.com/bahrambasdak">
                github.com/bahrambasdak
              </a>
            </div>
            <div>
              <b> Phone number : </b> 09351905281
            </div>
          </div>
        </div>
        <a href={resume} download>
          <button>Get resume  </button>
        </a>
      </div>
    </div>
  );
};

export default memo(AboutMe);
