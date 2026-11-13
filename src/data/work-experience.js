import ncsLogo from "../assets/img/logo-ncs.webp";
import ocbcLogo from "../assets/img/logo-ocbc.webp";
import rpLogo from "../assets/img/rp.webp";
import uowLogo from "../assets/img/uow.webp";

export const xpEntries = [
  {
    id: "ncs",
    group: "work",
    logo: ncsLogo,
    name: "NCS Group",
    navSub: "AI Software Engineer · 2026 — Present",
    role: "AI Software Engineer",
    meta: "NCS Group · 2026 — Present · Permanent · Singapore",
    summary:
      "Designed the key frontend components of a full-stack Angular and Spring Boot app, alongside legacy Java modernisation.",
    accordions: [
      {
        title: "800+ JDBC queries migrated to MyBatis 3",
        body: "Migrated 800+ raw JDBC queries to MyBatis 3, then validated and tuned all 1,600+ queries to fetch only the data they need, with no behavioural regressions.",
      },
      {
        title: "JasperReports 6 to 7 upgrade",
        body: "Owned the upgrade on a legacy application, fixing a production bug that broke report rendering in Excel exports.",
      },
      {
        title: "6 EJB endpoints migrated to SOAP",
        body: "Migrated 6 EJB endpoints to SOAP web services on both provider and consumer sides; now migrating 24 more consumer endpoints for another service.",
      },
    ],
    stack:
      "Angular / Java / Spring Boot / MyBatis / Hibernate / MySQL / EJB / SOAP / JasperReports",
  },
  {
    id: "ocbc",
    group: "work",
    logo: ocbcLogo,
    name: "OCBC",
    navSub: "Software Test Engineer · 2024 — 2025",
    role: "Software Test Engineer",
    meta: "Oversea-Chinese Banking Corporation · 2024 — 2025 · Internship · Singapore",
    summary:
      "Test automation for OCBC's core banking apps on web, Android and iOS.",
    accordions: [
      {
        title: "800+ automated Tosca test cases",
        body: "Built and maintained 800+ automated Tosca test cases across web, Android and iOS regression and UAT suites.",
      },
      {
        title: "300+ manual test cases in two weeks",
        body: "Executed and documented 300+ manual test cases in two weeks as part of a small team.",
      },
      {
        title: "AI test tooling study",
        body: "Evaluated AI-driven test automation tools and presented the feasibility study to senior stakeholders, which fed into the team's tooling decision.",
      },
    ],
    stack: "Tosca / Test Automation / Banking / QA / Agile",
  },
  {
    id: "uow",
    group: "study",
    logo: uowLogo,
    name: "University of Wollongong",
    navSub: "Computer Science · 2026 — 2028",
    role: "Bachelor of Computer Science (Artificial Intelligence and Big Data)",
    meta: "University of Wollongong · 2026 — 2028 · Part-time · Singapore",
    summary: "Studied part-time alongside full-time work at NCS.",
    lines: [
      {
        label: "NCS Fusion Work-Study Programme",
        value: "Sponsored degree",
      },
    ],
  },
  {
    id: "rp",
    group: "study",
    logo: rpLogo,
    name: "Republic Polytechnic",
    navSub: "Diploma · 2022 — 2025",
    role: "Diploma in Digital Design and Development",
    meta: "Republic Polytechnic · 2022 — 2025 · Singapore",
    facts: [{ value: "3.97", label: "GPA, out of 4.00" }],
    lines: [
      { label: "IMDA Gold Medal", value: "2025" },
      { label: "Diploma Prize, Year 2", value: "2024" },
      { label: "Diploma Prize, Year 1", value: "2023" },
      { label: "Director's Roll of Honour, Years 1 — 3", value: "2023 — 2025" },
    ],
  },
];
