import { BsZoomIn, BsLink } from "react-icons/bs";

const Portfolio = ({ works }) => {

    const workPictureZoomIn = ()=>{

    }

    const linkToWork = (title)=>{

    }
  return (
    <>
      <div className="portfolio">
        <div className="title">نمونه کارها</div>
        <div className="works">
          {works.map((work, key) => {
            return (
              <div className="work" key={key}>
                <img
                  src={work.img}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="work-title">
                  <div>{work.title}</div>
                  <div className="icons">
                    <BsZoomIn className="zoom" onClick={workPictureZoomIn}/>
                    <BsLink className="link" onClick={()=>linkToWork(work.title)}/>
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
