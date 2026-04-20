function WebsiteCard({ title, link, description }) {
  return (
    <div className="text-neutral-900 w-1/4 flex flex-col gap-2 p-2 ">
      <h1 className="font-bold text-3xl underline">
        <a href={link} target="_blank">
          {title}
        </a>
      </h1>
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
          link="https://tradesfolder.damonpitkethley.com"
          linkText="tradesfolder.com"
          description="A platform for MTG players to create a digital version of their Magic: The Gathering trading card collection and turn them into digital trade binders, allowing players to easily and efficiently trade cards with each other."
        />

        <WebsiteCard
          title="Project Lemons"
          link="https://playlemons.com"
          linkText="playlemons.com"
          description="A cozy lemonade stand economy simulator about about reading the map, understanding demand, and out-thinking your competitors. Start small with a single stand on a street corner. Manage your margins, and try to turn a profit. "
        />
      </div>

      <h1 className="sectionTitle">
        <s>Projects</s> <i>Prototypes</i>
      </h1>
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
        <iframe
          src="https://itch.io/embed/3294469?dark=true"
          width="552"
          height="167"
        ></iframe>
        <iframe
          frameborder="0"
          src="https://itch.io/embed/4116478?dark=true"
          width="552"
          height="167"
        ></iframe>
      </div>
    </div>
  );
}
