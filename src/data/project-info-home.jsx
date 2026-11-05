import fansiteImg from "../assets/img/project-cards/fansite.webp";
import landingPageImg from "../assets/img/project-cards/landing-page.webp";
import mobileWireframeImg from "../assets/img/project-cards/mobile-wireframe.webp";
import movietopiaImg from "../assets/img/project-cards/movietopia.webp";
import portfolioImg from "../assets/img/project-cards/portfolio-website.webp";
import landingPageVideo from "../assets/videos/landing-page.mp4";
import fansiteVideo from "../assets/videos/fansite.mp4";
import movietopiaVideo from "../assets/videos/movietopia.mp4";
import wireframeVideo from "../assets/videos/wireframe.mp4";
import portfolioVideo from "../assets/videos/portfolio-website.mp4";
import kirokuImg from "../assets/img/project-cards/kiroku.webp";
import kirokuVideo from "../assets/videos/kiroku.mp4";
import uraraImg from "../assets/img/project-cards/urara.webp";
import uraraVideo from "../assets/videos/urara.mp4";
import skillforgeImg from "../assets/img/project-cards/skillforge.webp";
import skillforgeVideo from "../assets/videos/skillforge.mp4";
import oshiwatchImg from "../assets/img/project-cards/oshiwatch.webp";
import oshiwatchVideo from "../assets/videos/oshiwatch.mp4";

const oshiwatchGallery = import.meta.glob(
  "../assets/img/project-gallery/oshiwatch/*.webp",
  { eager: true },
);
const oshiwatchGalleryImages = Object.values(oshiwatchGallery).map(
  (m) => m.default,
);

const skillforgeGallery = import.meta.glob(
  "../assets/img/project-gallery/skillforge/*.webp",
  { eager: true },
);
const skillforgeGalleryImages = Object.values(skillforgeGallery).map(
  (m) => m.default,
);

const uraraGallery = import.meta.glob(
  "../assets/img/project-gallery/urara/*.webp",
  { eager: true },
);
const uraraGalleryImages = Object.values(uraraGallery).map((m) => m.default);

const kirokuGallery = import.meta.glob(
  "../assets/img/project-gallery/kiroku/*.webp",
  { eager: true },
);
const kirokuGalleryImages = Object.values(kirokuGallery).map((m) => m.default);

const landingPageGallery = import.meta.glob(
  "../assets/img/project-gallery/landing-page/*.webp",
  { eager: true },
);
const landingPageGalleryImages = Object.values(landingPageGallery).map(
  (m) => m.default,
);

const fansiteGallery = import.meta.glob(
  "../assets/img/project-gallery/fansite/*.webp",
  { eager: true },
);
const fansiteGalleryImages = Object.values(fansiteGallery).map(
  (m) => m.default,
);

const movietopiaGallery = import.meta.glob(
  "../assets/img/project-gallery/movietopia/*.webp",
  { eager: true },
);
const movietopiaGalleryImages = Object.values(movietopiaGallery).map(
  (m) => m.default,
);

const wireframeGallery = import.meta.glob(
  "../assets/img/project-gallery/wireframe/*.webp",
  { eager: true },
);
const wireframeGalleryImages = Object.values(wireframeGallery).map(
  (m) => m.default,
);

const portfolioGallery = import.meta.glob(
  "../assets/img/project-gallery/portfolio-website/*.webp",
  { eager: true },
);

const portfolioGalleryImages = Object.values(portfolioGallery).map(
  (m) => m.default,
);

const galleryThumbs = import.meta.glob(
  "../assets/img/project-gallery/*/thumbs/*.webp",
  { eager: true },
);
// Smaller copies of a project's gallery images, in the same order
const thumbsFor = (folder) =>
  Object.keys(galleryThumbs)
    .filter((path) => path.includes(`/project-gallery/${folder}/thumbs/`))
    .sort()
    .map((path) => galleryThumbs[path].default);

export const projects = [
  // Case study:
  //   caseStudy: {
  //   problem: ``,
  //   solution: ``,
  //   technicalDecisions: [
  //     {
  //       decision: "",
  //       reason: "",
  //     },
  //   ],
  //   challenges: [``],
  //   improvements: [``],
  // },

  {
    title: "SkillForge",
    featured: false,
    category: "Full-Stack",
    description:
      "An e-learning platform where instructors build courses and quizzes, and students get graded automatically.",
    features: [
      {
        title: "Database",
        text: "A 9-table PostgreSQL schema with composite keys, cascades, CHECK constraints and UUID primary keys.",
      },
      {
        title: "REST API",
        text: "Spring Boot with Spring Security, JWT auth, BCrypt hashing, role-based access and DTOs.",
      },
      {
        title: "ORM mapping",
        text: "Hibernate entities with many-to-many junction tables, lazy loading and embedded composite IDs.",
      },
      {
        title: "Quiz engine",
        text: "Multiple-choice quizzes with auto-grading, passing scores, single attempts and attempt history.",
      },
      {
        title: "Angular frontend",
        text: "Standalone components, lazy-loaded routes, reactive forms and Tailwind.",
      },
      {
        title: "Deployment",
        text: "Backend on Render with Docker, frontend on Vercel, database on Supabase.",
      },
    ],
    tags: ["Angular", "TypeScript", "Java", "Spring Boot", "Hibernate", "PostgreSQL", "Tailwind"],
    image: skillforgeImg,
    github: "https://github.com/deancruz1/SkillForge",
    slug: "skillforge",
    heroVideo: skillforgeVideo,
    gallery: skillforgeGalleryImages.map((image, i) => ({
      image,
      thumb: thumbsFor("skillforge")[i],
      caption: [
        "Courses Page - Instructor",
        "Course Details - Instructor",
        "Courses Page - Student",
        "Course Details - Student",
      ][i],
    })),
    caseStudy: {
      problem: `Most e-learning platforms are either too complex or too basic. I wanted to build one from scratch that covered the full feature set while learning enterprise Java patterns.`,

      solution: `Built on Spring Boot 4.0 with Hibernate ORM mapping 9 relational tables on Supabase PostgreSQL. Spring Security handles JWT authentication with role-based access for instructors and students. The Angular frontend communicates via REST APIs with DTOs for clean data transfer. The quiz engine auto-grades submissions against stored correct answers and enforces single-attempt rules.`,

      technicalDecisions: [
        {
          decision: "Spring Boot and Hibernate",
          reason:
            "Enterprise standard for Java backends. Hibernate eliminates boilerplate SQL while Spring Boot handles server setup, connection pooling, and dependency injection.",
        },
        {
          decision: "Supabase PostgreSQL",
          reason:
            "Managed PostgreSQL with a generous free tier. Used purely as a database host with all SQL written manually. No Supabase client libraries or auto-generated APIs.",
        },
        {
          decision: "Angular over React",
          reason:
            "Angular's opinionated structure mirrors enterprise patterns. Built-in router, HTTP client, and form handling mean fewer third-party dependencies.",
        },
        {
          decision: "JWT in localStorage",
          reason:
            "Simplest auth persistence for a portfolio project. The JWT is attached to every request and verified by a Spring Security filter chain.",
        },
      ],

      challenges: [
        "Mapping composite keys for junction tables required EmbeddedId with MapsId annotations, a Hibernate pattern with specific syntax that took several iterations to get right.",
        "Supabase's PgBouncer connection pooler does not support server-side prepared statements, causing prepared statement already exists errors that required adding prepareThreshold=0 to the JDBC URL.",
        "Angular's change detection does not always trigger on async data loads, so multiple components needed explicit ChangeDetectorRef.detectChanges calls after HTTP responses.",
        "The quiz engine had to store correct answers without exposing them to students. The instructor view shows answers highlighted in green while students only see scores after submission.",
        "Deploying Spring Boot on Render required a Dockerfile with multi-stage builds because Render does not natively support Java runtimes.",
      ],

      improvements: [
        "Add Google OAuth as an alternative login method using Spring Security OAuth2 client support.",
        "Implement certificate generation on course completion with Spring Batch for PDF processing.",
        "Add discussion forums per course with threaded comments and real-time updates via WebSocket.",
        "Build an instructor analytics dashboard showing enrollment trends, completion rates, and average quiz scores.",
      ],
    },
  },
  {
    title: "Foundations",
    featured: false,
    category: "Frontend",
    description:
      "My first portfolio site, built during my diploma and picked by faculty as the cohort's reference for code structure.",
    about:
      "The project that started it all. Built to learn the fundamentals, then selected by faculty as the cohort reference implementation for code structure.",
    features: [
      {
        title: "Responsive layout",
        text: "Three breakpoints (mobile, tablet, desktop) on the Bootstrap grid.",
      },
      {
        title: "Semantic HTML",
        text: "Structured for accessibility and SEO.",
      },
      {
        title: "Project sections",
        text: "Front-End, Programming and Design, each with an image preview gallery.",
      },
    ],
    tags: ["HTML", "CSS", "JS", "Bootstrap"],
    image: portfolioImg,
    liveDemo: "https://deancruz1.github.io/Foundations/",
    github: "https://github.com/deancruz1/Foundations",
    slug: "portfolio-website",
    heroVideo: portfolioVideo,
    gallery: portfolioGalleryImages.map((image, i) => ({
      image,
      thumb: thumbsFor("portfolio-website")[i],
      caption: [
        "Home - Hero",
        "Home - Projects",
        "Home - About",
        "Individual Projects Page",
      ][i],
    })),
  },
{
    title: "// HANDLER ONE",
    featured: false,
    category: "Frontend",
    description: "A fansite for 86 Eighty-Six, styled as a Handler's military terminal with dossiers, mech specs and a combat log.",
    about:
      "The concept is simple: you're a Handler logged into HQ. The site covers the full series: plot breakdowns by act, Spearhead Squadron dossiers with Para-RAID sync status, a mech database with armament specs, faction geopolitical profiles with threat classifications, and a combat log archive across all episodes.",
    features: [
      {
        title: "Series archive",
        text: "Plot breakdowns by act, a mech database, faction profiles and a combat log.",
      },
      {
        title: "Terminal UI",
        text: "CRT scanline overlays, vignette effects and alert themes that change with operational status.",
      },
      {
        title: "Processor dossiers",
        text: "Cards with sync rates, operational history and Para-RAID status for each Spearhead member.",
      },
      {
        title: "Deep links on GitHub Pages",
        text: "A 404.html interception script makes refreshes and direct links work on static hosting.",
      },
      {
        title: "Responsive layouts",
        text: "Desktop terminal grids that collapse into mobile screens.",
      },
      {
        title: "Data structure",
        text: "Processor dossiers kept separate from the unit insignia and mecha asset mappings.",
      },
    ],
    tags: ["React", "Tailwind"],
    image: fansiteImg,
    liveDemo: "https://deancruz1.github.io/Handler-One/",
    github: "https://github.com/deancruz1/Handler-One",
    slug: "fansite",
    heroVideo: fansiteVideo,
    gallery: fansiteGalleryImages.map((image, i) => ({
      image,
      thumb: thumbsFor("fansite")[i],
      caption: [
        "Intel Page",
        "Character Roster Page",
        "Arsenal Page",
        "Factions Page",
      ][i],
    })),
  },
  {
    title: "Kiroku",
    featured: true,
    category: "Full-Stack",
    description:
      "An anime tracker with a watch list, seasonal calendar, recommendations and viewing stats.",
    card: {
      why: "Existing anime trackers never felt right, so I built my own.",
      how: "Built on the Next.js App Router, so server components fetch the data and pages don't wait on client-side requests.",
    },
    features: [
      {
        title: "Sign-in",
        text: "Discord OAuth or email and password, with bcrypt hashing and JWT sessions.",
      },
      {
        title: "Watch list",
        text: "Add shows, then update status, episode progress and star ratings inline.",
      },
      {
        title: "Seasonal calendar",
        text: "A 7-day broadcast view with episode countdowns and genre filters.",
      },
      {
        title: "Recommendations",
        text: "Finds your top genres from watch history and suggests unwatched shows from the Jikan API.",
      },
      {
        title: "Stats",
        text: "A bento grid of summary cards and a Recharts donut chart of watch status.",
      },
      {
        title: "Collections",
        text: "Create, rename and delete custom lists, and add or remove shows.",
      },
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
    image: kirokuImg,
    liveDemo: "https://kiroku-nyaa.vercel.app",
    github: "https://github.com/deancruz1/Kiroku",
    slug: "kiroku",
    heroVideo: kirokuVideo,
    gallery: kirokuGalleryImages.map((image, i) => ({
      image,
      thumb: thumbsFor("kiroku")[i],
      caption: [
        "Home Page",
        "Stats Page",
        "Anime Detail Page",
        "Watch List Page",
      ][i],
    })),
    caseStudy: {
      problem: `Most anime trackers are fragmented. Users bounce between MyAnimeList for tracking, separate sites for seasonal schedules, and Reddit for recommendations. I wanted one clean app that handled all three without the bloat.`,

      solution: `Built on Next.js App Router with React Server Components, Prisma ORM on Supabase PostgreSQL, and NextAuth v5 for dual authentication with Discord OAuth. The Jikan API drives all anime data. Users track shows with full CRUD, browse a 7-day broadcast calendar, get genre-based recommendations, and view stats in a Spotify Wrapped-style bento dashboard.`,

      technicalDecisions: [
        {
          decision: "Next.js App Router",
          reason:
            "Server components and streaming eliminate unnecessary client-side fetching. Layouts and loading states are built-in.",
        },
        {
          decision: "Jikan API",
          reason:
            "Free, no API key required, and comprehensive anime data. The rate limit was a real constraint that pushed me to implement proper retry logic.",
        },
        {
          decision: "Supabase PostgreSQL",
          reason:
            "Vercel serverless functions use ephemeral filesystems. SQLite writes do not persist between invocations.",
        },
        {
          decision: "Vercel",
          reason:
            "GitHub Pages only serves static files. Vercel supports serverless functions, which are needed to run backend logic and keep API keys out of the client.",
        },
      ],

      challenges: [
        "Jikan API enforces a strict 3 requests per second rate limit, so exponential backoff with retry logic was needed to handle request bursts on data-heavy pages without crashing",
        "The seasonal calendar required parsing inconsistent broadcast data formats from the API, building countdown timers with timezone awareness, and handling edge cases like missing air times",
        "The recommendation engine needed to analyze watch history, cross-reference genre data, filter out already-watched shows and low-rated entries, then attribute each result to a specific show the user liked",
        "Converting the 7-column desktop calendar layout to horizontal scroll rows on mobile required rethinking the entire component structure without duplicating logic",
        "The bento-grid stats dashboard needed to feel personal and playful rather than like a generic analytics panel, so every card uses dynamic color palettes and personality-driven copy",
      ],

      improvements: [
        "Store anime metadata in the database when a user adds a show, eliminating redundant Jikan API calls and reducing rate limit exposure",
        "Implement email verification system for new accounts",
        "Implement password reset via email for account recovery",
      ],
    },
  },
    {
    title: "Urara",
    featured: true,
    category: "Frontend",
    description:
      "A fan guide to Umamusume Pretty Derby with character profiles, music previews, news and birthdays.",
    card: {
      why: "Umamusume fan info was scattered across wikis and playlists, so I put it in one place.",
      how: "Part of the API only returns Japanese, so each entry translates on demand and caches the result.",
    },
    features: [
      {
        title: "Character profiles",
        text: "Bios, stats, fun facts, voice samples and an image gallery with a lightbox.",
      },
      {
        title: "Translation",
        text: "Japanese profile text translates to English on demand through the MyMemory API, with a toggle back to the original.",
      },
      {
        title: "Music browser",
        text: "Filter tracks by character and play previews.",
      },
      {
        title: "News feed",
        text: "Keyword search, pagination and full articles in a modal.",
      },
      {
        title: "Birthday calendar",
        text: "Today's and this month's upcoming character birthdays.",
      },
      {
        title: "Accent colors",
        text: "Each character's primary color drives the buttons, borders and highlights on their page.",
      },
    ],
    tags: ["React", "TypeScript", "TanStack Query", "Tailwind", "Framer Motion"],
    image: uraraImg,
    liveDemo: "https://deancruz1.github.io/Urara/",
    github: "https://github.com/deancruz1/Urara",
    slug: "urara",
    heroVideo: uraraVideo,
    gallery: uraraGalleryImages.map((image, i) => ({
      image,
      thumb: thumbsFor("urara")[i],
      caption: [
        "Home Page",
        "Characters Page",
        "Music Page",
        "News Page",
      ][i],
    })),
    caseStudy: {
      problem: `Existing Umamusume resources are scattered across wikis, YouTube playlists, and social media. Fans have no single destination to browse profiles, preview music, and catch up on news. I wanted to build that unified experience.`,

      solution: `Built a single-page React app with four main sections: character browser, music catalog, news feed, and birthday calendar. All data comes from the Umapyoi API via TanStack Query for caching and state management. The MyMemory API handles translations without any API key. Tailwind CSS and Framer Motion handle the responsive layout and animations.`,

      technicalDecisions: [
        {
          decision: "TanStack Query",
          reason:
            "Handles caching, background refetching, and loading states out of the box - cleaner than managing useEffect chains for every API call.",
        },
        {
          decision: "Umapyoi API",
          reason:
            "Free, no authentication required, and provides all the character, music, and news data needed. The community maintains it actively.",
        },
        {
          decision: "GitHub Pages",
          reason:
            "The app is fully static with no server-side logic. All API calls happen client-side, so free static hosting was the obvious choice.",
        },
        {
          decision: "MyMemory API for translation",
          reason:
            "Machine translation of Japanese text to English without any API key setup or rate limit concerns for a fan project of this scale.",
        },
      ],

      challenges: [
        "The Umapyoi API returns raw HTML in news content, so the news detail modal had to safely render HTML strings while avoiding XSS vulnerabilities",
        "Designing a responsive character filter that works as a vertical sidebar on desktop but a horizontal scroll row on mobile required two distinct layout strategies",
        "Implementing dynamic accent colors meant every component needed to accept and apply a character-specific color prop without hardcoding values",
        "The music preview player uses HTML5 audio elements that don't support multiple simultaneous playbacks, so coordinating play/pause across track items required lifting state up and managing a single audio instance",
        "Translating profile text on demand meant handling API latency gracefully with loading spinners while caching results to avoid redundant requests",
      ],

      improvements: [
        "Implement static site generation (SSG) for character and music pages so search engines can index API-driven content",
        "Add user accounts with Supabase to enable favoriting characters and saving music playlists",
        "Add music search filters by album, artist, and song type beyond just character filtering",
      ],
    },
  },

  {
    title: "Oshiwatch",
    featured: true,
    category: "Frontend",
    description:
      "A Hololive stream tracker. See who's live, what's coming up, and watch in-app with live chat.",
    card: {
      why: "I wanted to track Hololive streams without opening five tabs.",
      how: "Holodex calls go through a Vercel serverless proxy so the API key never reaches the browser.",
    },
    features: [
      {
        title: "API proxy",
        text: "Holodex calls go through Vercel serverless functions, so the API key stays on the server.",
      },
      {
        title: "Live and upcoming",
        text: "Streams, schedules, the talent roster, VODs, shorts and music from the Holodex API v2.",
      },
      {
        title: "Branch filters",
        text: "Filter by JP, EN, ID or DEV_IS, with talents sorted by generation.",
      },
      {
        title: "Infinite pagination",
        text: "Streams, shorts and music load 50 at a time with TanStack Query's useInfiniteQuery.",
      },
      {
        title: "Talent pages",
        text: "Live and upcoming banners, tabbed VOD, shorts and music archives, and social links.",
      },
      {
        title: "In-app player",
        text: "An embedded YouTube player with live chat beside it.",
      },
    ],
    tags: ["React", "TypeScript", "TanStack Query", "Vercel Functions", "Tailwind"],
    image: oshiwatchImg,
    liveDemo: "https://oshiwatch.vercel.app",
    github: "https://github.com/deancruz1/Oshiwatch",
    slug: "oshiwatch",
    heroVideo: oshiwatchVideo,
    gallery: oshiwatchGalleryImages.map((image, i) => ({
      image,
      thumb: thumbsFor("oshiwatch")[i],
      caption: [
        "Home — Live & Upcoming",
        "Talents Page",
        "Talent Detail Page",
        "Watch Page",
      ][i],
    })),
    caseStudy: {
      problem: `Tracking Hololive streams meant juggling Holodex, YouTube, and Twitter simultaneously. I wanted one focused app that showed me who's live, what's coming up, and let me watch without leaving the page.`,

      solution: `Built a Vite + React SPA that proxies all Holodex API calls through Vercel serverless functions to keep the API key server-side. TanStack Query handles caching, polling every 5 minutes for live data, and infinite pagination for VOD archives. The watch page embeds YouTube's iframe player alongside the live chat iframe, scoped to the deployed domain.`,

      technicalDecisions: [
        {
          decision: "Vercel serverless proxy for API key security",
          reason:
            "A VITE_ prefixed env var ships the key in the client bundle. The proxy keeps it strictly server-side with no exposure risk.",
        },
        {
          decision: "TanStack Query with useInfiniteQuery",
          reason:
            "VOD archives can span hundreds of entries. Infinite pagination loads 50 at a time on demand rather than hammering the API on mount.",
        },
        {
          decision: "Holodex API v2",
          reason:
            "Purpose-built for Hololive tracking. Returns live status, upcoming schedules, talent metadata, and video archives in one consistent API.",
        },
        {
          decision: "Client-side branch and gen filtering",
          reason:
            "The Holodex group and suborg fields are inconsistent between endpoints. Normalising them client-side gave full control over filtering logic without depending on API params.",
        },
      ],

      challenges: [
        "The /channels and /live endpoints return different field schemas for the same data — channels use group while live streams use suborg — requiring separate branch detection functions for each context",
        "Holodex returns official brand channels, graduated talents, sub-channels, and Holostars alongside active talents, all requiring distinct exclusion logic based on group field values",
        "YouTube's live chat iframe only works on the exact deployed domain, making local development impossible without workarounds — vercel dev was the only viable local testing path",
        "The VOD archive mixes streams, shorts, and music under a single type:stream field with no native distinction, requiring duration thresholds and topic_id filtering to separate tabs correctly",
        "Filtering 15 non-Hololive affiliated streams from the homepage required checking channel.org rather than name patterns, after name-based matching incorrectly excluded JP talents",
      ],

      improvements: [
        "Implement favourites with localStorage to pin tracked talents to the top of the roster and filter the live view",
        "Add gen headers to the talents page to visually group talents by generation",
        "Revisit Holodex search endpoint once the request body format is confirmed — would enable full-archive video search across all of a talent's content",
      ],
    },
  },
    {
    title: "Movietopia",
    featured: false,
    category: "Full-Stack",
    description:
      "A PHP/MySQL application with CRUD-enabled database tables and session-based authentication.",
    about:
      "A deep dive into server-side fundamentals. Built to understand how session auth, relational schemas, and CRUD operations fit together end-to-end.",
    features: [
      {
        title: "Database",
        text: "Three related MySQL tables (users, movies, reviews) with foreign keys.",
      },
      {
        title: "Accounts",
        text: "Registration and login, with PHP sessions guarding the review pages.",
      },
      {
        title: "Reviews",
        text: "Logged-in users can submit, edit and delete their own star-rated reviews.",
      },
      {
        title: "Search",
        text: "A searchable movie list showing genre, director, cast and synopsis.",
      },
    ],
    tags: ["PHP", "MySQL", "CSS"],
    image: movietopiaImg,
    github: "https://github.com/deancruz1/Movietopia",
    slug: "movietopia",
    heroVideo: movietopiaVideo,
    gallery: movietopiaGalleryImages.map((image, i) => ({
      image,
      thumb: thumbsFor("movietopia")[i],
      caption: [
        "Home Page",
        "Search Function",
        "Reviews Page",
        "Edit Reviews Page",
      ][i],
    })),
  },
    {
    title: "Shrine of Suisei",
    featured: false,
    category: "Frontend",
    description:
      "A single-page fan site in plain HTML, CSS and JavaScript, with custom fonts and CSS animations.",
    about:
      "Started as a basic landing page project before enrolling into Republic Polytechnic to prepare for the course for a VTuber I enjoy watching. Recently refactored CSS and HTML for better maintainability.",
    features: [
      {
        title: "Hamburger menu",
        text: "An animated icon toggle that closes when a link is clicked, in vanilla JavaScript.",
      },
      {
        title: "Glowing button",
        text: "A call-to-action with animated gradient borders using CSS keyframes.",
      },
      {
        title: "CSS-only modal",
        text: "A disclaimer popup built on the :target pseudo-class, with no JavaScript.",
      },
      {
        title: "Responsive layout",
        text: "A centered content container with media queries for mobile, tablet and desktop.",
      },
    ],
    tags: ["HTML", "CSS", "JS"],
    image: landingPageImg,
    liveDemo: "https://deancruz1.github.io/Shrine_of_Suisei/",
    github: "https://github.com/deancruz1/Shrine_of_Suisei",
    slug: "landing-page",
    heroVideo: landingPageVideo,
    gallery: landingPageGalleryImages.map((image, i) => ({
      image,
      thumb: thumbsFor("landing-page")[i],
      caption: [
        "Home Page",
        "Pop-up Text",
        "Links to Other Websites",
        "Quote and Footer Section",
      ][i],
    })),
  },
  {
    title: "Mobile XD",
    featured: false,
    category: "Design",
    description:
      "A 154-screen high-fidelity mobile prototype mapping out navigation flows and touch-target sizing.",
    about:
      "Prototyped to produce developer handoff specs from design concepts.",
    features: [
      {
        title: "Navigation flows",
        text: "User navigation stacks and interaction triggers mapped in Adobe XD.",
      },
      {
        title: "Design system",
        text: "Consistent type scaling and component spacing.",
      },
      {
        title: "Handoff specs",
        text: "Grid alignments and component boundaries defined for front-end implementation.",
      },
    ],
    tags: ["XD", "Illustrator", "Photoshop"],
    image: mobileWireframeImg,
    liveDemo:
      "https://xd.adobe.com/view/ff47b771-facc-42d4-9af3-0043a8316f16-aa14/",
    slug: "mobile-wireframe",
    heroVideo: wireframeVideo,
    galleryPortrait: true,
    gallery: wireframeGalleryImages.map((image, i) => ({
      image,
      thumb: thumbsFor("wireframe")[i],
      caption: ["Home Page", "About Me", "Portfolio Page", "Contact Page"][i],
    })),
  },
];