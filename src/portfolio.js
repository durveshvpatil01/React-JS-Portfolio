/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Durvesh Patil",
  title: "Hi all, I'm Durvesh",
  subTitle: emoji(
    "A passionate Web Developer 🚀 having an experience of designing and building Web applications with JavaScript / Reactjs / Nodejs."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1h3WAQx2YGVdMJcbSyoaW0E5cV8zdB7Hh/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/durveshvpatil01",
   linkedin: "https://www.linkedin.com/in/durvesh-patil-182785207/",
  gmail: "durveshvpatil01@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@durveshvpatil01",
  //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/durvesh9861/',
  twitter: 'https://twitter.com/durveshvpatil01_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Front End Web DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) with React.js"),
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
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "DG Ruparel College",
      logo: require("./assets/images/DG ruparel.webp"),
      subHeader: "Master of Science in Computer Science",
      duration: " 2022 -  2024",
      desc: "Learn about Web3 , SDN,mongoDB,etc",
      descBullets: [
        "Build react.js Web application like Rock-Paper-Scissors Game, Chess Game,CodeShop"
      ]
    },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/mumbai university.webp"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2019 - 2022",
      desc:
        "Got 8.95 CGPI in the program. Took courses about Software development, Web development, python,.net,Operating Systems, ...",
      descBullets: ["Build react.js Web application like Covid-19 tracer,text editor,etc"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Clever Programmer",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "September 2020 – Present",
      desc:
        "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials"
      ]
    },
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "July 2019 – September 2020",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "November 2018 – July 2019",
      desc:
        "I've conducted internal audit making sure the organization is compliant with the GDPR."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Big Project on which I work",
  projects: [
    {
      image: require("./assets/images/codeshop.png"),
      projectName: "CodeShop",
      projectDesc: "It's an E-commerce website where I can sell all my coding Project to customers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://codeshop-by-durvesh-patil.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chess.png"),
      projectName: "Chess Game",
      projectDesc: "This is a full stack game based on web app. In which whole project is build with react.js and styled components. And In the backend you can store moves and lots of things.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chess-game-by-durvesh-patil.netlify.app/"
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
      title: "KLiC Certificate Course in C Programming",
      subtitle:
        "Learn About C lang, opps,Problem solving.",
      image: require("./assets/images/C lang certificate.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/15rA-RKWKh27Xa7gXoL4Gz9XeKw_AMF8x/view"
        },
      ]
    },
    {
      title: "Android Mobile Certication program!",
      subtitle:
        "Learn about android studio, build android APK",
      image: require("./assets/images/android.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1xs5fpVqsI42h7zVOdATEtxqsMYhyhIIB/view"
        }
      ]
    },
    {
      title: "Introduction to Front-End Development by Meta",
      subtitle:
        "Learn about Front end web development, Html5,css,js,react.js",
      image: require("./assets/images/meta.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://coursera.org/share/69d70cabdcfb00ae7048a15512b1f48c"
        }
      ]
    },

    {
      title: "Responsive Web Design by FreeCodeCamp",
      subtitle:
        "Learn about how to build responsive website.",
      image: require("./assets/images/responsive web dev.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://freecodecamp.org/certification/durveshvpatil01/responsive-web-design"
        }
      ]
    },
    {
      title: "Foundational C# with Microsoft",
      subtitle:
        "Learn basic and advance concept of C#",
      image: require("./assets/images/responsive web dev.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://freecodecamp.org/certification/durveshvpatil01/foundational-c-sharp-with-microsoft"
        }
      ]
    },

    {
      title: "Scientific Computing with Python by FreeCodeCamp",
      subtitle: "Learn advance Python and build Projets on python",
      image: require("./assets/images/Scientific Computing with python.png"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Certification",
          url: "https://freecodecamp.org/certification/durveshvpatil01/scientific-computing-with-python-v7"
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

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9765795624",
  email_address: "durveshvpatil01@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Durvesh", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
