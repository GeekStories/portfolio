"use client";
import { usePathname, useRouter } from "next/navigation";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import { MdOutlineMailOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BiHomeAlt2 } from "react-icons/bi";
import { GrGamepad } from "react-icons/gr";

const NavIconSize = "1.5em";
const NavLinks = [
  {
    href: "/",
    icon: <BiHomeAlt2 size={NavIconSize} />,
  },
  {
    href: "/web",
    icon: <CgWebsite size={NavIconSize} />,
  },
  {
    href: "/games",
    icon: <GrGamepad size={NavIconSize} />,
  },
  {
    href: "/contact",
    icon: <MdOutlineMailOutline size={NavIconSize} />,
  },
];

const SocialIconSize = "1.4em";
const SocialLinks = [
  {
    href: "https://github.com/geekStories",
    icon: <AiOutlineGithub size={SocialIconSize} />,
    content: "github",
  },
  {
    href: "https://www.linkedin.com/in/damon-pitkethley/",
    icon: <AiOutlineLinkedin size={SocialIconSize} />,
    content: "linkedin",
  },
  {
    href: "https://twitter.com/geek_stories",
    icon: <AiOutlineTwitter size={SocialIconSize} />,
    content: "twitter",
  },
];

export default function Sidebar() {
  const path = usePathname();
  const router = useRouter();

  return (
    <ul className="fixed top-0 flex justify-evenly h-16 sm:justify-center sm:gap-4 items-center w-full pt-1">
      {NavLinks.map((link, index) => (
        <li>
          <button
            key={`nav_${index}`}
            onClick={() => router.push(link.href)}
            className={`${
              path === link.href
                ? "bg-slate-100 shadow rounded-full opacity-100 transform active:scale-90"
                : "opacity-70"
            } p-2 transition-all ease-in-out delay-75 hover:bg-slate-100 hover:shadow hover:rounded-full hover:opacity-100`}
          >
            {link.icon}
          </button>
        </li>
      ))}
      {SocialLinks.map((link, index) => (
        <li key={`social_${index}`}>
          <a className="p-2" href={link.href} target="_blank">
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
