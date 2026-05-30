import { FaReact, FaPython, FaJava, FaPhp, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiAngular, SiSpringboot, SiPrisma, SiPostgresql, SiMysql, SiFramer, SiHibernate, SiSupabase } from "react-icons/si";

export const techs = [
  // Featured (default visible)
  { icon: <FaReact size={50} />, label: "React", featured: true },
  { icon: <SiAngular size={50} />, label: "Angular", featured: true },
  { icon: <SiTypescript size={50} />, label: "TypeScript", featured: true },
  { icon: <SiTailwindcss size={50} />, label: "Tailwind", featured: true },
  { icon: <SiNextdotjs size={50} />, label: "Next.js", featured: true },
  { icon: <SiSpringboot size={50} />, label: "Spring Boot", featured: true },
  { icon: <FaJava size={50} />, label: "Java", featured: true },
  { icon: <FaPhp size={50} />, label: "PHP", featured: true },

  // Extended
  { icon: <FaPython size={50} />, label: "Python", featured: false },
  { icon: <SiHibernate size={50} />, label: "Hibernate", featured: false },
  { icon: <SiPostgresql size={50} />, label: "PostgreSQL", featured: false },
  { icon: <SiMysql size={50} />, label: "MySQL", featured: false },
  { icon: <SiPrisma size={50} />, label: "Prisma", featured: false },
  { icon: <SiFramer size={50} />, label: "Framer Motion", featured: false },
  { icon: <SiSupabase size={50} />, label: "Supabase", featured: false },
  { icon: <FaGitAlt size={50} />, label: "Git", featured: false },
];