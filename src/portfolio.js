/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rana's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sanjeev Rana Portfolio",
    type: "website",
    url: "https://www.ranasanjeev.live/",
  },
};

//Home Page
const greeting = {
  title: "Sanjeev Rana",
  logo_name: "SanjeevRana",
  nickname: "layman_brother",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/reply2sanjeev/masterPortfolio",
  githubProfile: "https://github.com/reply2sanjeev",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/reply2sanjeev",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sanjeev-kumar-50b95954/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:sanjeev.kmr2@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
   
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Himachal Pradesh University Shimla",
      subtitle: "Becholar in Commerce",
      logo_path: "HPU.svg",
      alt_name: "HPU Shimla",
      duration: "2001-2005",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://hpuniv.ac.in//",
    },
    {
      title: "Jetking",
      subtitle: "JCHNP",
      logo_path: "Jetking.png",
      alt_name: "HPU Shimla",
      duration: "2001-2005",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://jetking.com///",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AZ-900: Azure Fundamentals",
      subtitle: "Microsoft",
      logo_path: "Az900.png",
      certificate_link:
        "https://www.credly.com/badges/ccc04a53-f2e8-4598-8a2e-5b67b6e014a5",
      alt_name: "Microsoft Azure",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Microsoft Security: Who Hacked? Challenge",
      subtitle: "CLOUD SKILLS CHALLENGE",
      logo_path: "sec.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/training/challenges?id=1e3f64af-3cc8-4b5c-9b9a-78c998c1a45f",
      alt_name: "CLOUD SKILLS CHALLENGE",
      color_code: "#E2405F",
    },
    {
      title: "Cloud Ninja",
      subtitle: "Micosoft Defender For Cloud",
      logo_path: "Ninja.png",
      certificate_link:
        "https://drive.google.com/file/d/1dnXzW-IAMcoqTWSoTbNiI9_13cKiDnZQ/view?usp=share_link",
      alt_name: "Micosoft Defender For Cloud",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Oracle Cloud Infrastructure Foundations 2021 Certified Associate",
      subtitle: "Oracle Cloud",
      logo_path: "ora.png",
      certificate_link:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=288E4D6C7BBE29B23E370D729DA865858EDFF7542AF5B2D8F8411F00070C0E8B",
      alt_name: "Oracle Cloud",
      color_code: "#2AAFED",
    },
    {
      title: "CISSP® - Certified Information Systems Security Professional",
      subtitle: "SkillUp",
      logo_path: "skillup-logo_v1.png",
      certificate_link:
        "https://simpli-web.app.link/e/Y5jto9pCpxb",
      alt_name: "CISSP",
      color_code: "#2AAFED",
    },
    {
      title: "Introduction to Cybercrime",
      subtitle: "SkillUp",
      logo_path: "skillup-logo_v1.png",
      certificate_link:
        "https://simpli-web.app.link/e/zGFasuzCpxb",
      alt_name: "Cybercrime",
      color_code: "#2AAFED",
    },
    {
      title: "Getting Started with DevOps",
      subtitle: "SkillUp",
      logo_path: "skillup-logo_v1.png",
      certificate_link:
        "https://simpli-web.app.link/e/SetnjbZCpxb",
      alt_name: "DevOps",
      color_code: "#2AAFED",
    },
    {
      title: "Introduction to Kubernetes",
      subtitle: "SkillUp",
      logo_path: "skillup-logo_v1.png",
      certificate_link:
        "https://simpli-web.app.link/e/D7kaW85Cpxb",
      alt_name: "Kubernetes",
      color_code: "#2AAFED",
    },
    {
      title: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)",
      subtitle: "OPSWAT Academy",
      logo_path: "ICIP.png",
      certificate_link:
        "https://www.credly.com/badges/e7f6bf66-496b-4d8a-a0a3-7e6d6a60c6f6",
      alt_name: "OPSWAT",
      color_code: "#2AAFED",
    },
    {
      title: "OPSWAT File Security Associate (OFSA)",
      subtitle: "OFSA",
      logo_path: "OFSA.png",
      certificate_link:
        "https://www.credly.com/badges/04e07cd4-534d-4c3f-83b3-8ec9c96286d3",
      alt_name: "OPSWAT",
      color_code: "#2AAFED",
    },
    {
      title: "OPSWAT Network Security Associate (ONSA)",
      subtitle: "OPSWAT Academy",
      logo_path: "ONSA.png",
      certificate_link:
        "https://www.credly.com/badges/3b477fdb-71cf-4a88-8cc7-f03bc4603ed8",
      alt_name: "OPSWAT",
      color_code: "#2AAFED",
    },
    {
      title: "OPSWAT Web Traffic Protection Associate (OWPA)",
      subtitle: "OPSWAT Academy",
      logo_path: "OWPA.png",
      certificate_link:
        "https://www.credly.com/badges/105e7fab-6734-4975-a57e-030d1b9fba36",
      alt_name: "OPSWAT",
      color_code: "#2AAFED",
    },
    {
      title: "OPSWAT Secure Storage Associate (OSSA)",
      subtitle: "OPSWAT Academy",
      logo_path: "OSSA.png",
      certificate_link:
        "https://www.credly.com/badges/04fd1735-f485-44af-8d78-bffa903d0d25",
      alt_name: "OPSWAT",
      color_code: "#2AAFED",
    },
    {
      title: "OPSWAT Legacy System Associate (OLSA)",
      subtitle: "OPSWAT Academy",
      logo_path: "OLSA.png",
      certificate_link:
        "https://www.credly.com/badges/12ccc0d8-133e-4a9a-993a-ae090f461dcb",
      alt_name: "OPSWAT",
      color_code: "#2AAFED",
    },
    {
      title: "OPSWAT Email Security Associate (OESA)",
      subtitle: "OPSWAT Academy",
      logo_path: "OESA.png",
      certificate_link:
        "https://www.credly.com/badges/7ccd1250-16be-4b48-94ce-52ce2a7a0e64",
      alt_name: "OPSWAT",
      color_code: "#2AAFED",
    },
    {
      title: "OPSWAT Endpoint Compliance Associate (OECA)",
      subtitle: "OPSWAT Academy",
      logo_path: "OECA.png",
      certificate_link:
        "https://www.credly.com/badges/90a954da-60f2-453c-a65d-ff3f60319d61",
      alt_name: "OPSWAT",
      color_code: "#2AAFED",
    },
    {
      title: "OPSWAT Data Transfer Security Associate (ODSA)",
      subtitle: "OPSWAT Academy",
      logo_path: "ODSA.png",
      certificate_link:
        "https://www.credly.com/badges/7107d752-8ca0-48d6-ac0f-13679cff6610",
      alt_name: "OPSWAT",
      color_code: "#2AAFED",
    },
    {
      title: "Cyber Offence",
      subtitle: "ISEA",
      logo_path: "isea.png",
      certificate_link:
        "https://drive.google.com/file/d/1IGGw6ksCvjNE9lr1fVDRoJgFB4FWQ7HE/view?usp=sharing",
      alt_name: "ISEA",
      color_code: "#2AAFED",
    },
    {
      title: "Cyber Hygiene Practitioner Certification",
      subtitle: "ISEA",
      logo_path: "isea.png",
      certificate_link:
        "https://drive.google.com/file/d/17cjm7HXIYw0tYpvXMM0yh8rDDyLgl5du/view?usp=sharing",
      alt_name: "ISEA",
      color_code: "#2AAFED",
    },
    //{
    //  title: "MLH Local Hack Day: Build",
     // subtitle: "Major League Hacking",
      //logo_path: "mlh-logo.svg",
      //certificate_link:
       // "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      //alt_name: "Google",
      //color_code: "#fe0037",
    //},
    //{
      //title: "Hack20",
      //subtitle: "Flutter International Hackathon",
      //logo_path: "flutter.png",
      //certificate_link:
      //  "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      //alt_name: "Flutter International Hackathon",
      //color_code: "#2AAFED",
    //},
    {
      title: "Scrum Foundation Professional Certificate SFPC (v2020)",
      subtitle: "Scrum",
      logo_path: "scrum.png",
      certificate_link:
        "https://drive.google.com/file/d/19zqyJ_dKhpy5L3t_oHSiQjTgfpR7kaRw/view?usp=share_link",
      alt_name: "Scrum",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Learning Path, Honors & Awards",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Sr. DevOps Engineer",
          company: "Farenexus Solutions",
          company_url: "https://www.farenexus.com/",
          logo_path: "logo-farenexus.png",
          duration: "Jan2022 - PRESENT",
          location: "Montréal, Canada",
          description:
            " Expertise in Architecting and Implementing Azure Service Offering, such as Azure cloud services, Azure storage, IIS, Azure Active Directory (AD), Azure Resource Manager (ARM), Blob Storage, Azure VMs, SQL Database, Azure Functions, Azure Service Fabric, Azure Monitor, and Azure Service Bus. Knowledge in Power Shell scripting for automation and to schedule tasks. Knowledge in automating build and deployment, infrastructure and processes for our projects. Continuous monitoring by creating rules and alerts using Azure Monitor. Knowledge in implementation of Azure load balancer. Implementation and configuring of azure backup. Proven ability to Analyze successfully an organization cloud migration, managing both classic & ARM portal, effectively used Power Shell to manage Azure services, troubleshooting access related issues. Knowledge on using and maintaining Azure Key Vault. Experience in blob storage and file storage. Providing best suggestions about replication policies LRS, GRS, RA-GRS and ZRS. Experience on Windows Azure (IaaS, PaaS), VSTS (CI/CD), Azure SQL, MS SQL, IIS, Azure Web Apps, Cloud services, Azure Storage, Traffic manager, PowerShell. Ensured application consistent Backups and automated daily snapshots leveraging automation Knowledge on data migration using Azure Storage Explorer and Life Cycle Management. Experience on branching and merging strategies/Policies. Integration of unit test cases in building pipeline. Deploying Azure virtual machines and monitoring through Nerdio Knowledge on configuring Self Hosted Agent and SPN - Service Principal Name. Having knowledge in configuring the Site-to-Site and Point-to-Site VPN connections. Managing Virtual disk allocation as per the Client & Application requirement. Managing Azure SQL Server user creation and Maintenance. Hands on experience on YAML. Experience on Terraform. Experience in Azure site recovery services and Azure Backup and Restoring Deleted VMs. Good presentation, customer support and trouble shooting skills.",
          color: "#0879bf",
        },
        {
          title: "DevOps Engineer",
          company: "Tmotions Global ",
          company_url: "https://tmotions.com/",
          logo_path: "tmotions.png",
          duration: "May 2018 - Dec 2021",
          location: "Regent Street, London",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#00FFFF",
        },
        {
          title: "DevOps Engineer",
          company: "Alphanet Consulting LLC",
          company_url: "https://anetcorp.com/",
          logo_path: "Alphanet.png",
          duration: "July 2016 - May 2018",
          location: "Santa Clara, USA",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Sr. Network Engineer",
          company: "NVISH.",
          company_url: "https://www.nvish.com/",
          logo_path: "nvish-logo-1.svg",
          duration: "Oct 2011 - June 2016",
          location: "Newark, USA",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
        {
          title: "IT Executive",
          company: "Competent Synergies Private Limited.",
          company_url: "https://www.competent.biz/",
          logo_path: "Competent-Group-Logo.png",
          duration: "Dec 2008 - Oct 2011",
          location: "Mohali, India",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Learning Path",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Honors & Awards",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "NinjaMain.gif",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
