import { BsZoomIn, BsLink } from "react-icons/bs";
import { Link } from "react-router-dom";

import classes from "./styles.module.scss";

const Projects = ({ projects }) => {


  return (
    
      <div className={classes.portfolio} id="portfilio">

        <h2 className={classes.title}>
          <span>نمونه کارهای </span>من
        </h2>
        <div className={classes.projects}>
          {projects.map((project, key) => {
            return (
              <div className={classes.project} key={key}>
                <img
                  src={project.img}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
                <div className={classes.work_title}>
                  <div>{project.title}</div>
                  <div className={classes.icons}>
                    <BsZoomIn
                      className={classes.zoom}
                      
                    />
                    {project.space === "internal" ? (
                      <Link to={project.path}>
                        <BsLink className={classes.link} />
                      </Link>
                    ) : (
                      <a href={project.path}>
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
  );
};

export default Projects;
