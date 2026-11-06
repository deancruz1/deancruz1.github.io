const SectionHeader = ({ number, title, subtitle, className }) => {
  return (
    <div className={className}>
      <p className="text-xs font-bold tracking-[0.18em] text-(--accent-text) uppercase md:text-sm">
        {number} · {subtitle}
      </p>
      <h2 className="mt-2 text-4xl leading-tight font-bold tracking-tight text-(--text-primary) md:text-5xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
