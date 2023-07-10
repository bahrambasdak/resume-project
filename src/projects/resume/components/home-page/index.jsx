import { useRef } from "react";
import { useEffect } from "react";
import { memo } from "react";
import { BsGithub, BsTelegram, BsInstagram, BsWhatsapp } from "react-icons/bs";
import classes from "./styles.module.scss";
import homePage from "../../img/homePage.jpg"

const HomePage = ({ showInTop }) => {
  const canvasRef = useRef(null);
  const typistRef = useRef(null);
  console.log("mainHeader render");
  const winWidth = window.screen.availWidth;
  const winHeight = window.screen.availHeight;
  let r_line = winWidth / 15;
  if (winWidth < 768) r_line = winWidth / 9;

  const createPoints = (count, xInit, yInit) => {
    const points = [];
    let V = 3;
    let R = 3;
    winWidth < 768 ? (V = 2) : winWidth < 600 ? (V = 1) : (V = 3);
    winWidth < 768 ? (R = 2) : winWidth < 600 ? (R = 1) : (R = 3);
    for (let i = 0; i < count; i++) {
      const x = xInit || Math.random() * winWidth;
      const y = yInit || Math.random() * winHeight;
      const vx = (Math.random() - 0.5) * V;
      const vy = (Math.random() - 0.5) * V;
      const r = (Math.random() + 0.1) * R;
      points.push({ x, y, vx, vy, r });
    }
    return points;
  };

  useEffect(() => {
    let points = createPoints(200);
    const canvasRefCurrent = canvasRef.current;
    const ctx = canvasRefCurrent.getContext("2d");
    canvasRefCurrent.width = winWidth;
    canvasRefCurrent.height = winHeight;

    const text = "Welcome to my website"; //'front end developer';//
    typistRef.current.value = "";

    let i = 0;
    const speed = 100;
    let reverse = false;

    // const addPoints = (e) => {
    //   points.push(...createPoints(10, e.clientX, e.clientY));
    // };

    function writer() {
      if (i < text.length && !reverse) {
        typistRef.current.value =
          text
            .split("")
            .slice(0, i + 1)
            .join("") + "|"; //charAt(i)
        i++;
        setTimeout(writer, speed);
      } else {
        clearTimeout(writer);
        reverse = true;
      }

      if (i >= 0 && reverse) {
        typistRef.current.value = text.split("").slice(0, i).join("") + "|";
        i--;
        setTimeout(writer, speed);
      } else if (reverse) {
        reverse = false;
        clearTimeout(writer);
      }
    }
    writer();
    const writerInterval = setInterval(writer, 6000);

    //canvasRef.current.addEventListener("click", addPoints);

    const drowPoints = () => {
      ctx.clearRect(0, 0, winWidth, winHeight);

      points.forEach((point, index) => {
        points.slice(index).forEach((item) => {
          const radius = Math.sqrt(
            Math.pow(item.x - point.x, 2) + Math.pow(item.y - point.y, 2)
          );
          if (
            radius < r_line &&
            item.x > 0 &&
            item.x < winWidth &&
            item.y > 0 &&
            item.y < winHeight
          ) {
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(item.x, item.y);
            ctx.strokeStyle = `rgba(250,250,250,${
              (r_line - radius) / r_line / 2
            })`;
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(250,250,250,0.3)";
        ctx.fill();
      });
    };
    let myanimation;
    const translatePoints = () => {
      points = [
        ...points.map((point) => {
          const newX = point.x + point.vx;
          const newY = point.y + point.vy;
          let newVx = point.vx;
          let newVy = point.vy;
          if (newX > winWidth + 100 || newX < -100) newVx *= -1;
          if (newY > winHeight + 50 || newY < -50) newVy *= -1;
          return { ...point, x: newX, y: newY, vx: newVx, vy: newVy };
        }),
      ];
      drowPoints();
      myanimation = requestAnimationFrame(translatePoints);
    };

    if (!showInTop) myanimation = requestAnimationFrame(translatePoints);

    console.log("mainHeader useEfect");

    return () => {
      console.log("mainheader stopped");
      clearInterval(writerInterval);
      cancelAnimationFrame(myanimation);
      //canvasRefCurrent.removeEventListener("click", addPoints);
    };
  }, [showInTop]);

  return (
      <div className={classes.Home_header} id="home">
        <canvas ref={canvasRef} className={classes.header_canvas}></canvas>


        <section className={classes.left_section}>
          <div className={classes.welcome_text}>Greetings!</div>
          <p className={classes.aboutMe}>

          I'm Bahram Basdak, a dedicated React developer with expertise in
           creating exceptional frontend applications using React, JavaScript,
            HTML, and CSS. With a solid background of over 3 years in designing,
             developing, and maintaining cutting-edge front-end web solutions, 
             I excel at crafting intuitive and visually appealing user interfaces.
          My passion lies in staying abreast of the latest technologies and proactively 
          tackling upcoming challenges. With a collaborative mindset and a proven ability to solve
           complex problems, I am committed to driving the team towards achieving its objectives.
          </p>
          <div className={classes.type_text}>
            <input
              type="text"
              value=""
              ref={typistRef}
              className={classes.typer}
              readOnly
            />
          </div>

          <div className={classes.main_header_link}>
            <a href="https://github.com/bahrambasdak?tab=repositories">
              <BsGithub />
            </a>
            <a href="https://t.me/Bahrambs">
              <BsTelegram />
            </a>
            <a href="https://www.instagram.com/bhrmbasdak/">
              <BsInstagram />
            </a>

            <a href="https://wa.me/+989351905281">
              <BsWhatsapp />
            </a>
          </div>
        </section>

        <section className={classes.right_section}>
          <img src={homePage} alt="my picture" className={classes.myPicture}/>    
        </section>

      </div>
  );
};

export default memo(HomePage);
