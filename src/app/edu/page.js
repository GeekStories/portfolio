export default function Page() {
  const educationData = [
    {
      id: 1,
      title: "Diploma in Web Design and Development",
      institution: "Vision College",
      institution_link:
        "https://visioncollege.ac.nz/study/information-technology/nz-diploma-in-website-development-and-design/",
      date: "Feb 2020 - Nov 2020",
    },
    {
      id: 2,
      title: "Diploma in Software Development",
      institution: "Developers Institute",
      institution_link: "",
      date: "Jun 2021 - Jun 2023",
    },
    {
      id: 3,
      title: "Bachelor of Information Science",
      institution: "Massey University",
      institution_link:
        "https://www.massey.ac.nz/study/all-qualifications-and-degrees/bachelor-of-information-sciences-UBINS/",
      date: "Feb 2025 - Nov 2027",
    },
  ];
  return (
    <div className="min-h-screen">
      <section className="w-full sm:w-2/3 xl:w-1/3  mx-auto py-10 px-4">
        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="border-l-[6px] border-l-blue-500 p-6 pl-4 bg-white rounded-r-lg flex shadow-md flex-col bg-gradient-to-br from-slate-50 via-slate-100 from-45% to-slate-200"
            >
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <span>
                {edu?.institution_link ? (
                  <a href={edu.institution_link} target="_blank" className="text-gray-600">
                    {edu.institution}
                  </a>
                ) : (
                  <p className="text-gray-600">{edu.institution}</p>
                )}
              </span>
              <span className="text-sm text-gray-500">{edu.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
