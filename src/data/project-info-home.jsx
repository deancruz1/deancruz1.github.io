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
      "A fan guide to Umamusume Pretty Derby with character profiles, music previews, news and birthdays.",
    stageMeta: {
      stack: "React, '25",
      summary: "An Umamusume guide that translates Japanese profiles on demand.",
      glow: "glow-urara",
      alt: "Urara character guide",
    },
    features: [
      "Character profiles",
      "Translation",
      "Music browser",
      "News feed",
      "Birthday calendar",
      "Accent colours",
    ],
    tags: ["React", "TypeScript", "TanStack Query", "Tailwind", "Framer Motion"],
    image: uraraImg,
    liveDemo: "https://deancruz1.github.io/Urara/",
    github: "https://github.com/deancruz1/Urara",
    slug: "urara",
    notes: {
      decisions: [
        ["TanStack Query", "Caching, refetching and loading states without a useEffect chain per call."],
        ["Umapyoi API", "Free, no auth, and covers characters, music and news."],
        ["MyMemory API", "Translates Japanese profile text without an API key."],
        ["GitHub Pages", "Everything runs in the browser, so static hosting is enough."],
      ],
      hard: [
        "Rendering the raw HTML the news API returns without opening an XSS hole.",
        "One character filter that's a sidebar on desktop and a scroll row on phones.",
        "A single shared audio player, so only one music preview plays at a time.",
      ],
      next: "Pre-render character and music pages so search engines can index them.",
    },
    overview: [
      "Urara is a fan guide to Umamusume Pretty Derby: character profiles with voice samples and galleries, a music browser with previews, a news feed and a birthday calendar.",
      "Umamusume info was spread across wikis and playlists, so I put it in one place. It's a React app on the Umapyoi API, and Japanese profile text can be translated on demand.",
    ],
    heroVideo: uraraVideo,
    annotatedScreen: {
      image: uraraGalleryImages[1],
      caption: "Urara · a character page",
      view: [0, 0, 1200, 675],
      baseWidth: 1200,
      notes: [
        {
          title: "All data through TanStack Query",
          body: "Everything comes from the Umapyoi API. TanStack Query handles caching, background refetching and loading states, which is cleaner than a useEffect chain for every call.",
        },
        {
          title: "Translated on demand",
          body: "Part of the API only returns Japanese. A profile is translated through the MyMemory API when you ask for it, the result is cached, and a toggle goes back to the original.",
          rect: [146, 156, 518, 272],
          tag: "tl",
        },
        {
          title: "One colour per character",
          body: "Each character's primary colour drives the buttons, borders and highlights on their page. Components take it as a prop, so nothing is hardcoded.",
          rect: [822, 172, 212, 24],
          tag: "l",
        },
        {
          title: "Two layouts for one filter",
          body: "A vertical sidebar on desktop and a horizontal scroll row on phones.",
          rect: [2, 30, 132, 643],
          tag: "tr",
        },
      ],
    },
    gallery: uraraGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Home Page",
        "Characters Page",
        "Music Page",
        "News Page",
      ][i],
    })),
  },

  {
    title: "Oshiwatch",
    description:
      "A Hololive stream tracker. See who's live, what's coming up, and watch in-app with live chat.",
    stageMeta: {
      stack: "React, '25",
      summary: "A Hololive stream tracker that keeps its API key off the client.",
      glow: "glow-oshiwatch",
      alt: "Oshiwatch stream tracker",
    },
    features: [
      "API proxy",
      "Live and upcoming",
      "Branch filters",
      "Infinite pagination",
      "Talent pages",
      "In-app player",
    ],
    tags: ["React", "TypeScript", "TanStack Query", "Tailwind"],
    image: oshiwatchImg,
    liveDemo: "https://oshiwatch.vercel.app",
    github: "https://github.com/deancruz1/Oshiwatch",
    slug: "oshiwatch",
    notes: {
      decisions: [
        ["Vercel serverless proxy", "A VITE_ env var would ship the Holodex key inside the bundle."],
        ["useInfiniteQuery", "Archives load 50 videos at a time instead of all at once."],
        ["Holodex API v2", "Live status, schedules, talents and archives from one API."],
        ["Client-side filtering", "Branch fields differ between endpoints, so I normalise them myself."],
      ],
      hard: [
        "The same branch is called group on /channels and suborg on /live.",
        "Keeping brand channels, graduates and sub-channels out of the roster.",
        "YouTube's live chat only embeds on the deployed domain, so local testing needed vercel dev.",
        "Telling streams, shorts and music apart in one archive feed.",
      ],
      next: "Favourites saved in the browser, to pin talents to the top.",
    },
    overview: [
      "Oshiwatch tracks Hololive streams. It shows who's live and what's coming up, filters by branch, and lets you watch in the app with live chat beside the player.",
      "I wanted to follow streams without keeping five tabs open. The data comes from the Holodex API through a Vercel serverless proxy, so the API key stays off the client.",
    ],
    heroVideo: oshiwatchVideo,
    annotatedScreen: {
      image: oshiwatchGalleryImages[0],
      caption: "Oshiwatch · the home page, live and upcoming streams",
      view: [150, 0, 900, 506.25],
      baseWidth: 1200,
      notes: [
        {
          title: "The API key never reaches the browser",
          body: "Every stream here comes from the Holodex API. A `VITE_` env var would ship the key inside the client bundle, so the calls go through a Vercel serverless function.",
        },
        {
          title: "Refetched every 5 minutes",
          body: "TanStack Query polls for live data every 5 minutes and handles the caching.",
          rect: [244, 106, 706, 284],
          tag: "tr",
        },
        {
          title: "Filtered in the browser",
          body: "Holodex names a talent's branch `group` on one endpoint and `suborg` on another. I normalise both client-side, so the filters don't depend on API parameters.",
          rect: [843, 49, 106, 20],
          tag: "l",
        },
        {
          title: "Only Hololive streams",
          body: "15 unaffiliated streams kept showing up on this page. Matching on names wrongly hid JP talents, so the filter checks the channel's org instead.",
          rect: [244, 421, 706, 80],
          tag: "tr",
        },
      ],
    },
    gallery: oshiwatchGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Home — Live & Upcoming",
        "Talents Page",
        "Talent Detail Page",
        "Watch Page",
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
