import { Alfa_Slab_One } from "next/font/google";
import Wrapper from "@/components/wrapper";

const inter = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alpha",
});

export default function Home() {
  return (
    <Wrapper
      className={`${inter.variable} font-sans flex flex-col pt-24 text-center h-screen`}
    >
      <h1 className="text-3xl">Hi,</h1>
      <h2 className="text-3xl">
        Im <span className="text-blue-600 underline">Damon</span>.
      </h2>
      <p className="text-xl">A Full-Stack Web Developer /</p>
      <p className="text-xl">Hobbyist Game Developer</p>
    </Wrapper>
  );
}
