/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "PhotoScavengerHunt",
    imagePath: "projects/codepath.png",
    imageAlt: "Codepath Logo",
    description: "PhotoScavengerHunt is an app that has a list which requires the user to attach photos based on the task. After attaching the photo to a task, the app shows the user where that photo was taken in a map. Completed as coursework for CodePath iOS 102.",
    date: "March 1 2024",
    technologiesUsed: ["Xcode", "Swift", "UIKit", "PHPicker", "MapKit", "PhotosUI"],
    githubLink: "https://github.com/qetsiankulu/ios102-project1-scavenger-hunt",
    demoLink: "https://www.loom.com/share/9b658daa464342a291a0be4bcf1cf7e7"
  }, 
  {
    id: 2,
    name: "TriviaGame",
    imagePath: "projects/codepath.png",
    imageAlt: "Codepath Logo",
    description: "TriviaGame is an app that challenges users with trivia questions spanning a variety of categories and difficulties, providing a dynamic, interactive learning experience. Completed as coursework for CodePath iOS 102.",
    date: "March 31 2024",
    technologiesUsed: ["Swift", "Xcode", "SwiftUI", "RESTful API", "JSON"],
    githubLink: "https://github.com/qetsiankulu/ios102-project5-triviagame", 
    demoLink: "https://www.loom.com/share/b6a2d7d3a49141dca6771dc1542be7ec",
  }, 
  {
    id: 3,
    name: "TranslateMe",
    imagePath: "projects/codepath.png",
    imageAlt: "Codepath Logo",
    description: "TranslateMe is an app that translates English text into multiple languages like Arabic, Chinese, French, German, Italian, and Spanish. Every translation is saved and accessible to user to view. Completed as coursework for CodePath iOS 102.",
    date: "April 5 2024",
    technologiesUsed: ["Swift", "Xcode", "SwiftUI", "RESTful API", "Firebase"],
    githubLink: "https://github.com/qetsiankulu/ios102-project6-translateme", 
    demoLink: "https://www.loom.com/share/6259d6ec881f49e7826069c9887871d2",
  }, 
];


export const archivedProjects = [
  {
    id: 1,
    name: "Nujabes Tribute",
    imagePath: "projects/nujabes.jpeg",
    imageAlt: "Nujabes Drawing",
    description: "A simple responsive webpage designed as a tribute to the late godfather of hip-hop. Built with an embedded media player using the Spotify API.",
    date: "2023",
    technologiesUsed: ["HTML", "CSS", "Responsive Web Design"],
    githubLink: "https://github.com/qetsiankulu/nujabes-tribute",
    demoLink: "https://qetsiankulu.github.io/nujabes-tribute/",
  }, 
]

export const BtnList = [
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  { label: "Resume", link: "/", icon: "resume", newTab: false }

];

export const NAV_ITEMS = ["About", "Projects", "Contact", "Resume"];

