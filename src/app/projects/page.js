import { BiSolidArrowToRight } from "react-icons/bi";

function WebsiteCard({ title, link, description }) {
  return (
    <div className="text-neutral-900 w-80 flex flex-col gap-2 p-2 ">
      <h1 className="font-bold text-xl">{title}</h1>
      <a className="projectLink" href={link} target="_blank">
        Visit {title.toLowerCase()}.com <BiSolidArrowToRight size="1rem" />
      </a>
      <p className="text-neutral-900 font-mono p-1">{description}</p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="w-11/12 md:w-9/12 flex flex-col mx-auto gap-5 mt-16">
      <h1 className="sectionTitle">Websites</h1>
      <div className="flex flex-wrap w-full justify-center gap-2 border-t-2 border-black p-2">
        <WebsiteCard
          title="Trades Folder"
          link="https://tradesfolder.com"
          description="A web based platform which will allow users to store their trading card collections digitally, and trade with other users through a custom storefront."
        />
        <WebsiteCard
          title="Paper Scissors Rock"
          link="https://psr.damonpitkethley.com"
          description="A simple Paper Scissors Rock game vs the computer. This was the final project as part of my Level 6 diploma in 2022."
        />
      </div>

      <h1 className="sectionTitle">Games</h1>
      <div className="projectsBoxWrapper">
        <iframe
          src="https://itch.io/embed/2971026?dark=true"
          width="552"
          height="167"
        ></iframe>
        <iframe
          src="https://itch.io/embed/2177443?dark=true"
          width="552"
          height="167"
        ></iframe>
        <iframe
          src="https://itch.io/embed/2772991?dark=true"
          width="552"
          height="167"
        ></iframe>
        <iframe
          src="https://itch.io/embed/2634398?dark=true"
          width="552"
          height="167"
        ></iframe>
      </div>
    </div>
  );
}
