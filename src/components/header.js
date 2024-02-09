"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import { MdOutlineMailOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BiHomeAlt2 } from "react-icons/bi";
import { SlGameController } from "react-icons/sl";

const NavIconSize = "1.5em";
const SocialIconSize = "1.4em";

const NavLinks = [
  {
    href: "/",
    icon: <BiHomeAlt2 size={NavIconSize} />,
  },
  {
    href: "/projects",
    icon: <CgWebsite size={NavIconSize} />,
  },
  {
    href: "/gaming",
    icon: <SlGameController size={NavIconSize} />,
  },
  {
    href: "/contact",
    icon: <MdOutlineMailOutline size={NavIconSize} />,
  },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <ul className="flex justify-center gap-2 left-2 top-2 w-full p-2">
      {NavLinks.map((link, index) => (
        <li
          key={`nav_${index}`}
          className={`${
            path === link.href
              ? "bg-slate-100 shadow rounded-full opacity-100 transform active:scale-90"
              : "opacity-70"
          } p-2 transition-all ease-in-out delay-75 hover:bg-slate-100 hover:shadow hover:rounded-full hover:opacity-100`}
        >
          <Link href={link.href}>{link.icon}</Link>
        </li>
      ))}
      <li className="socialLink">
        <a href="https://twitter.com/geek_stories" target="_blank">
          <AiOutlineTwitter size={SocialIconSize} />
        </a>
      </li>

      <li className="socialLink">
        <a href="https://www.linkedin.com/in/damon-pitkethley/" target="_blank">
          <AiOutlineLinkedin size={SocialIconSize} />
        </a>
      </li>

      <li className="socialLink">
        <a href="https://github.com/geekStories" target="_blank">
          <AiOutlineGithub size={SocialIconSize} />
        </a>
      </li>
    </ul>
  );
}
