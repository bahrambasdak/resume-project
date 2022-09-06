import img from "./../img/about.jpg";
import { memo, useEffect } from "react";
const AboutMe = () => {
  console.log("about me render");
  useEffect(() => {
    console.log("about me useEfect");
  }, []);
  return (
    <div className="about-me">
      <div className="right">
        <img src={img} alt="about" />
      </div>
      <div className="left">
        <h1>
          <span>درباره</span> من{" "}
        </h1>
        <h3>من یک طراح رابط کاربری حرفه ای هستم</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای
        </p>
        <div className="description">
          <div>نام: بهرام بسدک</div>
          <div>ایمیل: bahrambasdak@gmail.com</div>
          <div>سن : 33 </div>
          <div>مکان : تهران</div>
        </div>
        <button>رزومه</button>
      </div>
    </div>
  );
};

export default memo(AboutMe);
