import { useRef } from "react";
import { useEffect } from "react";
import { BsGithub, BsTelegram, BsInstagram } from "react-icons/bs";

const MainHeader = () => {
  const canvasRef = useRef(null);

  const winWidth = window.screen.availWidth;
  const winHeight = window.screen.availHeight;

  const createPoints = (count) => {
    const points = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * window.screen.availWidth;
      const y = Math.random() * window.screen.availWidth;
      const vx = Math.random() * 10;
      const vy = Math.random() * 10;
      const r = Math.random() * 10;
      points.push({ x, y, vx, vy, r });
    }
    return points;
  };
  useEffect(() => {
    let points = createPoints(10);
    const drowPoints = () => {
      ctx.clearRect(0, 0, winWidth, winHeight);

      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r, 0, 2 * Math.PI);
        ctx.fillStyle = "#111";
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
          if (newX > winWidth || newX < 0) newVx *= -1;
          if (newY > winHeight || newY < 0) newVy *= -1;
          return { ...point, x: newX, y: newY, vx: newVx, vy: newVy };
        }),
      ];
      drowPoints();
      requestAnimationFrame(translatePoints);
    };

    const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = winWidth;
    canvasRef.current.height = winHeight;
    translatePoints();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="header-canvas"></canvas>
      <div className="welcome-text">به وب سایت من خوش آمدید</div>
      <div className="name-text">بهرام بسدک</div>
      <div className="type-text">توسعه دهنده فرانت اند</div>
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
    </>
  );
};

export default MainHeader;
