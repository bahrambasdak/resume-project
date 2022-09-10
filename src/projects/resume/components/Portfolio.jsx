import { BsZoomIn, BsLink } from "react-icons/bs";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import TodoList from "../../todolist/TodoList";
import classes from '../styles.module.scss';

const Portfolio = ({ works }) => {
const location = useLocation()
    const workPictureZoomIn = ()=>{

    }

    const linkToWork = (title)=>{
      console.log(location);

    }
  return (
    <>
      <div className={classes.portfolio} id="portfilio">
        <h2 className={classes.title}><span>نمونه کارهای </span>من</h2>
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
                    <BsZoomIn className={classes.zoom} onClick={workPictureZoomIn}/>
                    <Link to={work.title}><BsLink className={classes.link} /></Link>
                    
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
