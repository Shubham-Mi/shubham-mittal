/**
 * @copyright 2024 Shubham-Mi
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 10,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hello! I&apos;m Shubham, a software engineer who thrives at the
            intersection of innovation. With a keen eye for detail and a passion
            for problem-solving, I architect digital solutions that go beyond
            mere functionality. I believe in writing code that tells a story,
            one of efficiency, innovation, and excellence.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {item.number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{item.label}</p>
              </div>
            ))}
            <img
              src="/public/images/Logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w=[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
