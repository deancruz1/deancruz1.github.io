import ncsLogo from "../assets/img/logo-ncs.webp";
import ocbcLogo from "../assets/img/logo-ocbc.webp";

export const workExperiences = [
  {
    logo: ncsLogo,
    title: "AI Software Engineer",
    company: "NCS Group",
    type: "Permanent",
    duration: "2026 — Present",
    location: "Singapore",
    summary:
      "Legacy Java modernisation, plus a full-stack Angular and Spring Boot app where I designed the key front-end components. Planned and reviewed with NCS's in-house AI agent and OpenSpec. Part of the Fusion Work-Study Programme (sponsored UOW degree).",
    highlights: [
      {
        value: "800+",
        label: "JDBC queries migrated to MyBatis",
        detail:
          "Migrated 800+ raw JDBC queries to MyBatis 3, then validated and tuned all 1,600+ queries to fetch only the data they need, with no behavioural regressions.",
      },
      {
        value: "6 → 7",
        label: "JasperReports upgrade",
        detail:
          "Owned the JasperReports 6 → 7 upgrade on a legacy application, fixing a production bug that broke report rendering in Excel exports.",
      },
      {
        value: "6 + 24",
        label: "EJB endpoints to SOAP, 24 in progress",
        detail:
          "Migrated 6 EJB endpoints to SOAP web services on both provider and consumer sides; now migrating 24 more consumer endpoints for another service.",
      },
    ],
    tags: ["Java", "Spring Boot", "MyBatis", "Hibernate", "MySQL", "EJB", "SOAP", "JasperReports", "Angular"],
  },
  {
    logo: ocbcLogo,
    title: "Software Test Engineer",
    company: "Oversea-Chinese Banking Corporation",
    type: "Internship",
    duration: "2024 — 2025",
    location: "Singapore",
    summary:
      "Test automation for OCBC's core banking apps on web, Android and iOS.",
    highlights: [
      {
        value: "800+",
        label: "automated Tosca test cases",
        detail:
          "Built and maintained 800+ automated Tosca test cases across web, Android and iOS regression and UAT suites.",
      },
      {
        value: "300+",
        label: "manual test cases in two weeks",
        detail:
          "Executed and documented 300+ manual test cases in two weeks as part of a small team.",
      },
      {
        value: "AI",
        label: "test tooling study",
        detail:
          "Evaluated AI-driven test automation tools and presented the feasibility study to senior stakeholders, which fed into the team's tooling decision.",
      },
    ],
    tags: ["Tosca", "Test Automation", "Banking", "QA", "Agile"],
  },
];
