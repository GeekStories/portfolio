"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { CgDisplayGrid } from "react-icons/cg";
import { RiHomeLine } from "react-icons/ri";

const NavIconSize = "1.5em";
const SocialIconSize = "1.4em";

const NavLinks = [
  {
    href: "/projects",
    icon: <CgDisplayGrid size={NavIconSize} />,
  },
  {
    href: "/edu",
    icon: <FaGraduationCap size={NavIconSize} />,
  },
  {
    href: "/contact",
    icon: <SiMinutemailer size={NavIconSize} />,
  },
];
const SocialLinks = [
  {
    href: "https://github.com/geekStories",
    icon: <AiOutlineGithub size={SocialIconSize} />,
  },
];

export default function NavBar() {
  const path = usePathname();

  return (
    <div className="flex flex-col w-1/3 mx-auto">
      <div className="flex gap-2 justify-center border-b p-2">
        <Link
          href="/"
          className={`navLink ${
            path === "/" ? "navLinkSelected" : "opacity-70"
          }`}
        >
          <RiHomeLine size={NavIconSize} />
        </Link>

        {NavLinks.map((link, index) => (
          <Link
            key={`nav_${index}`}
            href={link.href}
            className={`navLink ${
              path.includes(link.href) ? "navLinkSelected" : "opacity-70"
            }`}
          >
            {link.icon}
          </Link>
        ))}
      </div>

      <div className="flex justify-center p-2">
        {SocialLinks.map((link, index) => (
          <a
            key={`social_${index}`}
            className="socialLink"
            href={link.href}
            target="_blank"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
