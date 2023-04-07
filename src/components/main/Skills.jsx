const everySkill = [
    {
      skillName: "Front End",
      skillItems: ["HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Styled",
        "React.JS"
      ],
    },
    {
      skillName: "Back End",
      skillItems: [
        "Node.JS",
        "Express.JS",
        "Discord.JS",
        "Lambda(AWS)",
        "API-Gateway(AWS)",
        "Cognito(AWS)",
        "MongoDB",
        "DynamoDB(AWS)",
      ],
    },
    {
      skillName: "Soft Skills",
      skillItems: [
        "Communication",
        "Teamwork",
        "Adaptibility",
        "Time Management",
        "Organization",
        "Critical Thinking",
      ],
    },
    {
      skillName: "Hard Skills",
      skillItems: [
        "Engineering",
        "Data Analysis",
        "Project Management",
        "Bilingual (Filipino & English)",
      ],
    },
  ];
  
  const skillStructure = everySkill.map((item, index) => {
    return (
      <div className="skill-Item" key={index}>
        <h2 className="skill-Header">{item.skillName}</h2>
        <div className="skill-List">
          <ul>
            {item.skillItems.map((item, index) => {
              return <li className="skill-ListItem" key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  });
  
  export default function Skills() {
    return (
      <div className="borders">
        <div id="Skills" className=" borderMargin"/>
        <h1 className="title">Skills</h1>
        <div className="breaker"/>
        {skillStructure}
      </div>
    );
  }
  