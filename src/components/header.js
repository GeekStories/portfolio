"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import { CgFeed } from "react-icons/cg";
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
    href: "/blog",
    icon: <CgFeed size={NavIconSize} />,
  },
  {
    href: "/contact",
    icon: <SiMinutemailer size={NavIconSize} />,
  },
];
const SocialLinks = [
  {
    href: "https://twitter.com/geek_stories",
    icon: <AiOutlineTwitter size={SocialIconSize} />,
  },
  {
    href: "https://www.linkedin.com/in/damon-pitkethley",
    icon: <AiOutlineLinkedin size={SocialIconSize} />,
  },
  {
    href: "https://github.com/geekStories",
    icon: <AiOutlineGithub size={SocialIconSize} />,
  },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <div className="flex justify-center gap-2 left-2 top-2 w-full p-2">
      <Link
        href="/"
        className={`navLink ${path === "/" ? "navLinkSelected" : "opacity-70"}`}
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
  );
}
