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

const NavIconSize = "2em";
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

const SocialIconSize = "1.8em";
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
    <div className="fixed left-0 h-screen ml-2 gap-3 flex top-2 flex-col">
      <div className="flex flex-col gap-2">
        {NavLinks.map((link, index) => (
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
        ))}
      </div>

      <ul className="flex flex-col gap-2 items-center">
        {SocialLinks.map((link, index) => (
          <li key={`social_${index}`}>
            <a href={link.href} target="_blank">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
