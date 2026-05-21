import artworkImg from "../assets/img/project-cards/2d-artwork.webp";
import fansiteImg from "../assets/img/project-cards/fansite.webp";
import landingPageImg from "../assets/img/project-cards/landing-page.webp";
import mobileWireframeImg from "../assets/img/project-cards/mobile-wireframe.webp";
import movietopiaImg from "../assets/img/project-cards/movietopia.webp";
import platformerGameImg from "../assets/img/project-cards/platformer-game.webp";
import portfolioImg from "../assets/img/project-cards/portfolio-website.webp";
import landingPageVideo from "../assets/videos/landing-page.mp4";
import fansiteVideo from "../assets/videos/fansite.mp4";
import movietopiaVideo from "../assets/videos/movietopia.mp4";
import platformerVideo from "../assets/videos/platformer.mp4";
import artworkVideo from "../assets/videos/artwork.mp4";
import wireframeVideo from "../assets/videos/wireframe.mp4";
import portfolioVideo from "../assets/videos/portfolio-website.mp4";

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

const platformerGallery = import.meta.glob(
  "../assets/img/project-gallery/platformer/*.webp",
  { eager: true },
);
const platformerGalleryImages = Object.values(platformerGallery).map(
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
  {
    title: "Portfolio Website",
    category: "Front-End",
    description:
      "Featured by Republic Polytechnic as a model website for reference (sole student in cohort to be selected)",
    longDescription:
      "Made during my time in Republic Polytechnic, this project stood out among my cohort for its clean code structure, responsive design, and attention to user experience. It was selected by my lecturers as the model website for future students to reference when working on their own assignments. Being the only student in my cohort to receive this recognition was a proud moment that validated my passion for front-end development and reinforced my commitment to writing clean, well-documented code.",
    tags: ["HTML", "CSS", "JS", "Bootstrap"],
    image: portfolioImg,
    liveDemo: "https://deancruz1.github.io/Old-Portfolio-Website/index.html",
    github: "https://github.com/deancruz1/Old-Portfolio-Website",
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
    category: "Front-End",
    description:
      "Simple Landing Page built with HTML, CSS, and JavaScript. It features a clean design, smooth animations, and responsive layout.",
    longDescription:
      "A side-project of mine that I did before undertaking my Diploma in Digital Design and Development at Republic Polytechnic, this project was created solely with my then knowledge of HTML and CSS. While the web design and code in this landing page may seem rudimentary, this project is important to me as it encompasses my passion towards front-end development and creating aesthetically pleasing websites. My memories of spending countless nights looking through Stack Overflow trying to resolve certain issues within the site before finally fixing them and the feeling I felt then serves as a reminder of why I am pursuing this career path.",
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
    category: "Front-End",
    description:
      "A fan-made website for a popular anime series, featuring responsive design and interactive elements.",
    longDescription:
      "A project I am currently doing, with the aim of honing my HTML, CSS and Javascript skills, without the use of a Bootstrap template. In the future, this website will have responsive web design and seamless transitions between pages. The website's theme is based off of one of my favourite anime, 86 (Eighty-Six).",
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
    title: "Movietopia",
    category: "Full-Stack",
    description:
      "A web application for movie enthusiasts to discover, review, and track their favorite films.",
    longDescription:
      "A movie reviews website coded with PHP and using mySQL as the database. Users are able to login, edit their user information, add, edit and delete their own reviews for each movie. Each movie is also added into the website through the use of PHP and mySQL and is not hard coded into the website. Through this website, I learned how the back-end of a website can function with the use of local-side databases, as well as some rudimentary styling on the website to make it more user-friendly and approachable.",
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
    title: "Platformer Game",
    category: "Full-Stack",
    description:
      "A simple platformer game built with Java, featuring smooth controls and engaging gameplay.",
    longDescription:
      "Motivated by my passion in video games and combined with my knowledge in programming, I challenged myself to create a video game in Java with the help of video tutorials by Kaarin Gaming and to expand my knowledge in object-oriented programming. I am keen to explore this passion further with more side projects to create video games that I like in the future such as turn based RPGs, possibly in a different engine such as Unity or RPGMaker.",
    tags: ["Java"],
    image: platformerGameImg,
    github: "https://github.com/deancruz1/platformer-game",
    slug: "platformer-game",
    heroVideo: platformerVideo,
    gallery: platformerGalleryImages.map((image, i) => ({
      image,
      caption: ["Level 1", "Level 2", "Game Over", "Main Menu"][i],
    })),
  },
  {
    title: "Mobile Wireframe",
    category: "Design",
    description: "A mobile wireframe design for a hypothetical app.",
    longDescription:
      "A wireframe prototype of what my portfolio website may look like if it was designed as a mobile application, done through Adobe XD. Through this project, I have learnt how to deliver quality user experiences through emphasis by usage of colors and detail in interactable elements, as well as an intuitive user interface that the user will be able to use easily to navigate around the application.",
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
      "A collection of 2D artwork created using various digital art tools.",
    longDescription:
      "A compilation of the artworks that i've created using Adobe Illustrator and Photoshop. I have learnt how to create graphic designs through the use of digital tools and have honed my skills in graphic design through experience in using the software. In this artwork compilation, you will be able to see my growth and confidence using Illustrator and Photoshop as my competence in creating designs grow, from simple logos and image manipulation to magazine headers and promotional posters.",
    tags: ["Photoshop", "Illustrator"],
    image: artworkImg,
    slug: "2d-artwork",
    heroVideo: artworkVideo,
    gallery: artworkGalleryImages.map((image, i) => ({
      image,
      caption: [
        "Home Page (Website)",
        "Abote Me Page (Website)",
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
