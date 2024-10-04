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
    imgSrc: "/images/Java.svg",
    label: "Java",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/cpp.svg",
    label: "C++",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/Html.svg",
    label: "HTML5",
    desc: "Markup Language",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/springboot.svg",
    label: "Spring Boot",
    desc: "Framework",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "Express",
    desc: "Framework",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/redis.svg",
    label: "Redis",
    desc: "Database",
  },
  {
    imgSrc: "/images/aws.svg",
    label: "AWS",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/images/kubernetes.svg",
    label: "Kubernetes",
    desc: "Cloud Services",
  },
  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/github.svg",
    label: "GitHub",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/jenkins.svg",
    label: "Jenkins",
    desc: "CI/CD",
  },
  {
    imgSrc: "/images/gitlab.svg",
    label: "GitLab",
    desc: "CI/CD",
  },
  {
    imgSrc: "/images/restfulapi.svg",
    label: "Restful API",
    desc: "API",
  },
  {
    imgSrc: "/images/graphql.svg",
    label: "GraphQL",
    desc: "API",
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">My Tech Arsenal</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          The Tools That Power My Solutions
        </p>
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
