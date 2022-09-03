import img from "./../img/about.jpg";
const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="right">
        <img src={img} alt="about" />
      </div>
      <div className="left">
        <h1><span>درباره</span> من </h1>
        <p>من یک طراح رابط کاربری حرفه ای هستم</p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای
        </p>
        <div>
          <span>نام: بهرام بسدک</span>{" "}
          <span>ایمیل: bahrambasdak@gmail.com</span>
        </div>
        <div>
          <span>سن : 33 </span> <span>مکان : تهران</span>
        </div>
        <button>رزومه</button>
      </div>
    </div>
  );
};

export default AboutMe;
