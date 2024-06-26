import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
import { Marginer } from "../global/Marginer";

const Projects = ({ projects }) => {
  return (
    <div className={`${classes.portfolio_page} page`}>
      <div className={classes.portfolio}>
        <h2 className={classes.title}>
          My<span> Projects </span>
        </h2>
        <div className={classes.projects}>
          {projects.map((project, key) => {
            return (
              <div className={classes.project} key={key}>
                <div className={classes.desc_section}>
                  <p className={classes.title}>{project.title}</p>
                  <Marginer size="20px" />
                  <p className={classes.desc}>{project.desc}</p>
                  <Marginer size="20px" />

                  {project.space === "internal" ? (
                    <Link to={project.path}>
                      <div className={classes.link_btn}>
                        <HiArrowSmRight />
                        SEE LIVE
                      </div>
                    </Link>
                  ) : (
                    <a href={project.path}>
                      <div className={classes.link_btn}>
                        <HiArrowSmRight />
                        SEE LIVE
                      </div>
                    </a>
                  )}
                </div>
                <div className={classes.img_section}>
                  <img
                    src={project.img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
