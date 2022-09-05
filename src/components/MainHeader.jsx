import { useRef } from "react";
import { useEffect } from "react";
import { memo } from "react";
import { BsGithub, BsTelegram, BsInstagram } from "react-icons/bs";

const MainHeader = () => {
  const canvasRef = useRef(null);
  const typistRef = useRef(null);
  console.log("mainHeader render");
  const winWidth = window.screen.availWidth;
  const winHeight = window.screen.availHeight;

  const createPoints = (count, xInit, yInit) => {
    const points = [];
    for (let i = 0; i < count; i++) {
      const x = xInit || Math.random() * winWidth;
      const y = yInit || Math.random() * winHeight;
      const vx = (Math.random() - 0.5) * 4;
      const vy = (Math.random() - 0.5) * 4;
      const r = Math.random() * 5;
      points.push({ x, y, vx, vy, r });
    }
    return points;
  };

  useEffect(() => {
    let points = createPoints(100);
    const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = winWidth;
    canvasRef.current.height = winHeight;

    const text = "توسعه دهنده ی  React"; //'front end developer';//
    typistRef.current.value = "";
    //typistRef.current.focus();
    let i = 0;
    const speed = 100;
    let reverse = false;
    function typeWriter() {
      if (i < text.length && !reverse) {
        typistRef.current.value =
          text
            .split("")
            .slice(0, i + 1)
            .join("") + "|"; //charAt(i)
        i++;
        setTimeout(typeWriter, speed);
      } else reverse = true;

      if (i > 0 && reverse) {
        typistRef.current.value =
          text
            .split("")
            .slice(0, i + 1)
            .join("") + "|"; //charAt(i)
        i--;
        setTimeout(typeWriter, speed);
      } else if (reverse) {
        reverse = false;
        typeWriter();
      }
    }
    typeWriter();

    canvasRef.current.addEventListener("click", (e) => {
      points.push(...createPoints(10, e.clientX, e.clientY));

      //console.log(e.clientX);
    });

    const drowPoints = () => {
      ctx.clearRect(0, 0, winWidth, winHeight);

      points.forEach((point, index) => {
        points.slice(index).forEach((item) => {
          const radius = Math.sqrt(
            Math.pow(item.x - point.x, 2) + Math.pow(item.y - point.y, 2)
          );
          if (
            radius < 150 &&
            item.x > 0 &&
            item.x < winWidth &&
            item.y > 0 &&
            item.y < winHeight
          ) {
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(item.x, item.y);
            ctx.strokeStyle = `rgba(200,200,200,${(150 - radius) / 1000})`;
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(200,200,200,0.3)";
        ctx.fill();
      });
    };

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
      requestAnimationFrame(translatePoints);
    };

    translatePoints();

    console.log("mainHeader useEfect");

    //return clearInterval(typeInterval);
  }, []);

  return (
    <>
      <header className="App-header">
        <canvas ref={canvasRef} className="header-canvas"></canvas>
        <div className="welcome-text">به وب سایت من خوش آمدید</div>
        <div className="name-text">بهرام بسدک</div>
        <input
          type="text"
          value="توسعه دهنده ی react"
          ref={typistRef}
          className="type-text"
        />

        <div className="main-header-link">
          <span>
            <BsGithub />
          </span>
          <span>
            <BsTelegram />
          </span>
          <span>
            <BsInstagram />
          </span>
        </div>
      </header>
    </>
  );
};

export default memo(MainHeader);
