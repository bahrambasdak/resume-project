const MySkills = ({ skills }) => {
  return (
    <>
      <div className="my-skills">
        <div className="my-skills-section">
        <h2 className="title">مهارتهای من</h2>
        <div className="skills">
          {skills.map((skill, key) => {
            const width = `${skill.degree}%`;
            return <div className="skill" key={key}>
              <p className="name">{skill.name}</p>
              <div className="bar" ><div className="bar-value" style={{width:width}}></div> </div>
              <span className="degree" style={{right:width}}>{width}</span>
            </div>;
          })}
        </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
