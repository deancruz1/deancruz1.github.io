import artworkImg from "../assets/img/project-cards/2d-artwork.webp";
import fansiteImg from "../assets/img/project-cards/fansite.webp";
import landingPageImg from "../assets/img/project-cards/landing-page.webp";
import mobileWireframeImg from "../assets/img/project-cards/mobile-wireframe.webp";
import movietopiaImg from "../assets/img/project-cards/movietopia.webp";
import portfolioImg from "../assets/img/project-cards/portfolio-website.webp";
import landingPageVideo from "../assets/videos/landing-page.mp4";
import fansiteVideo from "../assets/videos/fansite.mp4";
import movietopiaVideo from "../assets/videos/movietopia.mp4";
import artworkVideo from "../assets/videos/artwork.mp4";
import wireframeVideo from "../assets/videos/wireframe.mp4";
import portfolioVideo from "../assets/videos/portfolio-website.mp4";
import kirokuImg from "../assets/img/project-cards/kiroku.webp";
import kirokuVideo from "../assets/videos/kiroku.mp4";

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

const artworkGallery = import.meta.glob(
  "../assets/img/project-gallery/artwork/*.webp",
  { eager: true },
);
const artworkGalleryImages = Object.values(artworkGallery).map(
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

export const projects = [
  // Case study:
  //   caseStudy: {
  //   overview: ``,
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
    title: "Foundations",
    category: "Frontend",
    description:
      "My first portfolio site, built during my diploma. Selected by faculty as the cohort reference implementation for code structure.",
    longDescription: `The starting point of my development journey. Built as a student to learn the fundamentals of web development.\n\n• Scaled across 3 breakpoints (mobile, tablet, desktop) using Bootstrap grid systems.\n• Implemented semantic HTML structure for accessibility and SEO.\n• Organized into a modular CSS/JS architecture. Selected by faculty as the reference codebase for student projects in the cohort.`,
    tags: ["HTML", "CSS", "JS", "Bootstrap"],
    image: portfolioImg,
    liveDemo: "https://deancruz1.github.io/Foundations/",
    github: "https://github.com/deancruz1/Foundations",
    slug: "portfolio-website",
    heroVideo: portfolioVideo,
    gallery: portfolioGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Home - Hero",
        "Home - Projects",
        "Home - About",
        "Individual Projects Page",
      ][i],
    })),
  },
  {
    title: "Landing Page",
    category: "Frontend",
    description:
      "A single-page marketing layout built with raw CSS to master box-model fundamentals.",
    longDescription: `Created to explore layout rendering without framework abstractions. Focuses on manual responsiveness.\n\n• Wrote custom media queries to maintain layout integrity down to small mobile viewports.\n• Added a custom navigation toggle and modal trigger using vanilla JavaScript.\n• Swapped background assets at breakpoints to serve appropriate images for mobile vs desktop.`,
    tags: ["HTML", "CSS", "JS"],
    image: landingPageImg,
    liveDemo: "https://deancruz1.github.io/Shrine_of_Suisei/",
    github: "https://github.com/deancruz1/Shrine_of_Suisei",
    slug: "landing-page",
    heroVideo: landingPageVideo,
    gallery: landingPageGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Home Page",
        "Pop-up Text",
        "Links to Other Websites",
        "Quote and Footer Section",
      ][i],
    })),
  },
  {
    title: "Fansite",
    category: "Frontend",
    description:
      "A 3-page site demonstrating custom CSS Grid systems and multi-page routing.",
    longDescription: `Developed to practice building complex grid-based interfaces without Bootstrap.\n\n• Managed page reflows using CSS Grid and Flexbox.\n• Handled site-wide routing across separate HTML pages using vanilla JS.\n• Built interactive character profile cards with custom hover states and CSS transitions.`,
    tags: ["HTML", "CSS", "JS"],
    image: fansiteImg,
    liveDemo: "https://deancruz1.github.io/anime-fansite/",
    github: "https://github.com/deancruz1/anime-fansite",
    slug: "fansite",
    heroVideo: fansiteVideo,
    gallery: fansiteGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Home Page",
        "Characters Page - 01",
        "Characters Page - 02",
        "Characters Page - 03",
      ][i],
    })),
  },
  {
    title: "Kiroku",
    category: "Full-Stack",
    description:
      "A full-stack anime tracker with OAuth, full CRUD, seasonal calendar, personalized recommendations, and interactive stats. Powered by a live API and a relational database.",
    longDescription: `Built to consolidate anime tracking into a single responsive web app. Integrates external API data with a persistent PostgreSQL database on Supabase.\n\n• Implemented dual authentication with Discord OAuth for quick sign-in and email/password registration using bcrypt hashing and JWT session tokens.\n• Built full CRUD operations for watch list management: add anime with status tracking, update episode progress and star ratings inline, and delete entries with cascade cleanup.\n• Developed a 7-day seasonal broadcast calendar with episode countdown timers, expand/collapse animations via Framer Motion, and genre-aware filtering with a tracked-only toggle.\n• Created a personalized recommendation engine that analyzes watch history, identifies top genres, queries the Jikan API, and surfaces unwatched shows with "Because you liked" context.\n• Visualized user stats with a bento-grid layout featuring summary cards, a Recharts donut chart for status distribution, and dynamic genre-based color palettes.\n• Built custom collections with create, rename, delete, and add/remove functionality, a profile settings page with Discord link/unlink, and responsive design across all breakpoints.`,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "React"],
    image: kirokuImg,
    liveDemo: "https://kiroku-nyaa.vercel.app",
    github: "https://github.com/deancruz1/Kiroku",
    slug: "kiroku",
    heroVideo: kirokuVideo,
    gallery: kirokuGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Home Page",
        "Stats Page",
        "Anime Detail Page",
        "Watch List Page",
      ][i],
    })),
    caseStudy: {
      overview: `Kiroku is a full-stack anime tracker that combines watch list management, seasonal discovery, personalized recommendations, and viewing stats into one responsive web app. Built to apply production-grade full-stack engineering from auth to deployment.`,

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
    title: "Movietopia",
    category: "Full-Stack",
    description:
      "A PHP/MySQL application with CRUD-enabled database tables and session-based authentication.",
    longDescription: `Built to integrate server-side logic with relational storage.\n\n• Designed a MySQL schema to handle users, movie metadata, and review data.\n• Implemented secure login and registration with PHP session handling to guard protected routes.`,
    tags: ["PHP", "SQL", "CSS"],
    image: movietopiaImg,
    github: "https://github.com/deancruz1/Movietopia",
    slug: "movietopia",
    heroVideo: movietopiaVideo,
    gallery: movietopiaGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Home Page",
        "Search Function",
        "Reviews Page",
        "Edit Reviews Page",
      ][i],
    })),
  },
  {
    title: "Mobile Wireframe",
    category: "Design",
    description:
      "A 154-screen high-fidelity mobile prototype mapping out navigation flows and touch-target sizing.",
    longDescription: `Prototyped to produce developer handoff specs from design concepts.\n\n• Mapped user navigation stacks and interaction triggers in Adobe XD.\n• Established a design system for consistent type scaling and component spacing.\n• Defined grid alignments and component boundaries to guide front-end implementation.`,
    tags: ["XD"],
    image: mobileWireframeImg,
    liveDemo:
      "https://xd.adobe.com/view/ff47b771-facc-42d4-9af3-0043a8316f16-aa14/",
    slug: "mobile-wireframe",
    heroVideo: wireframeVideo,
    gallery: wireframeGalleryImages.map((image, i) => ({
      image,
      caption: ["Home Page", "About Me", "Portfolio Page", "Contact Page"][i],
    })),
  },
  {
    title: "2D Artwork",
    category: "Design",
    description:
      "A collection of digital assets, posters, and layouts using Adobe Creative Cloud.",
    longDescription: `Compilation of design work with precise alignment and export configuration.\n\n• Built vector paths in Illustrator and Photoshop with precise alignment and scaling.\n• Configured exports for both print and web output.\n• Applied layout hierarchy principles carried forward into frontend UI development.`,
    tags: ["Photoshop", "Illustrator"],
    image: artworkImg,
    slug: "2d-artwork",
    heroVideo: artworkVideo,
    gallery: artworkGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Home Page (Website)",
        "About Me Page (Website)",
        "Portfolio Page (Website)",
        "Resume Page (Website)",
        "Creative Poster",
        "Castle on Ice",
        "Advertisement Poster",
        "Event Poster",
        "Typography Poster",
        "Magazine Layout Design",
      ][i],
    })),
  },
];
