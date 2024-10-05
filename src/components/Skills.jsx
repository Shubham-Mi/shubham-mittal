/**
 * @copyright 2024 Shubham-Mi
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/skills/Java.svg",
    label: "Java",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/skills/cpp.svg",
    label: "C++",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/skills/javascript.svg",
    label: "JavaScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/skills/Html.svg",
    label: "HTML5",
    desc: "Markup Language",
  },
  {
    imgSrc: "/images/skills/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/skills/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/skills/springboot.svg",
    label: "Spring Boot",
    desc: "Framework",
  },
  {
    imgSrc: "/images/skills/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/skills/expressjs.svg",
    label: "Express",
    desc: "Framework",
  },
  {
    imgSrc: "/images/skills/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/skills/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/skills/mysql.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/skills/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/skills/redis.svg",
    label: "Redis",
    desc: "Database",
  },
  {
    imgSrc: "/images/skills/aws.svg",
    label: "AWS",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/images/skills/docker.svg",
    label: "Docker",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/images/skills/kubernetes.svg",
    label: "Kubernetes",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/images/skills/git.svg",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/skills/github.svg",
    label: "GitHub",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/skills/jenkins.svg",
    label: "Jenkins",
    desc: "CI/CD",
  },
  {
    imgSrc: "/images/skills/gitlab.svg",
    label: "GitLab",
    desc: "CI/CD",
  },
  {
    imgSrc: "/images/skills/restfulapi.svg",
    label: "Restful API",
    desc: "API",
  },
  {
    imgSrc: "/images/skills/graphql.svg",
    label: "GraphQL",
    desc: "API",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2">My Tech Arsenal</h2>
        <p className="subtitle">The Tools That Power My Solutions</p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map((item, index) => (
            <SkillCard
              key={index}
              imgSrc={item.imgSrc}
              label={item.label}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
