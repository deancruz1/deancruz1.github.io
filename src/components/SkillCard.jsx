import { motion } from "framer-motion";

const SkillCard = ({ icon, label, small }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.2 }}
    className="relative flex aspect-square w-full flex-col items-center rounded-xl bg-(--bg-tertiary) p-4 transition-colors duration-300 hover:bg-(--accent)/20"
  >
    <span className="absolute inset-0 flex items-center justify-center pb-4 text-(--accent)">
      {icon}
    </span>
    <span className={`absolute bottom-2 w-full text-center leading-tight text-(--text-primary) ${small ? "text-[10px]" : "text-xs"}`}>
      {label}
    </span>
  </motion.div>
);

export default SkillCard;