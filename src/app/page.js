import { Alfa_Slab_One } from "next/font/google";

const inter = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alpha",
});

export default function Page() {
  return (
    <div className={`${inter.variable} font-sans flex justify-center`}>
      <div className="text-center py-20">
        <h1 className="text-3xl">Hi,</h1>
        <h2 className="text-3xl">
          Im <span className="text-blue-600 underline">Damon</span>.
        </h2>
        <p className="text-xl">A Full-Stack Web Developer /</p>
        <p className="text-xl">Game Developer</p>
      </div>
    </div>
  );
}
