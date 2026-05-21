import { FaReact, FaNodeJs, FaPython, FaJava, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiSupabase } from "react-icons/si";

export const techs = [
  // Top row: Frontend & Runtime
  { icon: <FaReact size={54} />, label: "React" },
  { icon: <SiTypescript size={54} />, label: "TypeScript" },
  { icon: <SiTailwindcss size={54} />, label: "Tailwind" },
  { icon: <FaNodeJs size={54} />, label: "Node.js" },

  // Bottom row: Backend & Infrastructure
  { icon: <FaPython size={54} />, label: "Python" },
  { icon: <FaJava size={54} />, label: "Java" },
  { icon: <FaPhp size={54} />, label: "PHP" },
  { icon: <SiSupabase size={54} />, label: "Supabase" },
];
