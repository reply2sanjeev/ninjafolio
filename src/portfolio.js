/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rana's Portfolio",
  description:
    "Dedicated and passionate Microsoft Cloud Specialist in Azure Cloud and DevOps Engineer with a relentless commitment to developing end-to-end products. Specialized in architecting sustainable and scalable social and technical systems within Azure Cloud, aiming to create meaningful impact through innovative solutions.",
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
  nickname: "Azure_Ninja",
  subTitle:
  " Tech wizard alert! Watch out clouds, Sanjeev is taking over! ☁️✨.Dedicated and passionate Microsoft Cloud Specialist in Azure Cloud and DevOps Engineer with a relentless commitment to developing end-to-end products. Specialized in architecting sustainable and scalable social and technical systems within Azure Cloud, aiming to create meaningful impact through innovative solutions.",
 
 

  resumeLink:
    "https://drive.google.com/file/d/142RHtGpfFf8Tey9fw5ykpPKFybdACHEA/view?usp=sharing",
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
    name: "Gmail",
    link: "mailto:sanjeev.kmr2@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Azure Migration Specialist",
      fileName: "DataScienceImg",
      skills: [
        "⚡Designed and implemented Azure migration strategies tailored to specific application workloads, ensuring minimal downtime and data integrity",
        "⚡Utilized Azure Site Recovery (ASR) for replicating, failing over, and failing back on-premises virtual machines to Azure",
        "⚡Managed data migration projects, leveraging Azure Data Migration Services and other tools to ensure seamless transition and optimization of resources",
        "⚡Collaborated cross-functionally with stakeholders, including infrastructure teams, application developers, and business units, to align migration efforts with organizational goals",
        "⚡Implemented monitoring, logging, and security measures in Azure environments, ensuring compliance with industry standards and best practices",
      ],
      softwareSkills: [       
      ],
    },
    {
      title: "DevOps Architecture",
      fileName: "FullStackImg",
      skills: [
        "⚡Designing and implementing CI/CD pipelines for automated build, test, and deployment processes. Azure Pipelines, Azure Repos, Azure Artifacts, and Release Management",
        "⚡Proficient in creating and managing infrastructure using Azure Resource Manager (ARM) templates. Automation tools: PowerShell, Azure CLI",
        "⚡Docker containerization and orchestration with Azure Kubernetes Service (AKS). Container registry management with Azure Container Registry",
        "⚡Implementing monitoring solutions using Azure Monitor and Application Insights. Setting up logging and analytics with Azure Log Analytics",
        "⚡Azure Boards for Agile project management. Collaborating with development and operations teams using Microsoft Teams",
        "⚡Strong scripting skills using PowerShell for automation tasks. Git for version control and collaboration",
        "⚡Design, implement, and manage Azure Monitor solutions for comprehensive infrastructure and application monitoring. Configure and deploy Azure Monitor agents to collect performance metrics, logs, and traces",
        "⚡Integrate Terraform into CI/CD pipelines for automated infrastructure deployments.Collaborate with cross-functional teams to align Terraform configurations with application requirements",
        "⚡Develop and maintain infrastructure code using Terraform to provision cloud resources. Implement reusable modules for common infrastructure patterns. Ensure consistency and repeatability in infrastructure deployment",
        "⚡Monitor and triage alerts generated by Azure Monitor. Prioritize alerts based on severity and potential impact on services",
      ],
      softwareSkills: [
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡Designing and implementing scalable and resilient cloud infrastructures on Azure.Defining architecture blueprints and best practices for cloud-based applications",
        "⚡Designed and implemented Azure landing zones to establish a foundation for secure and compliant cloud environments. Developed standardized architectures for networking, identity and access management, and resource governance",
        "⚡Integration of on-premises environments with Azure for hybrid cloud solutions.Designing secure and efficient VPN and ExpressRoute connections",
        "⚡Implementing auto-scaling and load balancing for optimal resource utilization.Fine-tuning configurations for performance optimization",
        "⚡Azure Security Center implementation for threat detection and response.Designing secure network architectures and implementing identity and access management",
        "⚡Designing and implementing AVD environments for virtual desktop infrastructure (VDI).Configuring host pools, application groups, and managing virtual machines",
        "⚡Optimizing cloud resources for cost efficiency.Implementing cost monitoring and governance strategies",
        "⚡Azure Monitor and Application Insights for proactive monitoring",
      ],
      softwareSkills: [
      ],
    },
   
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [

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
    "With 15 years of experience in Sysadmin and Network admin roles, I have transitioned seamlessly into a Microsoft Cloud Specialist and DevOps Engineer. Leveraging my extensive background, I bring a wealth of expertise in cloud technologies, particularly within the Microsoft ecosystem, to optimize infrastructure, enhance security, and drive efficient DevOps practices. I am committed to delivering innovative solutions that align with organizational goals and contribute to the success of dynamic and scalable IT environments.",
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
            "⚡Designed and implemented Azure Virtual Desktop solutions, enhancing remote workforce productivity and flexibility.",
           


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
    link: "Coming Soon",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Jee Aayaan Nu, India - 174305",
    avatar_image_path: "address_image.svg",
      location_map_link: "https://goo.gl/maps/bp64rCM8eYE6oWzJ8",
  },
  phoneSection: {
    title: "Phone Number",
      subtitle: "+91 9779547807",
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
