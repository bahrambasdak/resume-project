const MySkills = ({ skills }) => {
  return (
    <>
      <div className="my-skills">
        <h2 className="header">مهارتهای من</h2>
        <div className="skills">
          {skills.map((skill, key) => {
            const width = `${skill.degree}%`;
            return <div className="skill" key={key}>
              <p className="name">{skill.name}</p>
              <span className="bar" style={{ width: width }}></span>
              <span className="degree">{width}</span>
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default MySkills;
