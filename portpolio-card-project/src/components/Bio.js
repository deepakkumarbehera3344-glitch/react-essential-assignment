function Bio(){
   const biotext = "Third-year Electronics and Telecommunication engineering student with a passion for software development and problem-solving. Seeking opportunities to grow as a software engineer and contribute to impactful technology solutions.";
    const skill = ["React","Javascript","CSS","Node.js","Git","HTML","DSA"];

    return(
        <div className="bio-section">
            <h3>About me</h3>
            <p className="bio_text">{biotext}</p>
            <h3>skills</h3>
            <div className="skills-container">
                {skill.map((skill,index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    );
}

export default Bio;