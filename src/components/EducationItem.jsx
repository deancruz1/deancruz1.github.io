import { educationData } from "../data/education.js";

const EducationCard = () => {
  return (
    <>
      <div className="relative z-10 flex flex-col gap-4">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex items-stretch gap-4 border-l-2 border-[#6864e7] pl-4"
          >
            <div className="flex items-center">
              <img
                src={edu.logo}
                alt={edu.school}
                className="h-full max-h-15 w-auto object-contain"
              />
            </div>
            <div>
              <p className="font-semibold text-white">{edu.degree}</p>
              <p className="text-sm text-gray-400">
                {edu.school} · {edu.duration}
              </p>
              <p className="text-sm font-semibold text-[#6864e7]">
                GPA: {edu.gpa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EducationCard;
