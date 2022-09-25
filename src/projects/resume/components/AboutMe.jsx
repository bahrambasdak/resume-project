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
      {/* <div className={classes.right}>
        <img src={img} alt="about" />
      </div> */}

      <div className={classes.left}>
        <h1>
          <span>درباره</span> من
        </h1>
        <h3> توسعه دهنده React </h3>
        <div className={classes.text}>
          <p>
            فردی با توانایی و شوق یادگیری بالا ، عاشق ترکیب برنامه نویسی و و
            نوآوری هستم. در دانشگاه و بعد از آن همواره در حوزه برنامه نویسی فعال
            بوده ام. یکی از بهترین پروژه هایی که انجام داده ام برنامه نویسی کامل
            سیستم خانه هوشمند بوده است. با گذراندن دوره های جاوااسکریپت داخلی و
            خارجی و سپس دوره جامپ فرانت اند با React سایت quera و گرفتن گواهی
            سطح PERFECT این دوره و انجام نمونه کارها به تسلط بر JavaScript و
            React و همچنین کتابخانه های مربوطه رسیده ام از جمله توانایی کار با
            APIها , React-Hook-Form , Axios , jest , service worker و...
          </p>
          <p>
            با روحیه کار تیمی و همچنین توانایی بالا در حل مسأله میتوانم در پیش
            برد هدفهای تیم موثر باشم. در مسیر حرفه‌ای خود به دنبال رشد مداوم در
            حوزه فرانت اند و سپس بک اند هستم .
          </p>
        </div>
        <div className={classes.description}>
          <div>
            <div>
              <b>نام</b> : بهرام بسدک
            </div>
            <div>
              <b>ایمیل</b> : bahrambasdak@gmail.com
            </div>
            <div>
              <b>سن</b> : 33{" "}
            </div>
          </div>
          <div>
            <div>
              <b>مکان</b> : تهران
            </div>
            <div>
              <b>آدرس نمونه کارها در گیت هاب : </b>{" "}
              <a href="https://github.com/bahrambasdak">
                github.com/bahrambasdak
              </a>
            </div>
            <div>
              <b>شماره تماس : </b> 09351905281
            </div>
          </div>
        </div>
        <a href={resume} download>
          <button>دریافت رزومه </button>
        </a>
      </div>
    </div>
  );
};

export default memo(AboutMe);
