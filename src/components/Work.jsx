/**
 * @copyright 2024 Shubham-Mi
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const timeline = [
  {
    title: "Software Engineer",
    location: "tinyCo.ai, remote",
    date: "June 2023 - Present",
    desc: "Architected and scaled high-performance email delivery system processing 50M daily emails, while leading critical database migration and API development initiatives.",
    icon: "terminal",
  },
  {
    title: "Software Developer Intern",
    location: "IBM, Bangalore",
    date: "July 2022 - Jan 2023",
    desc: "Conducted comprehensive research and protocol analysis to enhance MaaS360's connectivity capabilities across Bluetooth, BLE, and WiFi technologies.",
    icon: "terminal",
  },
  {
    title: "Indian Institute of Information Technology",
    location: "Pune",
    date: "2019 - 2023",
    desc: "Bachelor of Technology in Computer Science and Engineering",
    icon: "school",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Professional Journey</h2>
        <p className="subtitle">A Timeline of Growth & Achievement</p>
        <div className="">
          <VerticalTimeline lineColor="rgb(250 250 250 / 0.5)">
            {timeline.map((event, index) => (
              <VerticalTimelineElement
                key={index}
                date={event.date}
                dateClassName="date"
                iconClassName="icon"
                icon={
                  <span className="material-symbols-rounded">{event.icon}</span>
                }
                className="timeline-element reveal-up"
              >
                <h3 className="title-1">{event.title}</h3>
                <p className="text-zinc-300">{event.location}</p>
                <p className="text-zinc-400">{event.desc}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Work;
