import "./App.css";

const skills = [
{
  skill: "HTML+CSS",
  level: "advanced",
  color: "#2662EA",
},
{
  skill: "JavaScript",
  level: "advanced",
  color: "#EFD81D",
},
{
  skill: "Web Design",
  level: "advanced",
  color: "#FF3E00",
},
{
  skill: "Git and GitHub",
  level: "intermediate",
  color: "#30c756",
},
{
  skill: "React",
  level: "advanced",
  color: "#61DAFB",
},
{
  skill: "Node.js",
  level: "advanced",
  color: "#339933",
},
{
  skill: "Python",
  level: "intermediate",
  color: "#3776AB",
},
{
  skill: "Svelte",
  level: "beginner",
  color: "#166f4d",
},
];


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src={"/IMG_7123.JPEG"} alt={"Pedro Tavares"} />
    
  );
}

function Intro() {
  return (
    <div>
      <h1>Pedro Tavares</h1>
      <p>Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}


function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill key={skill.skill} skill={skill.skill} color={skill.color} level={skill.level}  />
      ))}
      
      
      
      
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
        </span>
    </div>
  );
}





export default App

