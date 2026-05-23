import Grid from "./Grid";

const WorkExperienceCard = ({
  logo,
  title,
  company,
  type,
  duration,
  location,
  description,
  responsibilities = [],
  achievements = [],
  tags = [],
}) => {
  return (
    <div className="relative my-8 flex gap-4">
      {/* Vertical line - hidden on mobile */}
      <div className="relative hidden sm:block">
        <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-(--accent) opacity-85" />
        {/* Circle aligned with text */}
        <div
          className="sticky top-6 h-3.5 w-3.5 rounded-full border-2 border-(--bg-secondary) bg-(--accent)"
          style={{ marginLeft: "-7px" }}
        />
      </div>
      <div className="relative overflow-hidden rounded-2xl bg-(--bg-secondary) p-6">
        <Grid />
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-4 flex items-center gap-4">
            <img
              src={logo}
              alt={company}
              className="h-12 w-12 rounded-lg object-contain"
            />
            <div>
              <h3 className="text-xl font-bold text-(--text-primary)">
                {title}
              </h3>
              <p className="text-sm text-(--text-secondary)">
                <span className="font-semibold text-(--text-primary)">
                  {company}
                </span>{" "}
                · {type}
              </p>
              <p className="text-sm text-(--text-muted)">
                {duration} · {location}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm text-(--text-secondary)">{description}</p>

          {/* Responsibilities */}
          {responsibilities.length > 0 && (
            <>
              <p className="py-2 text-lg font-bold text-(--text-primary)">
                Key Responsibilities:
              </p>
              <ul className="mb-4 flex list-inside list-disc flex-col gap-1 text-sm text-(--text-secondary)">
                {responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <>
              <p className="py-2 text-lg font-bold text-(--text-primary)">
                Achievements:
              </p>
              <ul className="mb-4 flex list-inside list-disc flex-col gap-1 text-sm text-(--text-secondary)">
                {achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-(--border) bg-(--bg-tertiary) px-3 py-1 text-xs text-(--text-secondary)"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
