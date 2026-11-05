import { FaReact, FaPython, FaJava, FaPhp, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiAngular, SiSpringboot, SiPrisma, SiPostgresql, SiMysql, SiFramer, SiHibernate, SiSupabase, SiReactquery, SiVercel, SiVite } from "react-icons/si";

export const techs = [
  // The first four of frontend and backend show by default
  // Frontend
  { icon: <FaReact size={50} />, label: "React", group: "frontend" },
  { icon: <SiTypescript size={50} />, label: "TypeScript", group: "frontend" },
  { icon: <SiNextdotjs size={50} />, label: "Next.js", group: "frontend" },
  { icon: <SiTailwindcss size={50} />, label: "Tailwind", group: "frontend" },
  { icon: <SiReactquery size={50} />, label: "TanStack Query", group: "frontend" },
  { icon: <SiFramer size={50} />, label: "Framer Motion", group: "frontend" },

  // Backend
  { icon: <FaJava size={50} />, label: "Java", group: "backend" },
  { icon: <SiSpringboot size={50} />, label: "Spring Boot", group: "backend" },
  { icon: <FaDatabase size={50} />, label: "MyBatis", group: "backend" },
  { icon: <SiHibernate size={50} />, label: "Hibernate", group: "backend" },
  { icon: <SiMysql size={50} />, label: "MySQL", group: "backend" },
  { icon: <SiPostgresql size={50} />, label: "PostgreSQL", group: "backend" },
  { icon: <SiPrisma size={50} />, label: "Prisma", group: "backend" },

  // Other (expanded only)
  { icon: <SiAngular size={50} />, label: "Angular", group: "other" },
  { icon: <SiSupabase size={50} />, label: "Supabase", group: "other" },
  { icon: <SiVercel size={50} />, label: "Vercel", group: "other" },
  { icon: <SiVite size={50} />, label: "Vite", group: "other" },
  { icon: <FaGitAlt size={50} />, label: "Git", group: "other" },
  { icon: <FaPhp size={50} />, label: "PHP", group: "other" },
  { icon: <FaPython size={50} />, label: "Python", group: "other" },
];
