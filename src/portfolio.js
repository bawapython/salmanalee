/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Salman Ali",
  title: "Hi all, I'm Salman Ali",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Python, JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "#", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bawapython",
  linkedin: "https://www.linkedin.com/in/aleee/",
  gmail: "ceo@salmanalee.com",
  gitlab: "https://gitlab.com/bawapython",
  facebook: "https://www.facebook.com/ali.salman",
  twitter: "https://twitter.com/@salmanaleeX",
  stackoverflow: "https://stackoverflow.com/users/12395926/salmanalee",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Turnkey Solution for Ecommerce store development and administration"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NUST University",
      logo: require("./assets/images/nustlogo.png"),
      subHeader: "Bachelor of ELectrical Engineering (Information & Communication Systems)",
      duration: "September 2006 - June 2010",
      desc: "Rector Gold Medalist for Best Industry Project",
      descBullets: [
        "Prime Minister Scholarship Holder for 4 year degree",
      ]
    },
    {
      schoolName: "Beaconhouse Scool System",
      logo: require("./assets/images/bsslogo.png"),
      subHeader: "High Scool Degree",
      duration: "September 2003 - April 2006",
      desc: "Ranked No 1 in the program. Took short courses on Applied Engineering, Entrepreneurship, Computer Science, ...",
      descBullets: ["Captain of the Sport Club for 4 consecutive years"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud Engineering",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Executive Engineer",
      company: "NRTC",
      companylogo: require("./assets/images/nrtclogo.png"),
      date: "June 2010 – 2022",
      desc: ".",
      descBullets: [
        "Research and Development",
        "System Design and Integration",
        "Software Development"
      ]
    },
    {
      role: "System Engineer (MTO)",
      company: "FFC",
      companylogo: require("./assets/images/ffclogo.png"),
      date: "Feb 2010 – Dec 2010",
      desc: ".",
      descBullets: [
        "IBM Tivoli System Deployment",
        "VOIP Telephony Software development",
        "ISO 27001 ISM standard deployment"
      ]
    },
    {
      role: "Web Developer/Sys Administrator",
      company: "NUST",
      companylogo: require("./assets/images/nustlogo.png"),
      date: "Jan 2008 – Sep 2009",
      desc: "Performed my duties as web develper/Administrator for NUST EXYLENT(EXploring Young LEaders Natural Talent) Program."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Details can be explored on given weblink",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Details can be explored on given weblink",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/shopifylogo.webp"),
      projectName: "ARMIZ STORE",
      projectDesc: "Shopify Private Label Ecommerce Store",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://armiz.store/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In contestent",
      subtitle:
        "Representation as few Pakistani Google Code-in contestents out of 4000 students across 100 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        },
        {
          name: "Award Letter",
          url: "#"
        },
        {
          name: "Google Code-in Blog",
          url: "#"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed an unofficial Google Assistant Action Client that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "#"
        }
      ]
    },
    {
      title: "Shopify Partner",
      subtitle:
        "As a certified Shopify partner, I have the skills and experience to create stunning and functional online stores using the Shopify platform.",
      image: require("./assets/images/shopifypartner.webp"),
      imageAlt: "Shopify Certified Partner and Developer",
      footerLink: [
        {
          name: "Develop your store with PRO!",
          url: "https://partners.shopify.com/3282580"
        }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed PWA Web development Certifcation from Academind by Maximilian Schwarzmüller",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://pro.academind.com/p/progressive-web-apps-pwa-the-complete-guide"},
        {
          name: "Final Project",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "#",
      title: "Wondering how to start a dropshipping Ecommerce business with no money?",
      description:
        "The good news is, it's definitely doable. The not-so-good news is starting out with zero capital means you need to put in a lot of legwork to see it succeed."
    },
    {
      url: "#",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "#",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "#",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://podcasters.spotify.com/pod/show/salman-ali919/episodes/AI--Future-of-Web-Development-e2dp9c9"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92 310 944 7669",
  email_address: "ceo@salmanalee.com"
};

// Twitter Section

const twitterDetails = {
  userName: "salmanaleeX", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
