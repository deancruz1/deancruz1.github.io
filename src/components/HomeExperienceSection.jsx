import { workExperiences } from "../data/work-experience.js";
import SectionHeader from "../components/SectionHeader.jsx";
import WorkExperienceCard from "../components/WorkExperienceCard.jsx";

const HomeExperienceSection = () => (
  <section className="my-4 px-8 py-8 md:my-6 md:py-16 home-section" id="experience">
    <SectionHeader
      title="Work Experience"
      subtitle="My professional journey"
      className="mb-6 md:mb-10"
    />
    <div>
      {workExperiences.map((exp, i) => (
        <WorkExperienceCard key={i} {...exp} />
      ))}
    </div>
  </section>
);

export default HomeExperienceSection;
