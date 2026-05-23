const SectionHeader = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h2 className="mb-2 text-center text-3xl font-semibold text-(--text-primary) md:text-5xl">
        {title}
      </h2>
      <h3 className="text-md text-center text-(--text-secondary) md:text-xl">
        {subtitle}
      </h3>
    </div>
  );
};

export default SectionHeader;
