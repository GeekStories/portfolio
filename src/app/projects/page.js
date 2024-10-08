import { BiSolidArrowToRight } from "react-icons/bi";

export default function Page() {
  return (
    <div className="w-11/12 md:w-9/12 flex flex-col mx-auto gap-5 mt-16">
      <h1 className="sectionTitle">Games</h1>
      <div className="projectsBoxWrapper">
        <iframe
          frameborder="0"
          src="https://itch.io/embed/2177443?dark=true"
          width="552"
          height="167"
        ></iframe>
        <iframe
          frameborder="0"
          src="https://itch.io/embed/2634398?dark=true"
          width="552"
          height="167"
        ></iframe>
        <iframe
          frameborder="0"
          src="https://itch.io/embed/2772991?linkback=true&amp;bg_color=2f2f2f&amp;fg_color=ffffff&amp;link_color=000000&amp;border_color=585858"
          width="552"
          height="167"
        ></iframe>
      </div>

      <div className="projectSectionBody">
        <h1 className="sectionTitle">Websites</h1>
        <div className="flex flex-col lg:flex-row gap-5 w-full justify-center border-t-2 border-black p-2">
          <div className="text-neutral-900 bg-fit bg-center p-1">
            <div className="w-full h-full flex flex-col gap-4 p-2  mx-auto">
              <h1 className="font-bold text-xl">Paper Scissors Rock</h1>
              <p className="text-neutral-900 font-mono rounded border-[1px] border-neutral-900 bg-neutral-50 bg-opacity-30 backdrop-blur-sm p-1 shadow-lg">
                This is a simple Paper Scissors Rock game that you can play
                against the computer. This was the final project as part of my
                L6 diploma in 2022. We had to integrate a provided model into a
                React web app, and usign the web cam detect a users hand pose.
                The model is a little funky, try to keep just your hand in the
                frame, but dont worry too much. As long as its a clear shot.
                Check the poses by turning off the camera option in the top
                right (if not already disabled). The poses in the images are
                what the model looks for.
              </p>
              <a
                className="projectLink"
                href="https://psr.damonpitkethley.com/"
                target="_blank"
              >
                Visit Website <BiSolidArrowToRight size="1rem" />
              </a>
            </div>
          </div>

          <div className="text-neutral-900 bg-fit bg-center p-1">
            <div className="w-full h-full flex flex-col gap-4 p-2 mx-auto">
              <h1 className="font-bold text-xl">YGOCollector</h1>
              <p className="text-neutral-900 font-mono rounded border-[1px] border-neutral-900 bg-neutral-50 bg-opacity-30 backdrop-blur-sm p-1 shadow-lg">
                This is a tool I built so I could practice using Typescript in
                NextJS. I use both ssr and csr to render the site; an ExpressJS
                server on Render that connects to a MongoDB Atlast Cluster for
                card data, as well as a static site on Netlify serving the
                11,000+ card images. This was a mighty task for me, as I wasn't
                sure how to host such a large quantity of images. I have an
                ExpressJS api hosted on Render, and a server on Netlify acting
                as a CDN to serve the 11,000+ images.
              </p>
              <a
                className="projectLink"
                href="https://ygo.damonpitkethley.com/"
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
