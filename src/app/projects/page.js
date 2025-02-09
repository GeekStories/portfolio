import { BiSolidArrowToRight } from "react-icons/bi";

function WebsiteCard({ title, link, linkText, description }) {
  return (
    <div className="text-neutral-900 w-80 flex flex-col gap-2 p-2 ">
      <h1 className="font-bold text-xl">{title}.</h1>
      <a className="projectLink" href={link} target="_blank">
        Visit {linkText.toLowerCase()} <BiSolidArrowToRight size="1rem" />
      </a>
      <p className="text-neutral-900 font-mono p-1">{description}</p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="w-11/12  flex flex-col mx-auto gap-5 mt-16">
      <h1 className="sectionTitle">Websites</h1>
      <div className="flex flex-wrap w-full justify-center gap-2 border-t-2 border-black p-2">
        <WebsiteCard
          title="Trades Folder"
          link="https://tradesfolder.com"
          linkText="tradesfolder.com"
          description="A web based platform which will allow users to create a digital version of their Magic: The Gathering trading card collection and turn them into digital trade binders, allowing players to easily and efficiently trade cards with each other."
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
