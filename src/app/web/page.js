import Wrapper from "@/components/wrapper";
import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";

export default function Page() {
  const techImageWidth = 50;
  const techImageHeight = 50;

  return (
    <Wrapper className="flex flex-col gap-16 text-center lg:p-16">
      <div className="text-neutral-900 bg-[url('/ygocollector.jpg')] bg-fit bg-center p-1">
        <div className="w-full h-full flex flex-col gap-4 p-2 sm:w-11/12 md:w-8/12 lg:w-1/2 mx-auto">
          <p className="text-neutral-900 font-serif rounded border-[1px] border-neutral-900 bg-neutral-50 bg-opacity-30 backdrop-blur-sm p-1 shadow-lg">
            <span className="font-bold">YGO Collector</span> is a tool I
            originally built for myself to manage my collection of trading
            cards. Users can search 30k+ Yu-Gi-Oh! cards. Users can create
            collections and decks after signing up. <br />
            Card data and art are both pulled from{" "}
            <a
              className="externalLink"
              href="https://yugiohprices.com/"
              target="_blank"
            >
              yugiohprices
            </a>{" "}
            API and stored for use in this application. The website also
            utilizes{" "}
            <a
              className="externalLink"
              href="https://ygoprodeck.com"
              target="_blank"
            >
              ygoprodeck
            </a>{" "}
            to display more card information when you hover over a cards name
            text. Stored card images are hosted on my Raspberry Pi 4b running a
            https node-express server and are served to the website via a no-ip
            dynamic DNS service.
          </p>
          <div className="flex justify-center gap-2 items-center rounded border-[1px] border-neutral-900 bg-neutral-50 bg-opacity-30 backdrop-blur-sm p-1 shadow-sm mx-auto">
            <a href="https://nextjs.org/" target="_blank">
              <Image
                src="/nextjs.png"
                alt="Next.js"
                width={techImageWidth}
                height={techImageHeight}
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank">
              <Image
                src="/tailwindcss.png"
                alt="Tailwind CSS"
                width={techImageWidth}
                height={techImageHeight}
              />
            </a>
            <a href="https://www.postgresql.org/" target="_blank">
              <Image
                src="/postgres.png"
                alt="PostgreSQL"
                width={techImageWidth}
                height={techImageHeight}
              />
            </a>
            <a href="https://clerk.dev/" target="_blank">
              <Image
                src="/clerk.png"
                alt="Clerk"
                width={techImageWidth}
                height={techImageHeight}
              />
            </a>
            <a href="https://vercel.com/" target="_blank">
              <Image
                src="/vercel.png"
                alt="Vercel"
                width={techImageWidth}
                height={techImageHeight}
              />
            </a>
          </div>
          <a
            className="flex items-center justify-center gap-3 bg-blue-500 rounded text-sm text-white px-4 py-2 w-1/2 mx-auto"
            href="https://ygocollector.com"
            target="_blank"
          >
            Visit Website <BsArrowRight size="1rem" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
