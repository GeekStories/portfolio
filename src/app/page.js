import { Alfa_Slab_One } from "next/font/google";
import { CgArrowLongRight } from "react-icons/cg";

import Link from "next/link";
import Wrapper from "@/components/wrapper";

const inter = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alpha",
});

export default function Home() {
  return (
    <Wrapper
      className={`${inter.variable} font-sans flex flex-col justify-center text-center h-full`}
    >
      <h1 className="text-3xl">Hi,</h1>
      <h2 className="text-3xl">
        I'm <span className="text-blue-600 underline">Damon</span>.
      </h2>
      <p className="text-xl">A Full-Stack Web Developer /</p>
      <p className="text-xl">Hobbyist Game Developer</p>
      <div className="flex justify-center pt-4 w-full">
        <Link
          href="/web"
          className="border-[1px] border-black px-6 rounded animate-pulse opacity-10"
        >
          <CgArrowLongRight size="2em" />
        </Link>
      </div>
    </Wrapper>
  );
}
