import { useCallback, useMemo, useRef, useState } from "react";
import { useEffect } from "react";
import { memo } from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";
import resume from "../../bahram-basdak-resume 1402.pdf";

import classes from "./styles.module.scss";
import homePage from "../../img/homePage.jpg";
import { Marginer } from "../global/Marginer";

const HomePage = ({ showInTop }) => {
  const canvasRef = useRef(null);
  const winWidth = window.screen.availWidth;
  const winHeight = window.screen.availHeight;
  let r_line = winWidth / 15;
  const [autoTyperText, setAutoTyperText] = useState("");
  if (winWidth < 768) r_line = winWidth / 9;

  const createPoints = (count, xInit, yInit) => {
    const points = [];
    let V = 3;
    let R = 20;
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
  const text = "Welcome to my website :)  "; //'front end developer';//

  let i = 0;
  const speed = 100;
  let reverse = false;

  const writer = useCallback(() => {
    if (i < text.length && !reverse) {
      setAutoTyperText(
        text
          .split("")
          .slice(0, i + 1)
          .join("")
      );
      i++;
    } else {
      reverse = true;
    }

    if (i >= 0 && reverse) {
      setAutoTyperText(text.split("").slice(0, i).join(""));
      i--;
    } else if (reverse) {
      reverse = false;
    }
  }, []);

  useEffect(() => {
    let points = createPoints(50);
    const canvasRefCurrent = canvasRef.current;
    const ctx = canvasRefCurrent.getContext("2d");
    canvasRefCurrent.width = winWidth;
    canvasRefCurrent.height = winHeight;
    const writerInterval = setInterval(writer, 100);

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
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0.1,
          point.x,
          point.y,
          point.r
        );
        gradient.addColorStop(0, "#FFFF");
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.fillStyle = gradient;
        ctx.fillRect(
          point.x - point.r,
          point.y - point.r,
          point.x + point.r,
          point.y + point.r
        );
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

    return () => {
      clearInterval(writerInterval);
      cancelAnimationFrame(myanimation);
    };
  }, [showInTop]);

  return (
    <div className={`${classes.Home_header} page`} id="home">
      <Marginer size={"20px"} />
      <canvas ref={canvasRef} className={classes.header_canvas}></canvas>

      <section className={classes.left_section}>
        <div className={classes.welcome_text}>Greetings!</div>
        <p className={classes.aboutMe}>
          I'm Bahram Basdak, a React developer experienced in creating frontend
          applications using React, JavaScript, HTML, and CSS. With over 3 years
          of expertise in designing and developing front-end web solutions, I
          focus on crafting user-friendly interfaces and solving complex
          problems collaboratively to achieve team objectives.
        </p>
        <div className={classes.typer}>{autoTyperText}</div>

        <div className={classes.main_header_link}>
          <a href="https://github.com/bahrambasdak">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/bahrambasdak/">
            <AiFillLinkedin />
          </a>
        </div>
        <a className={classes.get_resumeBtn} href={resume}>
          <AiFillFilePdf />
          <p>SEE MY RESUME </p>
        </a>
      </section>

      <section className={classes.right_section}>
        <img src={homePage} alt="my picture" className={classes.myPicture} />
      </section>
      <Marginer size={"20px"} />
    </div>
  );
};

export default memo(HomePage);
