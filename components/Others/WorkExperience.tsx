import { Experience } from "@/helpers";

const WorkExperience = () => {
  const experiences: Experience[] = [
    {
      company_name: "Hindsight VIP",
      position: "Frontend Engineer",
      duration: "November 2023 - Present",
      link: "hindsight.vip",
    },
    {
      company_name: "CastleHub",
      position: "Frontend Engineer",
      duration: "June 2024 - December 2024",
      link: "castlehub.io",
    },
    {
      company_name: "ToolAI",
      position: "Software Engineer",
      duration: "March 2024 - September 2024",
      link: "toolai.ai",
    },
  ];
  return (
    <div className="flex items-start flex-col md:flex-row gap-5">
      {/* Title */}
      <h2 className="font-[family-name:var(--font-romanesco)] text-3xl md:w-1/2">
        Work
      </h2>

      <div className="md:w-1/2 w-full space-y-5">
        {experiences.map((experience, index) => (
          <div key={index} className="flex gap-5 items-start">
            <div className="w-1/2">
              <h3 className="font-medium">{experience.company_name}</h3>
              <p>{experience.link}</p>
            </div>
            <div className="w-1/2">
              <h3 className="font-medium">{experience.position}</h3>
              <p>{experience.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
