import { FaReact, FaNodeJs, FaPython, FaJava, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

export const techs = [
  // Top row: Frontend & Meta-frameworks
  { icon: <FaReact size={54} />, label: "React" },
  { icon: <SiNextdotjs size={54} />, label: "Next.js" },
  { icon: <SiTypescript size={54} />, label: "TypeScript" },
  { icon: <SiTailwindcss size={54} />, label: "Tailwind" },

  // Bottom row: Backend & Languages
  { icon: <FaNodeJs size={54} />, label: "Node.js" },
  { icon: <FaPython size={54} />, label: "Python" },
  { icon: <FaJava size={54} />, label: "Java" },
  { icon: <FaPhp size={54} />, label: "PHP" },
];
