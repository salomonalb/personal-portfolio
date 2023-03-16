import profilePicture from "./images/profile-picture.png";
import htmlIcon from "./images/icons/html-icon.png";
import cssIcon from "./images/icons/css-icon.png";
import javascriptIcon from "./images/icons/javascript-icon.png";
import typescriptIcon from "./images/icons/typescript-icon.png";
import scssIcon from "./images/icons/sass-icon.png";
import reactIcon from "./images/icons/react-icon.png";
import gitIcon from "./images/icons/git-icon.png";
import npmIcon from "./images/icons/npm-icon.png";
import linkedinIcon from "./images/icons/linkedin-icon.png";
import twitterIcon from "./images/icons/twitter-icon.png";
import githubIcon from "./images/icons/github-icon.png";
import emailIcon from "./images/icons/email-icon.png";
import phoneIcon from "./images/icons/phone-icon.png";
import responsiveIcon from "./images/icons/responsive-icon.png";
import usaIcon from "./images/icons/usa-icon.webp";
import crowdfundingImage from "./images/projects/crowdfunding-productpage.png";
import dashboardImage from "./images/projects/dashboard-with-theme-switcher.png";
import commentSectionImage from "./images/projects/interactive-comment-section.png";
import sunnyImage from "./images/projects/sunny-side-agency.png";
import tipCalculatorImage from "./images/projects/tip-calculator-app.png";
import notificationimage from "./images/projects/notifications-page.png";

export type skill = {
  name: string;
  icon: string;
  certificate: string;
};

export type project = {
  name: string;
  description: string;
  websiteLink: string;
  githubLink: string;
  projectImage: string;
};

export type contact = {
  text: string;
  link: string;
  icon: string;
};

export type user = {
  name: string;
  description: string;
  profilePicture: string;
  skills: skill[];
  projects: project[];
  contactMethods: contact[];
};

export const userData: user = {
  name: "Salomón León",
  description:
    "I'm a Front End Web Developer from Venezuela currently living in Santiago, Chile. My preferred tech stack includes React, TypeScript and SCSS but I'm always open to expand my skillset to meet the demands of any project. I'm looking for a Developer position. I have a diverse portfolio with many practice projects to showcase my coding abilities and style to potential employers. I'm fluent in English and a native Spanish speaker, so feel free to contact me for any question you may have",
  profilePicture: profilePicture,
  skills: [
    {
      name: "HTML",
      icon: htmlIcon,
      certificate:
        "https://www.testdome.com/certificates/a1b31380739b43538bbbf045ab1a3b88",
    },
    {
      name: "CSS",
      icon: cssIcon,
      certificate:
        "https://www.testdome.com/certificates/a1b31380739b43538bbbf045ab1a3b88",
    },
    {
      name: "JavaScript",
      icon: javascriptIcon,
      certificate:
        "https://www.testdome.com/certificates/1ae4d38bfca04f7f8b37856d9b041bd4",
    },
    {
      name: "TypeScript",
      icon: typescriptIcon,
      certificate:
        "https://www.testdome.com/certificates/cd950de7804845eb8ae3cf03aec921a2",
    },
    {
      name: "SCSS",
      icon: scssIcon,
      certificate: "",
    },
    {
      name: "React",
      icon: reactIcon,
      certificate:
        "https://www.testdome.com/certificates/5262bc8a6ebe49f8996285a83aaf36c4",
    },
    {
      name: "GIT",
      icon: gitIcon,
      certificate:
        "https://www.testdome.com/certificates/9c4266e8824d4df7b0a93d8465d5f533",
    },
    {
      name: "NPM",
      icon: npmIcon,
      certificate: "",
    },
    {
      name: "English",
      icon: usaIcon,
      certificate: "https://www.efset.org/cert/FSZ4vy",
    },
    {
      name: "Responsive Web Design",
      icon: responsiveIcon,
      certificate:
        "https://www.freecodecamp.org/certification/salomonleon/responsive-web-design",
    },
  ],
  projects: [
    {
      name: "Interactive Comment Section",
      description:
        "Interactive Comment Section is a project built on the CRUD pattern, allowing users to perform standard operations such as creating new comments, replying to existing ones, and editing their own comments. In addition, users can upvote and downvote comments made by other users, and a sorting algorithm ensures that the most popular comments appear at the top of the main thread",
      websiteLink: "https://interactive-comment-section-react-sl.netlify.app",
      githubLink: "https://github.com/salomonalb/interactive-comment-section",
      projectImage: commentSectionImage,
    },
    {
      name: "Crowdfunding Product Page",
      description:
        "This project allows you to select a reward for supporting a project, make pledges and input the amount to be billed. As you make pledges, the page keeps track of the changes of the total amount backed, the number of backers, the bookmarked state, and the quantity of rewards left.",
      websiteLink: "https://crowndfunding-productpage.netlify.app",
      githubLink:
        "https://github.com/salomonalb/crowdfunding-product-page-main",
      projectImage: crowdfundingImage,
    },
    {
      name: "Tip Calculator App",
      description:
        "This calculator allows you to input the amount to be billed, the percentage to tip and the number of people to split the bill with. It outputs the tip amount for each person and the total amount for each person. Finally, it has a button that allows you to reset the app.",
      websiteLink: "https://tip-calculator-app-blas.netlify.app",
      githubLink: "https://github.com/salomonalb/tip-calculator-app",
      projectImage: tipCalculatorImage,
    },
    {
      name: "Sunnyside Agency Landing Page",
      description:
        "This Project is a responsive landing page based on the design given by frontend mentor.It's made with HTML, SCSS and TypeScript. To make the page responsive I used CSS Grid, Flexbox and media Queries. To make the sizes more fluid I used the CSS min() function along with vw (viewport width) units. I also took advantage of SCSS specific features like Variables, Nested Selectors, Nested Media Queries and the Parent Selector '&'.This allowed me to Organize my styles with the BEM methodology.",
      websiteLink: "https://sunny-side-agency-project.netlify.app",
      githubLink:
        "https://github.com/salomonalb/sunnyside-agency-landing-page-main",
      projectImage: sunnyImage,
    },
    {
      name: "Notifications page",
      description:
        "Users are able to toggle notifications from unread to read and a counter shows the number of unread notifications",
      websiteLink: "https://notifications-page-project.netlify.app",
      githubLink: "https://github.com/salomonalb/notifications-page",
      projectImage: notificationimage,
    },
    {
      name: "Social Media Dashboard With Theme Switcher",
      description:
        "A social media stats dashboard where users can toggle the theme from dark to light and viceversa",
      websiteLink: "https://dashboard-with-theme-switcher-b.netlify.app",
      githubLink:
        "https://github.com/salomonalb/social-media-dashboard-with-theme-switcher",
      projectImage: dashboardImage,
    },
  ],
  contactMethods: [
    {
      text: "Salomon Leon",
      link: "https://www.linkedin.com/in/salomon-leon-58765a23a/",
      icon: linkedinIcon,
    },
    {
      text: "@blasdev",
      link: "https://twitter.com/blasdev",
      icon: twitterIcon,
    },
    {
      text: "salomonalb",
      link: "https://github.com/salomonalb",
      icon: githubIcon,
    },
    {
      text: "salomonleon197@gmail.com",
      link: "mailto:salomonleon197@gmail.com",
      icon: emailIcon,
    },
    {
      text: "+56 9 6640 2674",
      link: "tel:+56966402674",
      icon: phoneIcon,
    },
  ],
};
