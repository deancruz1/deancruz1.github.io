import ncsLogo from "../assets/img/logo-ncs.webp";
import ocbcLogo from "../assets/img/logo-ocbc.webp";

export const workExperiences = [
  {
    logo: ncsLogo,
    title: "Software Engineer",
    company: "NCS",
    type: "Permanent",
    duration: "2026 (Incoming)",
    location: "Singapore",
    description:
      "Hired as a Software Engineer under the NCS Fusion Work-Study Degree Programme, developing software solutions while pursuing a sponsored Bachelor's Degree from a recognised university.",
    responsibilities: [
      "Participate in discussions with stakeholders to understand business and system requirements",
      "Perform technical tasks to develop/enhance software applications according to functional and technical specifications",
      "Maintain and improve software applications",
      "Execute unit, integration, system and user acceptance testing",
      "Using configuration management, integration and build automation tools to deploy application",
      "Identify opportunities and suggest recommendations for system improvement",
    ],
    achievements: [],
    tags: ["React", "Node.js", "Tailwind", "Java", "Python"],
  },
  {
    logo: ocbcLogo,
    title: "Software Test Engineer",
    company: "Oversea-Chinese Banking Corporation",
    type: "Internship",
    duration: "2024 — 2025",
    location: "Singapore",
    description:
      "Developed and maintained automated test scripts for enterprise banking applications using Tricentis Tosca, ensuring software quality across multiple releases.",
    responsibilities: [
      "Develop, execute, and maintain automated test scripts using Tricentis Tosca for core banking applications in Web, Android, and iOS platforms",
      "Collaborate with stakeholders to identify testing requirements and resolve defects",
      "Document test cases, results, and defects in detail to facilitate smooth QA experience and continuous improvement",
    ],
    achievements: [
      "Built and maintained over 800 automated test cases across numerous platforms in regression testing and UAT to improve testing efficiency and reliability",
      "Researched and presented feasibility studies on AI-driven automation tools to senior stakeholders, influencing team tooling decisions",
      "Collaborated with a small team to manually execute and document over 300 test cases in the span of two weeks",
    ],
    tags: ["Tosca", "Test Automation", "Banking", "QA", "Agile"],
  },
];
