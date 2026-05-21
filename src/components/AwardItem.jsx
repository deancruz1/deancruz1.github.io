import { awardsData } from "../data/awards.js";

const AwardItem = () => {
  return (
    <div className="relative z-10 flex flex-col gap-4">
      {awardsData.map((award, index) => (
        <div
          key={index}
          className="flex items-start gap-4 border-l-2 border-[var(--accent)] pl-4"
        >
          <img
            src={award.logo}
            alt={award.institution}
            className="mt-1 h-8 w-8 rounded object-contain"
          />
          <div>
            <p className="font-semibold text-[var(--text-primary)]">
              {award.title}
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              {award.institution} · {award.year}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardItem;
