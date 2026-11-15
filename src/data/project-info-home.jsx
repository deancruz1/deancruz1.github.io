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
import uraraLoopTheme from "../assets/videos/highlights/urara/loop-01-theme-toggle.mp4";
import uraraLoopSearch from "../assets/videos/highlights/urara/loop-02-character-search.mp4";
import uraraLoopOutfits from "../assets/videos/highlights/urara/loop-03-outfits.mp4";
import uraraLoopSong from "../assets/videos/highlights/urara/loop-04-song-preview.mp4";
import uraraLoopNews from "../assets/videos/highlights/urara/loop-05-news-post.mp4";
import uraraMobileMusic from "../assets/img/highlights/urara/mobile-03-music.webp";
import uraraBeforeHome from "../assets/img/before-after/urara/before-01-home.webp";
import uraraAfterHome from "../assets/img/before-after/urara/after-01-home.webp";
import uraraBeforeCharacter from "../assets/img/before-after/urara/before-02-character.webp";
import uraraAfterCharacter from "../assets/img/before-after/urara/after-02-character.webp";
import uraraBeforeMusic from "../assets/img/before-after/urara/before-03-music.webp";
import uraraAfterMusic from "../assets/img/before-after/urara/after-03-music.webp";
import uraraBeforeNews from "../assets/img/before-after/urara/before-04-news.webp";
import uraraAfterNews from "../assets/img/before-after/urara/after-04-news.webp";
import uraraBeforeCard from "../assets/img/before-after/urara/before-card.webp";
import uraraBeforeVideo from "../assets/videos/before-after/urara/before-walkthrough.mp4";
import uraraDeepLinksSvg from "../assets/diagrams/urara/diagram-deep-links.svg?raw";
import uraraPrerenderSvg from "../assets/diagrams/urara/diagram-prerender.svg?raw";
import uraraThemeToggleSvg from "../assets/diagrams/urara/diagram-theme-toggle.svg?raw";
import skillforgeImg from "../assets/img/project-cards/skillforge.webp";
import skillforgeVideo from "../assets/videos/skillforge.mp4";
import oshiwatchImg from "../assets/img/project-cards/oshiwatch.webp";
import oshiwatchVideo from "../assets/videos/oshiwatch.mp4";
import oshiwatchLoopTheme from "../assets/videos/highlights/oshiwatch/loop-01-theme-toggle.mp4";
import oshiwatchLoopFavourite from "../assets/videos/highlights/oshiwatch/loop-02-favourite.mp4";
import oshiwatchLoopBranch from "../assets/videos/highlights/oshiwatch/loop-03-branch-filter.mp4";
import oshiwatchLoopSearch from "../assets/videos/highlights/oshiwatch/loop-04-roster-search.mp4";
import oshiwatchLoopTabs from "../assets/videos/highlights/oshiwatch/loop-05-talent-tabs.mp4";
import oshiwatchMobileHome from "../assets/img/highlights/oshiwatch/mobile-01-home.webp";
import oshiwatchBeforeHome from "../assets/img/before-after/oshiwatch/before-01-home.webp";
import oshiwatchAfterHome from "../assets/img/project-gallery/oshiwatch/01-home.webp";
import oshiwatchBeforeTalents from "../assets/img/before-after/oshiwatch/before-02-talents.webp";
import oshiwatchAfterTalents from "../assets/img/project-gallery/oshiwatch/03-talents.webp";
import oshiwatchBeforeTalent from "../assets/img/before-after/oshiwatch/before-03-talent.webp";
import oshiwatchAfterTalent from "../assets/img/before-after/oshiwatch/after-03-talent.webp";
import oshiwatchBeforeWatch from "../assets/img/before-after/oshiwatch/before-04-watch.webp";
import oshiwatchAfterWatch from "../assets/img/before-after/oshiwatch/after-04-watch.webp";
import oshiwatchBeforeWatchLive from "../assets/img/before-after/oshiwatch/before-05-watch-live.webp";
import oshiwatchAfterWatchLive from "../assets/img/before-after/oshiwatch/after-05-watch-live.webp";
import oshiwatchBeforeDeepLink from "../assets/img/before-after/oshiwatch/before-06-deep-link.webp";
import oshiwatchAfterDeepLink from "../assets/img/before-after/oshiwatch/after-06-deep-link.webp";
import oshiwatchBeforeCard from "../assets/img/before-after/oshiwatch/before-card.webp";
import oshiwatchBeforeVideo from "../assets/videos/before-after/oshiwatch/before-walkthrough.mp4";
import oshiwatchApiProxySvg from "../assets/diagrams/oshiwatch/diagram-api-proxy.svg?raw";
import oshiwatchBranchDetectionSvg from "../assets/diagrams/oshiwatch/diagram-branch-detection.svg?raw";
import oshiwatchTalentAddressSvg from "../assets/diagrams/oshiwatch/diagram-talent-address.svg?raw";

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

export const projects = [

  {
    title: "SkillForge",
    description:
      "An e-learning platform where instructors build courses and quizzes, and students get graded automatically.",
    archiveMeta: {
      desc: "E-learning platform with server-graded quizzes and role-checked JWT auth",
      stack: "Angular · Spring Boot · Postgres",
    },
    features: [
      "Database",
      "REST API",
      "ORM mapping",
      "Quiz engine",
      "Angular frontend",
      "Deployment",
    ],
    tags: ["Angular", "TypeScript", "Java", "Spring Boot", "Hibernate", "PostgreSQL", "Tailwind"],
    image: skillforgeImg,
    github: "https://github.com/deancruz1/SkillForge",
    slug: "skillforge",
    notes: {
      decisions: [
        ["Spring Boot and Hibernate", "The standard enterprise Java stack, with most SQL handled by Hibernate."],
        ["PostgreSQL on Supabase", "Managed Postgres used purely as a database, with the schema written by hand."],
        ["Angular", "Routing, HTTP and forms built in, like the codebases I work in."],
        ["JWT auth", "Stateless sessions checked by a Spring Security filter on every request."],
      ],
      hard: [
        "Composite keys on junction tables with @EmbeddedId and @MapsId.",
        "Supabase's connection pooler rejecting prepared statements until prepareThreshold=0.",
        "A multi-stage Docker build to run Spring Boot on Render.",
      ],
      next: "Enforce one quiz attempt on the server, and keep answers out of students' API responses.",
    },
    overview: [
      "SkillForge is an e-learning platform. Instructors create courses, lessons and quizzes, and students enrol, track their progress and get their quizzes graded automatically.",
      "I built it to learn enterprise Java properly: a Spring Boot REST API with Spring Security and JWT, Hibernate over a 9-table PostgreSQL schema, and an Angular frontend.",
    ],
    heroVideo: skillforgeVideo,
    annotatedScreen: {
      image: skillforgeGalleryImages[1],
      caption: "SkillForge · a course page, seen by its instructor",
      view: [240, 40, 720, 405],
      baseWidth: 1200,
      notes: [
        {
          title: "Stateless JWT auth",
          body: "Spring Security checks a JWT on every request through a custom filter, and passwords are hashed with BCrypt.",
        },
        {
          title: "Controls for the course owner",
          body: "The frontend reads the role and user ID from the JWT. If you own the course, you get these controls. The API also checks roles: only instructors can create courses, and only a course's own instructor can add its quiz.",
          rect: [394, 108, 406, 48],
          tag: "tl",
        },
        {
          title: "Graded on the server",
          body: "`QuizService` rejects a submission unless every question is answered, compares answers case-insensitively, totals the points and checks them against this passing score.",
          rect: [394, 238, 406, 52],
          tag: "tl",
        },
        {
          title: "Answer preview",
          body: "The instructor sees each question with its correct answer highlighted in green, to check the quiz before students take it.",
          rect: [426, 403, 362, 28],
          tag: "tl",
        },
      ],
    },
    gallery: skillforgeGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Courses Page - Instructor",
        "Course Details - Instructor",
        "Courses Page - Student",
        "Course Details - Student",
      ][i],
    })),
  },
  {
    title: "Foundations",
    description:
      "My first portfolio site, built during my diploma and picked by faculty as the cohort's reference for code structure.",
    archiveMeta: {
      desc: "First portfolio, picked by faculty as the cohort's code reference",
      stack: "HTML · CSS · Bootstrap",
    },
    features: [
      "Responsive layout",
      "Semantic HTML",
      "Project sections",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: portfolioImg,
    liveDemo: "https://deancruz1.github.io/Foundations/",
    github: "https://github.com/deancruz1/Foundations",
    slug: "portfolio-website",
    notes: {
      decisions: [
        ["Bootstrap Grayscale theme", "A working responsive base to learn structure from."],
        ["Mouse trail", "Circles ease towards the cursor each frame, and switch off on touch screens."],
        ["Drag-to-scroll track", "Web Animations API with a parallax shift per image, on wide screens only."],
      ],
      hard: [
        "Keeping the cards clickable inside a track you can drag.",
      ],
      next: "Load one version of Bootstrap instead of two.",
    },
    overview: [
      "Foundations was my first portfolio site, made during my diploma. It has a home page, a projects page and a page for each project with an image gallery.",
      "I built it on the Start Bootstrap Grayscale theme and added my own JavaScript on top: a mouse trail, a drag-to-scroll image track and a particle background. Faculty later picked it as the cohort's reference for code structure.",
    ],
    heroVideo: portfolioVideo,
    annotatedScreen: {
      image: portfolioGalleryImages[1],
      caption: "Foundations · the projects section on the home page",
      view: [180, 0, 840, 472.5],
      baseWidth: 1200,
      notes: [
        {
          title: "A Bootstrap theme, reworked",
          body: "Built on the Start Bootstrap Grayscale theme with Bootstrap 5, then extended into a home page, a projects page and one page per project.",
        },
        {
          title: "Navbar that follows you",
          body: "Bootstrap ScrollSpy highlights the section you're reading, and on phones the menu collapses as soon as you tap a link.",
          rect: [655, 4, 230, 26],
          tag: "l",
        },
        {
          title: "Three kinds of work",
          body: "Front-End, Programming and Design each get a row with two previews and a link through to their projects.",
          rect: [310, 110, 570, 135],
          tag: "tl",
        },
        {
          title: "Rows that switch sides",
          body: "Each row flips which side the previews sit on, so the section doesn't read as one long column. The Bootstrap grid reflows them on smaller screens.",
          rect: [310, 284, 570, 135],
          tag: "tl",
        },
      ],
    },
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
    title: "// HANDLER ONE",
    description: "A fansite for 86 Eighty-Six, styled as a Handler's military terminal with dossiers, mech specs and a combat log.",
    archiveMeta: {
      desc: "86 Eighty-Six fansite with deep links that survive a refresh on GitHub Pages",
      stack: "React · Tailwind",
    },
    features: [
      "Series archive",
      "Terminal UI",
      "Processor dossiers",
      "Deep links on GitHub Pages",
      "Responsive layouts",
      "Data structure",
    ],
    tags: ["React", "Tailwind"],
    image: fansiteImg,
    liveDemo: "https://deancruz1.github.io/Handler-One/",
    github: "https://github.com/deancruz1/Handler-One",
    slug: "fansite",
    notes: {
      decisions: [
        ["404.html redirect", "Deep links survive a refresh on GitHub Pages."],
        ["Tailwind v4 @theme", "All the terminal colours and fonts in one token block."],
        ["CSS scanlines", "A repeating 2px gradient instead of an image overlay."],
        ["sessionStorage flag", "The boot sequence plays once per visit, not on every return."],
      ],
      hard: [
        "Clearing every pending timeout if you leave halfway through the boot sequence.",
        "A static-noise fallback for processors with no video.",
      ],
      next: "Drop the unused Swiper dependency.",
    },
    overview: [
      "Handler One is a fansite for 86 Eighty-Six, set up as the terminal a Handler would use. It covers the plot by act, the Spearhead Squadron dossiers, a mech database, faction profiles and a mission log.",
      "It's a React app with six routes, styled with Tailwind and deployed as static files on GitHub Pages.",
    ],
    heroVideo: fansiteVideo,
    annotatedScreen: {
      image: fansiteGalleryImages[1],
      caption: "Handler One · the processor roster",
      view: [220, 0, 760, 427.5],
      baseWidth: 1200,
      notes: [
        {
          title: "Six routes, one terminal",
          body: "A Vite and React 19 app with React Router 7. Each section of HQ is its own route, styled with Tailwind v4 design tokens.",
        },
        {
          title: "Deep links on static hosting",
          body: "GitHub Pages has no server routing, so a 404.html page sends unknown paths back to the app with the path in a `?p=` parameter. The app swaps it back into the URL before React Router renders.",
          rect: [575, 6, 405, 20],
          tag: "l",
        },
        {
          title: "Live feed or dead signal",
          body: "Each processor's portrait plays their clip. Anyone without one falls back to a static noise layer, like a lost feed.",
          rect: [249, 72, 87, 118],
          tag: "tl",
        },
        {
          title: "Roster from one data file",
          body: "Every dossier comes from a single character data module that also imports their media. Processors marked KIA switch to red styling.",
          rect: [570, 64, 382, 360],
          tag: "tr",
        },
      ],
    },
    gallery: fansiteGalleryImages.map((image, i) => ({
      image,
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
    description:
      "An anime tracker with a watch list, seasonal calendar, recommendations and viewing stats.",
    stageMeta: {
      stack: "Next.js, '25",
      summary: "An anime tracker that works within Jikan's 3-requests-a-second limit.",
      glow: "glow-kiroku",
      alt: "Kiroku dashboard",
    },
    features: [
      "Sign-in",
      "Watch list",
      "Seasonal calendar",
      "Recommendations",
      "Stats",
      "Collections",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
    image: kirokuImg,
    liveDemo: "https://kiroku-nyaa.vercel.app",
    github: "https://github.com/deancruz1/Kiroku",
    slug: "kiroku",
    notes: {
      decisions: [
        ["Next.js App Router", "Server components fetch the data, so pages don't wait on client-side requests."],
        ["Jikan API", "Free and keyless, but limited to 3 requests a second."],
        ["PostgreSQL on Supabase", "Vercel's filesystem is ephemeral, so SQLite writes wouldn't persist."],
        ["Vercel", "Serverless functions keep API keys off the client. GitHub Pages can't run them."],
      ],
      hard: [
        "Retrying request bursts against Jikan's 3-per-second limit with exponential backoff.",
        "Turning inconsistent broadcast times into timezone-aware countdowns.",
        "Recommendations that skip watched and low-rated shows, and say which show they came from.",
        "Reworking the 7-column calendar into scrolling rows on phones without duplicating logic.",
      ],
      next: "Store show data when it's added, to cut repeat Jikan calls.",
    },
    overview: [
      "Kiroku is an anime tracker. You keep a watch list with status, episode progress and ratings, check a 7-day broadcast calendar, get recommendations from the genres you watch most, and see your stats on one page.",
      "I built it because I was splitting tracking, schedules and recommendations across different sites. It runs on the Next.js App Router with Prisma and PostgreSQL, and the show data comes from the Jikan API.",
    ],
    heroVideo: kirokuVideo,
    annotatedScreen: {
      image: kirokuGalleryImages[3],
      caption: "Kiroku · the watch list",
      view: [232, 0, 724, 407.25],
      baseWidth: 1200,
      notes: [
        {
          title: "Server components fetch the data",
          body: "Built on the Next.js App Router, so pages don't wait on client-side requests.",
        },
        {
          title: "Retries for a strict rate limit",
          body: "Show data comes from the Jikan API, which allows 3 requests a second. Bursts on data-heavy pages retry with exponential backoff.",
          rect: [424, 107, 346, 72],
          tag: "tl",
        },
        {
          title: "PostgreSQL, not SQLite",
          body: "Status, progress and ratings are edited inline and saved through Prisma. Vercel's serverless functions have ephemeral filesystems, so SQLite writes would not persist.",
          rect: [424, 184, 346, 104],
          tag: "tl",
        },
        {
          title: "Two ways to sign in",
          body: "Discord OAuth or email and password, with bcrypt hashing and JWT sessions through NextAuth.",
          rect: [903, 10, 45, 18],
          tag: "l",
        },
      ],
    },
    gallery: kirokuGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Home Page",
        "Stats Page",
        "Anime Detail Page",
        "Watch List Page",
      ][i],
    })),
  },
    {
    title: "Urara",
    description:
      "A fan guide to Umamusume Pretty Derby with character profiles, song previews, official news and birthdays.",
    stageMeta: {
      stack: "React, '26",
      summary: "An Umamusume guide where every character and song page is pre-rendered, so search engines get real pages from a static host.",
      glow: "glow-urara",
      alt: "Urara character guide",
    },
    features: [
      "Character profiles",
      "Music previews",
      "News feed",
      "Birthday countdown",
      "Weekly featured field",
      "Pre-rendered pages",
      "Light and dark themes",
    ],
    tags: ["React", "TypeScript", "TanStack Query", "Tailwind", "React DOM Server"],
    image: uraraImg,
    liveDemo: "https://deancruz1.github.io/Urara/",
    github: "https://github.com/deancruz1/Urara",
    slug: "urara",
    facts: {
      role: "Solo: design, frontend, build tooling, deployment",
      timeline: "2 weeks, May to June 2026; rebuilt in November 2026",
      status: "Live, rebuilt in November 2026",
    },
    highlights: {
      summary: "Each character and singer has its own page that arrives as finished HTML, and the site is laid out like a Japanese race card.",
      items: [
        { video: uraraLoopTheme, caption: "Switching themes plays a gate break: eight lanes in the gate colours race across as the new theme slides in" },
        { video: uraraLoopSearch, caption: "Search by English name, Japanese name or category, and each result is its own address" },
        { video: uraraLoopOutfits, caption: "Outfit sets in tabs, with an enlarged view" },
        { video: uraraLoopSong, caption: "Song previews with the full list of singers; only one sound plays at a time" },
        { video: uraraLoopNews, caption: "News posts open in a dialog and have their own link" },
        { image: uraraMobileMusic, portrait: true, caption: "On phones the singer filter becomes a scroll row" },
      ],
    },
    constraints: [
      ["GitHub Pages serves static files only", "There is no server to render a page when it's requested, so anything a crawler sees has to exist as a file at build time."],
      ["Umapyoi is the only data source", "It has no auth and no write access, and some profiles have no English translation yet, so those pages say so instead of showing blanks."],
      ["No new dependencies for pre-rendering", "I wanted to keep the plain Vite app, so the build uses React DOM's own server renderer and a Node script."],
      ["The site lives under /Urara/", "Every route, link and canonical URL has to carry that base path."],
    ],
    diagrams: {
      decisions: [
        { svg: uraraDeepLinksSvg, caption: "What a crawler gets when it opens a character page: a pre-rendered file that answers 200" },
        { svg: uraraPrerenderSvg, caption: "How the build renders a page, fetches what it asked for and renders again" },
      ],
      hard: [
        { svg: uraraThemeToggleSvg, caption: "The theme toggle I wanted (staircase edge) and the one that ships (straight edge)" },
      ],
    },
    callouts: {
      decisions: "GitHub Pages already serves /a/b from a/b.html. Once I knew that, pre-rendering on a static host was just writing the right files.",
      hard: "The theme toggle was meant to have a staircase edge. Animating it with clip-path fell behind on a 4K screen, so the shipped version has a straight edge, and the problem is written up for later.",
    },
    beforeAfter: [
      { label: "Home", caption: "The home page", before: uraraBeforeHome, after: uraraAfterHome, ratio: "16 / 9" },
      { label: "Character page", caption: "A character page (T.M. Opera O)", before: uraraBeforeCharacter, after: uraraAfterCharacter, ratio: "16 / 9" },
      { label: "Music page", caption: "The music page (Aston Machan)", before: uraraBeforeMusic, after: uraraAfterMusic, ratio: "16 / 9" },
      { label: "News page", caption: "The news page", before: uraraBeforeNews, after: uraraAfterNews, ratio: "16 / 9" },
      { label: "Walkthrough", caption: "The walkthrough", before: uraraBeforeVideo, after: uraraVideo, video: true, ratio: "16 / 10" },
      { label: "Card", caption: "The card thumbnail on the Work page", before: uraraBeforeCard, after: uraraImg, ratio: "1848 / 841" },
    ],
    outcomes: [
      {
        from: "3 of 4",
        to: "0",
        detail: "Main pages that answered 404. Before, only / returned 200. Now /characters, /music and /news, plus pages like /characters/king-halo and /music/haru-urara, return 200 with their own title.",
        source: "curl against the live site before and after the deploy, 14 Nov 2026",
      },
      {
        from: "4",
        to: "354",
        detail: "URLs in the sitemap.",
        source: "Counted in public/sitemap.xml before and dist/sitemap.xml after, 14 Nov 2026",
      },
      {
        from: "448.9 kB",
        to: "370.2 kB",
        detail: "The JavaScript bundle, or 138.0 kB to 117.0 kB gzipped. Framer Motion was removed in the rebuild.",
        source: "The old build at commit fbed7f2 against the current one, gzip -9, 14 Nov 2026",
      },
      {
        from: "1,349 MB",
        to: "101.9 MB",
        detail: "Total HTML for the 354 pre-rendered pages, before and after keeping only each page's own data.",
        source: "Reported by the pre-render script, 14 Nov 2026",
      },
      {
        value: "About 35 KB",
        detail: "One character page gzipped (king-halo), data included.",
        source: "gzip on the built file, 14 Nov 2026",
      },
      {
        value: "36",
        detail: "Unit tests across dates, birthdays, the weekly shuffle, redirects, sanitising and the pre-render HTML step.",
        source: "vitest, 14 Nov 2026",
      },
    ],
    takeaways: [
      "Check what a crawler actually gets. The site looked fine in a browser while three of its four main pages answered 404.",
      "Measure the output, not just the code. The pre-render worked first time and was still 13 times too big.",
      "When an animation stutters, find out which part of it is expensive before adding tricks.",
    ],
    notes: {
      decisions: [
        ["Pre-render with React DOM's server renderer in a build script", "GitHub Pages serves /characters/king-halo from characters/king-halo.html, so writing one file per route gives every page a 200 and real content without a server or a framework."],
        ["Render each page more than once", "A profile page doesn't know which profile to ask for until the character list has loaded, so the script renders, fetches whatever the page asked for, and renders again until nothing new is needed."],
        ["Ship only the data each page used", "The browser picks up from the build's data with no loading flash, and each page carries only its own queries, not the whole site's."],
        ["Slugs instead of ?id=", "/characters/king-halo reads better and can be pre-rendered; old ?id= links still redirect to the new address."],
      ],
      hard: [
        "My first pre-render shipped every page's data inside every page, and the build came to 1,349 MB.",
        "Working out which queries a page really used, not just which ones were already in the cache.",
        "The staircase edge I wanted on the theme toggle stuttered on a 4K screen, so I shipped a straight edge and wrote up the problem.",
        "Keeping the scroll position when you pick a character, now that each one is a new address.",
      ],
      next: "Rebuild the theme toggle's staircase edge from transforms only, one lane at a time, instead of one full-screen clip-path.",
    },
    overview: [
      "Urara is a fan guide to Umamusume Pretty Derby. You can browse all 175 characters with their profiles, official colours, voice lines and outfit art, play song previews filtered by singer, read the official news, and see whose birthday is next.",
      "Umamusume info was spread across wikis and playlists, so I put it in one place. It's a React and TanStack Query app on the community Umapyoi API, hosted on GitHub Pages. In the November rebuild I gave it a race-card design and a dark theme, and made the build render every page to static HTML so search engines can index them.",
    ],
    heroVideo: uraraVideo,
    annotatedScreen: {
      image: uraraGalleryImages[3],
      caption: "Urara · a character page",
      view: [0, 0, 1200, 750],
      baseWidth: 1200,
      notes: [
        {
          title: "Every character has an address",
          body: "The list links to /characters/tm-opera-o and so on, and each of those is a pre-rendered page with its own title, description and preview tags.",
          rect: [120, 83, 250, 667],
          tag: "tl",
        },
        {
          title: "Official colours from the API",
          body: "The two blocks are the character's main and sub colours as Umapyoi lists them, not colours I picked.",
          rect: [397, 83, 683, 170],
          tag: "tl",
        },
        {
          title: "Outfits by set",
          body: "Uniform, racewear and concept art sit in tabs, and clicking an outfit opens it larger in a dialog.",
          rect: [397, 277, 303, 473],
          tag: "tl",
        },
        {
          title: "English and Japanese labels",
          body: "Every profile row pairs the Japanese label with the English one, like a real race programme, and Japanese text is marked for screen readers.",
          rect: [727, 277, 353, 329],
          tag: "tl",
        },
      ],
    },
    gallery: uraraGalleryImages.map((image, i) => ({
      image,
      caption: [
        "The home page: title block and key art",
        "Days to the next birthday and the six dates after it",
        "This week's field, in the eight gate colours",
        "A character page: list, official colours, outfits and profile",
        "Songs by one singer, with previews",
        "The latest official news",
        "A news post in a dialog",
        "The home page in the dark theme",
        "A character page in the dark theme",
      ][i],
    })),
  },

  {
    title: "Oshiwatch",
    description:
      "A Hololive stream tracker laid out like a TV guide: who's on air, what's coming up in your own time zone, and your favourite talents first.",
    stageMeta: {
      stack: "React, '26",
      summary: "A Hololive programme guide that shows who's on air and what's next in your own time zone, with your favourite talents pinned to the top.",
      glow: "glow-oshiwatch",
      alt: "Oshiwatch stream tracker",
    },
    features: [
      "Your oshi favourites",
      "On air",
      "Coming up schedule",
      "Branch filter",
      "Talent roster",
      "Talent pages",
      "In-app player with live chat",
      "Light and dark themes",
      "API proxy",
    ],
    tags: ["React", "TypeScript", "TanStack Query", "Tailwind", "Vercel Functions"],
    image: oshiwatchImg,
    liveDemo: "https://oshiwatch.vercel.app",
    github: "https://github.com/deancruz1/Oshiwatch",
    slug: "oshiwatch",
    facts: {
      role: "Solo: design, frontend, API proxy, deployment",
      timeline: "Built in June 2026 over four days; updated in November 2026",
      status: "Live, updated in November 2026",
    },
    highlights: {
      summary: "The home page reads like a TV listing: your favourite talents first, then who's on air, then what's coming up hour by hour in your own time.",
      items: [
        { video: oshiwatchLoopFavourite, caption: "Starring a talent pins them to Your oshi at the top of the roster, and unstarring takes them off again" },
        { video: oshiwatchLoopBranch, caption: "The first click on a branch isolates it, more clicks add or remove branches, and On air and Coming up both follow the filter" },
        { video: oshiwatchLoopTheme, caption: "The header button switches between dark and light; until you press it the site follows your system" },
        { video: oshiwatchLoopSearch, caption: "The roster narrows as you type, keeping its generation groups and pinned favourites" },
        { video: oshiwatchLoopTabs, caption: "A talent page's streams, shorts and music each load the first time their tab is opened" },
        { image: oshiwatchMobileHome, portrait: true, caption: "On a phone, Your oshi becomes a two-column grid above On air, and long names wrap onto a second line" },
      ],
    },
    constraints: [
      ["Holodex is the only data source", "Its /channels and /live endpoints describe the same talent differently (a group on one, a suborg with a sort prefix on the other), and /live with org=Hololive also returned other agencies' streams when I checked, so I normalise and filter in the browser."],
      ["The API key has to stay off the client", "Anything Vite builds into the bundle is public, so every call goes through a Vercel function that adds the key on the server."],
      ["A static single-page app on Vercel", "There is one index.html, so every address outside /api/ has to be rewritten to it, or a direct link answers 404."],
      ["Holodex identifies talents by YouTube channel ID", "So a readable address like /talents/tokoyami-towa is resolved against the full roster, which loads 50 channels at a time."],
      ["YouTube's live chat only embeds when it's told the embedding hostname", "So the chat address carries the hostname the page is served from."],
    ],
    diagrams: {
      decisions: [
        { svg: oshiwatchApiProxySvg, caption: "The request path from the browser through the Vercel function (allowlist, key added on the server, cache header) to Holodex and back" },
        { svg: oshiwatchTalentAddressSvg, caption: "What a direct link got before (Vercel's 404) against the fallback to index.html, the slug match and the redirect from an old ID link" },
      ],
      hard: [
        { svg: oshiwatchBranchDetectionSvg, caption: "One talent as /channels and /live describe her, plus an official channel, each arriving at one branch" },
      ],
    },
    callouts: {
      decisions: "A fallback that returns a valid answer hides bugs. My branch rule fell through to JP, so EN streams didn't disappear with an error; they were filed under the wrong branch.",
      hard: "Holodex's /live has no branch field I can match as it is. suborg carries a two-character sort prefix and official channels only say \"Official\", so one branch comes from three rules instead of one.",
    },
    beforeAfter: [
      { label: "Home", caption: "The home page: card grids to a programme guide", before: oshiwatchBeforeHome, after: oshiwatchAfterHome, ratio: "16 / 10" },
      { label: "Talents", caption: "The talents page: a card grid to a roster with favourites pinned, and Gen 0 now in debut order", before: oshiwatchBeforeTalents, after: oshiwatchAfterTalents, ratio: "16 / 10" },
      { label: "Talent page", caption: "Hoshimachi Suisei's talent page", before: oshiwatchBeforeTalent, after: oshiwatchAfterTalent, ratio: "16 / 10" },
      { label: "Watch", caption: "The watch page for Suisei's GUM&DROP video", before: oshiwatchBeforeWatch, after: oshiwatchAfterWatch, ratio: "16 / 10" },
      { label: "Watch live", caption: "The watch page for a live stream, where the chat now follows the site's dark theme instead of showing white", before: oshiwatchBeforeWatchLive, after: oshiwatchAfterWatchLive, ratio: "16 / 10" },
      { label: "Direct link", caption: "A direct link to /talents: Vercel's 404 page to the roster", before: oshiwatchBeforeDeepLink, after: oshiwatchAfterDeepLink, ratio: "16 / 10" },
      { label: "Walkthrough", caption: "The walkthrough", before: oshiwatchBeforeVideo, after: oshiwatchVideo, video: true, ratio: "16 / 10" },
      { label: "Card", caption: "The card thumbnail", before: oshiwatchBeforeCard, after: oshiwatchImg, ratio: "2315 / 1259" },
    ],
    outcomes: [
      {
        from: "4",
        to: "1",
        detail: "/api/videos requests when a talent page opens (Tokoyami Towa). Before, the page fetched streams, shorts, songs and covers at once; now only the open tab's list.",
        source: "Chrome DevTools Protocol network log, 15 Nov 2026. Before: the old deployed site, opening / and then moving to the talent page inside the app, since a direct load answered 404 there. After: the local app, both a direct load and the same in-app route.",
      },
      {
        from: "12.27 MB",
        to: "0.55 MB",
        detail: "Bytes transferred for the 80 YouTube-hosted talent photos on the talents page, after scrolling to the bottom (photos requested at 800px before, 96px after).",
        source: "Chrome DevTools Protocol, cache disabled, sum of each photo request's transferred bytes (12,269,245 against 546,038), 15 Nov 2026. Before on the old deployed site, after on the local app. The two bundled fallback photos (about 49 KB) are the same in both and not counted.",
      },
      {
        value: (
          <>
            EN 0 <span>to</span> 9, DEV_IS 4 <span>to</span> 5
          </>
        ),
        detail: "Streams the home page shows with only that branch selected (JP alone went from 26 to 16; All shows 30 in both). The 10 streams that moved out of JP were EN streams and the official FLOW GLOW channel's live stream.",
        source: "The old deployed site and the local app read the same live data from the deployed API, measured 7 seconds apart, twice, on 15 Nov 2026 with the same result. ID had no streams in that data, so it couldn't be compared.",
      },
      {
        from: "356.0 kB",
        to: "372.8 kB",
        detail: "The JavaScript bundle grew by 16.8 kB (110.8 kB to 116.7 kB gzipped). The CSS went from 48.6 kB to 30.5 kB (8.7 kB to 6.9 kB gzipped).",
        source: "The old deployed site's main script and stylesheet downloaded with curl, against the files from npm run build, both gzipped at level 9 with Node's zlib, 15 Nov 2026. The live site now serves the same build (index-DUyAG7qY.js and index-qY1WFPhC.css).",
      },
      {
        from: "2 of 3",
        to: "0",
        detail: "Main addresses that answered 404 when loaded directly. Before: / returned 200, /talents and /talents/UC1uv2Oq6kNxgATlCiez59hw returned 404 (so did /talents/tokoyami-towa and /watch/dQw4w9WgXcQ). After: all five return 200, because vercel.json now rewrites every path outside /api/ to index.html, and an unknown address like /no-such-page gets the app's own not-found page instead of Vercel's 404.",
        source: "curl against https://oshiwatch.vercel.app before and after the deploy, 15 Nov 2026",
      },
      {
        value: "103",
        detail: "Unit tests in 8 files, covering branch detection, slugs and photo sizes, formatting, dates and countdowns, the schedule grouping, the music merge and the favourites store. There were none before; all 8 test files are new in this update.",
        source: "vitest, 15 Nov 2026",
      },
    ],
    takeaways: [
      "Test a filter one option at a time. With All selected the home page looked right, while EN showed nothing.",
      "Don't rely on the format of a field you don't control. Holodex's channel names changed and the old match stopped working without any error.",
      "Check what a direct link returns, not just what in-app navigation shows. The old version worked when I clicked through it, but every page except the home page answered 404 when opened from a link.",
      "Size images for where they're shown. The roster was downloading 12 MB of 800px photos for 48px circles.",
    ],
    notes: {
      decisions: [
        ["A Vercel function per endpoint with an allowlist", "Each one forwards only the parameters the app uses, caps limit at 50, adds the key and sets a cache header, so only the queries the app needs reach Holodex with my key."],
        ["Read the branch from suborg, minus its sort prefix", "Holodex's channel names no longer contain \"hololive-EN\", so the old name match counted every EN stream as JP."],
        ["Slugs from the English name", "/talents/tokoyami-towa reads better than a YouTube channel ID, and old ID links still resolve and redirect with their query string and hash."],
        ["Fetch a tab the first time it's opened", "The talent page used to request four video lists on load; now it requests one."],
      ],
      hard: [
        "Holodex's /live puts a two-character sort prefix in front of suborg (\"jaEnglish -Justice-\", \"h English -Myth-\"), so the value never matches the group name as it is.",
        "The branch filter looked fine with All selected and only broke when one branch was picked, because the channel names it relied on had changed.",
        "Merging two paginated lists newest first without \"Load more\" slipping older items in above ones already on screen.",
        "Resolving a readable address when Holodex only knows channel IDs, so the talent page has to load the roster before it knows who it is.",
      ],
      next: "Give each talent page its own title, description and canonical link in the HTML. Today every address serves the same index.html, whose canonical link points at the home page, and the tab title only changes once the script runs.",
    },
    overview: [
      "Oshiwatch is a programme guide for Hololive streams. It shows who's on air, lists what's coming up by day and hour in your own time zone with live countdowns, and keeps the talents you star at the top. You can browse the whole roster by generation or by subscribers, open a talent's streams, shorts and music, and watch in the app with live chat beside the player.",
      "I wanted to follow streams without keeping several tabs open. It's a React and TanStack Query app on the Holodex API, with three small Vercel functions in front so the API key never reaches the browser. In the November update I redesigned it as a programme guide with light and dark themes, added favourites, gave every talent a readable address, and fixed a branch filter that had quietly stopped working.",
    ],
    heroVideo: oshiwatchVideo,
    annotatedScreen: {
      image: oshiwatchGalleryImages[0],
      caption: "Oshiwatch · the home page, Your oshi and On air",
      view: [0, 0, 1200, 750],
      baseWidth: 1200,
      notes: [
        {
          title: "Your oshi",
          body: "The talents you star, on air first, then by their next stream, read from one favourites store that also stays in sync across tabs.",
          rect: [69, 84, 1058, 89],
          tag: "tr",
        },
        {
          title: "Branch from the API's group",
          body: "Each stream's branch comes from Holodex's `suborg` with its two-character prefix removed, and official channels are placed by name.",
          rect: [933, 213, 193, 24],
          tag: "l",
        },
        {
          title: "Only Hololive streams",
          body: "Holodex's live list for Hololive also carried other agencies' streams, so each video has to belong to the Hololive org, and the list refreshes every 5 minutes.",
          rect: [73, 251, 1053, 255],
          tag: "tl",
        },
        {
          title: "One clock for the whole page",
          body: "The header clock and every countdown read the same timer, which ticks on :00 and :30 of the wall clock.",
          rect: [1048, 11, 90, 28],
          tag: "l",
        },
      ],
    },
    gallery: oshiwatchGalleryImages.map((image, i) => ({
      image,
      caption: [
        "The home page: Your oshi and On air",
        "Coming up, grouped by day and hour in your own time zone",
        "The roster by generation, with favourites pinned at the top",
        "The roster sorted by subscribers, with graduated talents greyed out",
        "Takane Lui's page with her live stream and her next stream above the tabs",
        "Hoshimachi Suisei's original songs and covers in one list, newest first",
        "Oozora Subaru's live stream with chat beside the player (chat blurred)",
        "The home page in the light theme",
        "The roster in the light theme",
        "Hoshimachi Suisei's page in the light theme",
      ][i],
    })),
  },
    {
    title: "Movietopia",
    description:
      "A PHP/MySQL application with CRUD-enabled database tables and session-based authentication.",
    archiveMeta: {
      desc: "PHP review site with session auth and cascading foreign keys",
      stack: "PHP · MySQL · CSS",
    },
    features: [
      "Database",
      "Accounts",
      "Reviews",
      "Search",
    ],
    tags: ["PHP", "MySQL", "CSS"],
    image: movietopiaImg,
    github: "https://github.com/deancruz1/Movietopia",
    slug: "movietopia",
    notes: {
      decisions: [
        ["Foreign keys with cascades", "Deleting a user removes their reviews too."],
        ["Session checks per template", "One flag switches between the guest and member views."],
        ["Remember-me cookie", "Fills in your username on the login form."],
      ],
      hard: [
        "Working out which row's Edit or Delete button was clicked.",
        "An Add Review form that works with or without a movie already chosen.",
      ],
      next: "Prepared statements and hashed passwords.",
    },
    overview: [
      "Movietopia is a movie review site. You can register, log in, search and sort movies, and write, edit and delete your own star-rated reviews.",
      "It was a graded assignment for my server-side programming module, built with PHP, MySQL and sessions, and run locally on XAMPP.",
    ],
    heroVideo: movietopiaVideo,
    annotatedScreen: {
      image: movietopiaGalleryImages[2],
      caption: "Movietopia · the reviews page, logged in",
      view: [200, 70, 800, 450],
      baseWidth: 1200,
      notes: [
        {
          title: "Server-rendered PHP",
          body: "Procedural PHP and mysqli against a local MySQL database on XAMPP. Logging in stores your user ID in the PHP session, and every template checks it to decide what to show.",
        },
        {
          title: "Three linked tables",
          body: "Reviews reference both movies and users through foreign keys with `ON DELETE CASCADE`, so removing a user removes their reviews too.",
          rect: [214, 140, 772, 220],
          tag: "tl",
        },
        {
          title: "Only on your own reviews",
          body: "Edit and Delete only appear on rows where the review's user ID matches the one in your session.",
          rect: [906, 207, 76, 20],
          tag: "l",
        },
        {
          title: "Ratings drawn as stars",
          body: "A rating is saved as a number and drawn as filled and empty stars on this page.",
          rect: [722, 168, 52, 190],
          tag: "tr",
        },
      ],
    },
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
    title: "Shrine of Suisei",
    description:
      "A single-page fan site in plain HTML, CSS and JavaScript, with custom fonts and CSS animations.",
    features: [
      "Hamburger menu",
      "Glowing button",
      "CSS-only modal",
      "Responsive layout",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: landingPageImg,
    liveDemo: "https://deancruz1.github.io/Shrine_of_Suisei/",
    github: "https://github.com/deancruz1/Shrine_of_Suisei",
    slug: "landing-page",
    notes: {
      decisions: [
        ["CSS before JavaScript", "The pop-up, the glow and the parallax are all CSS."],
        ["clamp() for type", "Font sizes scale with the screen without extra media queries."],
        [":target pop-up", "A disclaimer modal with no JavaScript."],
      ],
      hard: [
        "Fading the pop-up in and out, which display can't animate, so it uses visibility and opacity.",
      ],
      next: "Put the disclaimer text back in the pop-up.",
    },
    overview: [
      "Shrine of Suisei is a one-page fan site for Hoshimachi Suisei, a VTuber I watch.",
      "I made it before starting my diploma to practise HTML and CSS. It's plain HTML, CSS and a little JavaScript, with a sticky header, a glowing button, a CSS-only pop-up and a hamburger menu for phones.",
    ],
    heroVideo: landingPageVideo,
    annotatedScreen: {
      image: landingPageGalleryImages[1],
      caption: "Shrine of Suisei · the home page with the disclaimer open",
      view: [0, 0, 1200, 675],
      baseWidth: 1200,
      notes: [
        {
          title: "No frameworks",
          body: "One HTML file, one stylesheet and a small script. Six custom fonts load through @font-face, and text sizes scale with clamp().",
        },
        {
          title: "A modal with no JavaScript",
          body: "The disclaimer opens with the `:target` pseudo-class. It fades with visibility and opacity, which can animate where display can't.",
          rect: [2, 45, 380, 85],
          tag: "tr",
        },
        {
          title: "The glowing button",
          body: "A blurred `::before` layer holds a 9-colour gradient at 400% size, and a keyframe animation slides it around on hover. An `::after` layer covers the middle so only the edge glows.",
          rect: [290, 263, 117, 38],
          tag: "tl",
        },
        {
          title: "Blurred sticky header",
          body: "The header stays at the top with a backdrop blur. On phones the links fold into a hamburger that turns into an X and closes when you pick a link.",
          rect: [868, 4, 328, 28],
          tag: "l",
        },
      ],
    },
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
    title: "Mobile XD",
    description:
      "A 154-screen high-fidelity mobile prototype mapping out navigation flows and touch-target sizing.",
    features: [
      "Navigation flows",
      "Design system",
      "Handoff specs",
    ],
    tags: ["XD", "Illustrator", "Photoshop"],
    image: mobileWireframeImg,
    liveDemo:
      "https://xd.adobe.com/view/ff47b771-facc-42d4-9af3-0043a8316f16-aa14/",
    slug: "mobile-wireframe",
    notes: {
      decisions: [
        ["Three-colour scheme", "Peach is kept for the things you can tap."],
        ["Bottom tab bar", "The main sections stay within thumb reach."],
        ["Handoff specs", "Grid alignments and component boundaries marked for developers."],
      ],
      hard: [
        "Making tappable elements stand out without cluttering the screen.",
      ],
    },
    overview: [
      "Mobile XD is my portfolio redesigned as a mobile app: a 154-screen prototype covering the home, about, portfolio and contact sections.",
      "I made it in Adobe XD, with assets from Illustrator and Photoshop, and linked the screens together so the prototype can be clicked through like a real app.",
    ],
    heroVideo: wireframeVideo,
    annotatedScreen: {
      image: wireframeGalleryImages[2],
      caption: "Mobile XD · the portfolio screen",
      view: [0, 0, 600, 1210],
      baseWidth: 600,
      portrait: true,
      notes: [
        {
          title: "154 linked screens",
          body: "Every screen is wired up in Adobe XD with interaction triggers, so the prototype can be clicked through like the real app.",
        },
        {
          title: "A stack you can back out of",
          body: "Inner pages sit on a navigation stack, so the back arrow returns you to wherever you came from.",
          rect: [70, 75, 70, 65],
          tag: "tl",
        },
        {
          title: "Work in a carousel",
          body: "Samples sit in a carousel, with the next cards peeking in from the sides so it's clear there's more to swipe through.",
          rect: [80, 350, 440, 510],
          tag: "tl",
        },
        {
          title: "Tabs within thumb reach",
          body: "The three main sections live in a bottom tab bar with large touch targets. The active tab switches to the peach accent from the colour scheme.",
          rect: [40, 1015, 520, 150],
          tag: "tl",
        },
      ],
    },
    galleryPortrait: true,
    gallery: wireframeGalleryImages.map((image, i) => ({
      image,
      caption: ["Home Page", "About Me", "Portfolio Page", "Contact Page"][i],
    })),
  },
];

export const FEATURED_SLUGS = ["kiroku", "urara", "oshiwatch"];
export const ARCHIVE_SLUGS = ["skillforge", "fansite", "portfolio-website", "movietopia"];

export function getFeaturedProjects() {
  return FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);
}

export function getArchiveProjects() {
  return ARCHIVE_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);
}
