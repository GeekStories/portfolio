import { BiSolidArrowToRight } from "react-icons/bi";

export default function Page() {
  return (
    <div className="w-11/12 md:w-9/12 flex flex-col mx-auto gap-5 mt-16">
      <div className="projectSectionBody">
        <h1 className="sectionTitle">Games</h1>
        <div className="projectsBoxWrapper">
          <div className="gameProject">
            <h1 className="font-bold text-xl">Web Tycoon</h1>
            <a
              className="projectLink"
              href="https://geekstories.itch.io/web-tycoon"
            >
              Check it out on Itch.io
            </a>
            <p>Description</p>
          </div>
          <div className="gameProject">
            <h1 className="font-bold text-xl" p>
              Idle Realtor
            </h1>
            <a className="projectLink" href="#">
              Not hosted at the moment :(
            </a>
            <p>Description</p>
          </div>
          <div className="gameProject">
            <h1 className="font-bold text-xl">The Yard</h1>
            <a className="projectLink" href="#">
              Not hosted at the moment :(
            </a>
            <p>Description</p>
          </div>
          <div className="gameProject">
            <h1 className="font-bold text-xl">Typewriter</h1>
            <a className="projectLink" href="#">
              Not hosted at the moment :(
            </a>
            <p>Description</p>
          </div>
        </div>
      </div>

      <div className="projectSectionBody">
        <h1 className="sectionTitle">Websites</h1>
        <div className="projectsBoxWrapper">
          <div className="text-neutral-900 bg-fit bg-center p-1">
            <div className="w-full h-full flex flex-col gap-4 p-2 sm:w-11/12 md:w-8/12 lg:w-1/2 mx-auto">
              <h1 className="font-bold text-xl">YGO Collector</h1>
              <p className="text-neutral-900 font-mono rounded border-[1px] border-neutral-900 bg-neutral-50 bg-opacity-30 backdrop-blur-sm p-1 shadow-lg">
                This is a tool I originally built for myself to manage my
                collection of Yugioh trading cards. With this website, users can
                search from a collection of 30k+ Yu-Gi-Oh! cards. <br /> Card
                data is sourced from{" "}
                <a
                  className="externalLink"
                  href="https://ygoprodeck.com"
                  target="_blank"
                >
                  ygoprodeck
                </a>{" "}
                and stored in my database for use here. Card images are
                unavaliable because I don&apos;t have anywhere to store and host 10k+
                images currently. So a placeholder is used in the meantime.
              </p>
              <a
                className="projectLink"
                href="https://ygocollector.com"
                target="_blank"
              >
                Visit Website <BiSolidArrowToRight size="1rem" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
