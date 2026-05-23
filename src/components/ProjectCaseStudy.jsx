const SectionLabel = ({ label }) => (
  <p className="pb-2 text-sm font-bold tracking-widest text-(--accent) uppercase">
    {label}
  </p>
);

const SectionWrapper = ({ label, children }) => (
  <div className="border-t border-(--border) pt-6">
    <SectionLabel label={label} />
    {children}
  </div>
);

const ProjectCaseStudy = ({ caseStudy }) => {
  if (!caseStudy) return null;

  const {
    overview,
    problem,
    solution,
    technicalDecisions,
    challenges,
    improvements,
  } = caseStudy;

  return (
    <div className="flex flex-col gap-6">
      {/* Overview */}
      {overview && (
        <div>
          <SectionLabel label="Overview" />
          <p className="text-lg leading-relaxed text-(--text-secondary)">
            {overview}
          </p>
        </div>
      )}

      {/* Problem */}
      {problem && (
        <SectionWrapper label="Problem">
          <p className="text-lg leading-relaxed text-(--text-secondary)">
            {problem}
          </p>
        </SectionWrapper>
      )}

      {/* Solution */}
      {solution && (
        <SectionWrapper label="Solution">
          <p className="text-lg leading-relaxed text-(--text-secondary)">
            {solution}
          </p>
        </SectionWrapper>
      )}

      {/* Technical Decisions */}
      {technicalDecisions?.length > 0 && (
        <SectionWrapper label="Technical Decisions">
          <ul className="flex flex-col gap-3">
            {technicalDecisions.map((item, i) => (
              <li key={i} className="flex flex-col">
                <span className="font-semibold text-(--text-primary)">
                  {item.decision}
                </span>
                <span className="text-lg leading-relaxed text-(--text-secondary)">
                  {item.reason}
                </span>
              </li>
            ))}
          </ul>
        </SectionWrapper>
      )}

      {/* Challenges */}
      {challenges?.length > 0 && (
        <SectionWrapper label="Challenges & What I Learned">
          <ul className="flex flex-col gap-2">
            {challenges.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-lg leading-relaxed text-(--text-secondary)"
              >
                <span className="mt-1 shrink-0 text-(--text-secondary)">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionWrapper>
      )}

      {/* Improvements */}
      {improvements?.length > 0 && (
        <SectionWrapper label="What I'd Do Differently">
          <ul className="flex flex-col gap-2">
            {improvements.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 text-lg leading-relaxed text-(--text-secondary)"
              >
                <span className="mt-1 shrink-0 text-(--text-secondary)">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionWrapper>
      )}
    </div>
  );
};

export default ProjectCaseStudy;
