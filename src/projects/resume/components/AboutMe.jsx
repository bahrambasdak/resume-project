import img from "./../img/about.jpg";
import classes from '../styles.module.scss';
import { memo, useEffect } from "react";
const AboutMe = () => {
  console.log("about me render");
  useEffect(() => {
    console.log("about me useEfect");
  }, []);
  return (
    <div className={classes.about_me} id="aboutMe">
      <div className={classes.right}>
        <img src={img} alt="about" />
      </div>

      <div className={classes.left}>
        <h1>
          <span>درباره</span> من
        </h1>
        <h3>من یک طراح رابط کاربری حرفه ای هستم</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای
        </p>
        <div className={classes.description}>
          <div><b>نام</b> : بهرام بسدک</div>
          <div><b>ایمیل</b> : bahrambasdak@gmail.com</div>
          <div><b>سن</b> : 33 </div>
          <div><b>مکان</b> : تهران</div>
        </div>
        <button>دریافت رزومه</button>
      </div>
    </div>
  );
};

export default memo(AboutMe);
