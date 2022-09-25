import { BsZoomIn, BsLink } from "react-icons/bs";
import { Link } from "react-router-dom";

import classes from "../styles.module.scss";

const Portfolio = ({ works }) => {


  return (
    <>
      <div className={classes.portfolio} id="portfilio">

        <h2 className={classes.title}>
          <span>نمونه کارهای </span>من
        </h2>
        <div className={classes.works}>
          {works.map((work, key) => {
            return (
              <div className={classes.work} key={key}>
                <img
                  src={work.img}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
                <div className={classes.work_title}>
                  <div>{work.title}</div>
                  <div className={classes.icons}>
                    <BsZoomIn
                      className={classes.zoom}
                      
                    />
                    {work.space === "internal" ? (
                      <Link to={work.path}>
                        <BsLink className={classes.link} />
                      </Link>
                    ) : (
                      <a href={work.path}>
                        <BsLink className={classes.link} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
