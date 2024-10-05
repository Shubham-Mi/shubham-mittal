/**
 * @copyright 2024 Shubham-Mi
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/Shubham-Mi",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shubham-mittal-701220193/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/_Shubham_Mi",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shubham_m1/",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:shubham.mitt112@gmail.com"
              label="Get in Touch"
              icon="chevron_right"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <p className="mb-2">Sitemap</p>
              <ul className="">
                {sitemap.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <p className="mb-2">Socials</p>
              <ul className="">
                {socials.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">
            <img
              src="/images/Logo.svg"
              width={40}
              height={40}
              alt="Logo"
              className=""
            />
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className="text-zinc-200">Shubham-Mi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
