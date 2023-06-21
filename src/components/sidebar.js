"use client";

import Link from "next/link";
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
  },
  {
    href: "https://www.linkedin.com/in/damon-pitkethley/",
    icon: <AiOutlineLinkedin size={SocialIconSize} />,
  },
  {
    href: "https://twitter.com/geek_stories",
    icon: <AiOutlineTwitter size={SocialIconSize} />,
  },
];

export default function Sidebar() {
  const path = usePathname();
  const router = useRouter();

  return (
    <div className="fixed left-0 h-screen p-2 items-center flex top-4 flex-col">
      <div className="flex flex-col">
        {NavLinks.map((link, index) => (
          <button
            key={`nav_${index}`}
            onClick={() => router.push(link.href)}
            className={`${
              path === link.href
                ? "bg-slate-100 shadow rounded-full opacity-100 transform active:scale-75"
                : "opacity-60"
            } p-2 transition-all ease-in-out delay-75`}
          >
            {link.icon}
          </button>
        ))}
      </div>

      <ul className="flex flex-col">
        {SocialLinks.map((link, index) => (
          <li key={`social_${index}`} className="p-1">
            <Link href={link.href} target="_blank">
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
