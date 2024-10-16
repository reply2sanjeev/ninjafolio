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
    url: "https://portfolio.ranasanjeev.online/",
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
        "⚡Proficient in utilizing Azure Migrate Services for assessing on-premises environments, physical servers, Nutanix, and VMware environments",
        "⚡Experience in executing large-scale migrations, ensuring minimal downtime and data integrity",
        "⚡Designed and implemented Azure migration strategies tailored to specific application workloads, ensuring minimal downtime and data integrity",
        "⚡Conducted comprehensive assessments of on-premises infrastructures to identify migration requirements and constraints",
        "⚡Successfully migrated physical servers, Nutanix, and VMware environments to Azure, ensuring minimal downtime and data integrity",
        "⚡Utilized Azure Site Recovery (ASR) for replicating, failing over, and failing back on-premises virtual machines, Nutanix, and VMware environments to Azure",
        "⚡Managed data migration projects, leveraging Azure Data Migration Services and other tools to ensure seamless transition and optimization of resources",
        "⚡Collaborated cross-functionally with stakeholders, including infrastructure teams, application developers, and business units, to align migration efforts with organizational goals",
        "⚡Implemented monitoring, logging, and security measures in Azure environments, ensuring compliance with industry standards and best practices",
        "⚡Design, implement, and manage Azure Monitor solutions for comprehensive infrastructure and application monitoring. Configure and deploy Azure Monitor agents to collect performance metrics, logs, and traces",
        "⚡Monitor and triage alerts generated by Azure Monitor. Prioritize alerts based on severity and potential impact on services",
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
        "⚡Integrate Terraform into CI/CD pipelines for automated infrastructure deployments.Collaborate with cross-functional teams to align Terraform configurations with application requirements",
        "⚡Develop and maintain infrastructure code using Terraform to provision cloud resources. Implement reusable modules for common infrastructure patterns. Ensure consistency and repeatability in infrastructure deployment",
        
      ],
      softwareSkills: [
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡Designing and implementing scalable and resilient cloud infrastructures on Azure. Defining architecture blueprints and best practices for cloud-based applications",
        "⚡Designed and implemented Azure landing zones to establish a foundation for secure and compliant cloud environments. Developed standardized architectures for networking, identity and access management, and resource governance",
        "⚡Integration of on-premises environments with Azure for hybrid cloud solutions. Designing secure and efficient VPN and ExpressRoute connections. Implementing auto-scaling and load balancing for optimal resource utilization. Fine-tuning configurations for performance optimization",
        "⚡Azure Security Center implementation for threat detection and response.Designing secure network architectures and implementing identity and access management",
        "⚡Designing and implementing AVD environments for virtual desktop infrastructure (VDI).Configuring host pools, application groups, and managing virtual machines",
        "⚡Optimizing cloud resources for cost efficiency.Implementing cost monitoring and governance strategies. Azure Monitor and Application Insights for proactive monitoring",
        
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
        "⚡ Graduates with a BCOM degree.",
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
        "⚡Installation and Configuration of Windows and Linux Operating system. System Drivers. Device Management",
        "⚡Building and Configuring Computer Systems. Setting up Local Area Networks. Network Configuration and Troubleshooting Exercises. Diagnosing Hardware and Network Issues",
        "⚡System Optimization and Performance Tuning. Backup and Recovery Procedures",
        "⚡Wi-Fi Standards. Wireless Security (WPA, WPA2).Wireless Access Points (APs) and Routers",
        "⚡Virtual Private Networks (VPNs). Secure Socket Layer (SSL) and Transport Layer Security (TLS)",
        "⚡Introduction to Networking. Types of Networks (LAN, WAN, MAN). Networking Protocols (TCP/IP). Network Devices (Routers, Switches, Hubs). Subnetting and IP Addressing",
        "⚡MCSE in 2003",
        "⚡CCNA coaching and practical work",
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
      title: "AZ-104: Azure Administrator",
      subtitle: "Microsoft",
      logo_path: "az.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/RanaSanjeev/E87EF8A959ABDE48?sharingId=21537036736891C7",
      alt_name: "Microsoft Azure Administrator",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
      {
      title: "AZ-500: Azure Security Engineer Associate",
      subtitle: "Microsoft",
      logo_path: "azsec.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/RanaSanjeev/31DC2A83C59FFA43?sharingId=21537036736891C7",
      alt_name: "Azure Security Engineer Associate",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },

        {
      title: "SC-300: Identity and Access Administrator Associate",
      subtitle: "Microsoft",
      logo_path: "iai.png",
      certificate_link:
        "https://learn.microsoft.com/api/credentials/share/en-us/RanaSanjeev/2605A900671AE884?sharingId=21537036736891C7",
      alt_name: "Identity and Access Administrator Associate",
      // color_code: "#2AAFED",
      color_code: "#47A048",
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
      title: "Sentinel Ninja",
      subtitle: "Micosoft Sentinel Ninja",
      logo_path: "sentinal.png",
      certificate_link:
        "https://drive.google.com/file/d/1uL68KWR4d9reTxXZIqIaERYElal8e8FJ/view?usp=sharing",
      alt_name: "Micosoft Sentinel Ninja",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
         {
      title: "Microsoft Defender for Identity Ninja",
      subtitle: "Microsoft Defender for Identity Ninja",
      logo_path: "IDEN.png",
      certificate_link:
        "https://drive.google.com/file/d/1QSlVAH0sMTtKDqU40YwfGQ6dNaVKJyYr/view?usp=sharing",
      alt_name: "Microsoft Defender for Identity Ninja",
      // color_code: "#F6B808",
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
      title: "Cisco Certified Network Associate Routing and Switching (CCNA Routing and Switching)",
      subtitle: "Cisco",
      logo_path: "cisco_ccna_R_26S.png",
      certificate_link:
        "https://www.credly.com/badges/18256d7d-a2d9-4a28-b15a-d169f4a0bdee",
      alt_name: "CCNA",
      color_code: "#E2405F",
    },
    {
      title: "Getting Started in Cybersecurity 2.0",
      subtitle: "Fortinet NSE",
      logo_path: "forti.png",
      certificate_link:
        "https://www.credly.com/badges/199f04b8-7aec-47b5-ba75-066cb87eee3e",
      alt_name: "Cyber Security",
      color_code: "#E2405F",
    },
    {
      title: "Fortinet Certified Fundamentals Cybersecurity",
      subtitle: "Fortinet Cybersecurity",
      logo_path: "fortinet-certified-fundamentals-cybersecurity.png",
      certificate_link:
        "https://www.credly.com/badges/8a11f74c-85f4-451c-a2eb-c73e9d429999",
      alt_name: "Cyber Security",
      color_code: "#E2405F",
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
      title: "Scrum Foundation Professional Certificate SFPC (v2020)",
      subtitle: "Scrum",
      logo_path: "scrum.png",
      certificate_link:
        "https://drive.google.com/file/d/19zqyJ_dKhpy5L3t_oHSiQjTgfpR7kaRw/view?usp=share_link",
      alt_name: "Scrum",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
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
            "⚡Led the architecture and deployment of Azure cloud solutions for diverse clients, optimizing resource allocation and ensuring high availability. ⚡Designed and implemented Azure Virtual Desktop solutions, enhancing remote workforce productivity and flexibility. ⚡Created and managed Azure Landing Zones for clients, providing a secure and compliant foundation for their Azure workloads. ⚡Successfully planned and executed Azure Site Recovery for clients, ensuring business continuity in the event of disasters. ⚡Spearheaded the implementation of Azure DevOps CI/CD pipelines, reducing deployment time and enhancing project scalability. ⚡Developed complex Terraform for infrastructure as code, simplifying management of large-scale projects. ⚡Leveraged PowerShell scripting for automation, task scheduling, and routine maintenance, reducing manual workload. ⚡Managed and monitored Azure resources, creating advanced rules and alerts in Azure Monitor to ensure continuous availability and performance. ⚡Collaborated with cross-functional teams to integrate unit test cases into the build pipeline, ensuring code quality and reliability. ⚡Led a team of Azure engineers, providing technical guidance and mentoring, resulting in efficient project execution and client satisfaction. ⚡Ensured application-consistent backups and automated daily snapshots, minimizing data loss and streamlining recovery. ⚡Implemented Azure security best practices, including Azure Security Center, Azure Policy, and Azure Firewall. ⚡Managed Azure Virtual Network, VPN, and ExpressRoute connections to create secure network architectures. ⚡Oversaw Azure Backup and Azure File Sync for data protection and synchronization. ⚡Provided expert consultation on Azure Landing Zones for clients, optimizing their cloud environments.",
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
            "⚡Created and maintained continuous build and continuous integration environments in SCRUM and Agile projects.⚡ Managed and coordinated the day-to-day planning, design and implementation of cloud services, infrastructure automation and server deployments. ⚡Set up Amazon EC2 instances and security groups and databases in AWS using S3 bucket and configured instance backups to S3 bucket, later migrated applications to AWS Cloud, created new accounts, roles and groups using IAM. Maintained DNS records using Route53, gave public DNS names to Elastic Load Balancers (ELB) IP's. ⚡Assisted to stage the development environment from on-premises to AWS cloud-based infrastructure using Cloud formation templates (CFT) to provision infrastructure as a code. ⚡Defined AWS Security Groups, which acted as virtual firewalls that controlled the traffic, allowed reaching one or more AWS EC2 instances. Working on Multiple AWS instances, set the security groups, Elastic Load Balancer and AMIs, Auto scaling to design cost effective, fault tolerant and highly available systems. ⚡Created S3 buckets and managing policies for S3 buckets and Utilized S3 bucket for storage and backup on AWS. ⚡Created Cloud Watch alerts for instance and using them in Auto-scaling launch configurations. ⚡Excellent Analytical and Communication skills, Quick Learner, Versatile Team player, Organized, Self-Motivated, can pick up new technologies and solve complex technical problems. ⚡A solid understanding of cloud computing, IAAS, PaaS, SaaS, and Cloud design patterns. ⚡Experience in Windows Azure Technologies (CDN, ACS, Notification services, SQL Azure, Blobs, Traffic Manager). ⚡Experience in implementing dynamic scalability and reliability in Azure. ⚡Ensuring federated access across Active Directory and Azure AD. Troubleshooting and resolving Azure environment performance issues, connectivity issues, security issues, etc. Working with teams to integrate Azure infrastructure components into processes and procedures ⚡Experience in setting up automation (CI/CD) on Azure devops for different frameworks. ⚡Good Knowledge of Azure SQL instances.",
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
            "⚡Prepared the environment for deployment of Windows Server 2003/2008/2016. ⚡System Administration and Operating Systems, VMWare Administration, Systems Hardware (PowerEdge Servers), Enterprise Level Systems infrastructure. ⚡Working on Datacenter Operations i.e network technologies, industry standards and audit requirements. ⚡Configured automatic updates for network clients by using Group Policy. ⚡Performed day-to-day administration functions, backup and restoration, file server maintenance. ⚡Supported all remote offices and home-based users using NetMeeting, VNC, Cisco VPN and Fortigate VPN. ⚡Solely responsible for all IT decision making, support and administration at a site of more than 200	demanding users in a fast paced architectural and engineering environment. ⚡Manage security solutions, including Cisco firewall, Fortigate Units, Anti-virus, and intrusion detection systems. ⚡Manage all network hardware and equipment, including Routers, Switches, hubs, and UPSs. ⚡Provide first hand support, IT training, and troubleshooting to all office staff for IT matters ⚡Administer all equipment, hardware and software upgrades. ⚡Practice network asset management, including maintenance of network component inventory and related. ⚡Documentation and technical specifications information. ⚡Installation, configuration, and deployment of VMware products such as VMware ESXI, VMware converter. ⚡Working on AWS EC2 for various services (Instance creation, Instance Snapshot, Made Security Groups). Working on Load Balancer. Involved in designing and deploying a multitude application utilizing almost all the AWS stack (Including EC2, Route53, S3, RDS, Lamda) focusing on high-availability, fault tolerance, and auto-scaling. ⚡Working on Microsoft Azure (Managing User infrastructure, Licensing,). ⚡Basic knowledge of Ansible (install server and clients with Playbook command)",
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
            "⚡Resolved the issues involved with administering and maintaining corporate infrastructure, including network connectivity, Internet access, email, etc. Excellent understanding of the issues involved in administering and maintaining corporate LAN. ⚡Installation & Configuration of ACTIVE DIRECTORY SERVICES. Configuration & Maintaining Microsoft windows server 2003, server 2008 and server 2012 network Infrastructure. ⚡Installation and configuration of VMWARE, Citrix Xen and Oracle VM servers and to yield the various Operating Systems instances on them. Managing ESXi, and vSphere environments with VCenter Management. Creation of Templates from VMs and Creation of VMs from templates. ⚡Install & Configure Google Apps, Microsoft Outlook, OWA & Server monitoring. ⚡Manage Windows Server DC, DNS, DHCP, IIS, FTP Server. ⚡Installation and configuration of Wi-Fi on Linksys Cisco Access Point. Installation and Configuration on VOIP VONAGE phones. ⚡Managed IPPBX server (PRI and MVOIP) with end devices Cisco 7940 and 7960 G series IP phones. ⚡Monitor and manage all aspects of server performance and availability through Nagios, MRTG and Network View.",
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
            " ⚡Managed Active directory, DNS and DHCP Servers. ⚡Managed server 2003, 2008 & client OS Win XP, Win 7. ⚡Worked with AD for managing the authentication between different organizations. ⚡Managed user accounts, groups and controlling access rights using Active Directory. ⚡Installing & configuring WSUS server for Patching. ⚡Well known to draw the Diagram about the Network Environment in MS Visio Professional. ⚡Weekly, monthly reporting relating to network performance.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Learning Path",
      experiences: [
        {
          title: "Microsoft Learning",
          company: "Microsoft Corporation",
          company_url: "https://learn.microsoft.com/en-us/users/ranasanjeev/",
          logo_path: "microsoft_logo.png",
          duration: "Jan 2021- Till date",
          location: "Online",
          description:
            "I'm excited to embark on a journey of continuous learning with Microsoft, exploring their comprehensive resources to deepen my understanding of both Microsoft technologies and DevOps practices.Engaging with Microsoft Learning is key to my goal of mastering not only Microsoft technologies but also adopting DevOps principles to streamline development processes.As I dive into Microsoft Learning, I'm eager to integrate DevOps methodologies into my skill set, ensuring seamless collaboration between development and operations teams while leveraging Microsoft's tools and best practices.",
          color: "#ee3c26",
        },
        {
          title: "Lifelong Learning",
          company: "CertiProf",
          company_url: "https://www.credly.com/badges/22569211-8861-40a6-b249-101406d13fdd",
          logo_path: "CertiProf-Badge-LLL.png",
          duration: "April 2026- Till date",
          location: "Online",
          description:
            "I am honored to receive this badge, which acknowledges my steadfast commitment to lifelong learning. In our ever-changing digital world, this recognition highlights my qualities of an open, disciplined mind, constantly evolving to navigate and contribute to the expanding landscape of knowledge. I am dedicated to using and sharing my expertise to contribute to a more equal and better world. Thank you for this meaningful recognition.",
          color: "#ee3c26",
        },
        {
          title: "ISC2 Candidate",
          company: "ISC",
          company_url: "https://www.credly.com/badges/bcd45586-1224-4bf4-9a1b-5881b7554921",
          logo_path: "isc.png",
          duration: "Dec 2023 - Dec 2024",
          location: "Online",
          description:
            "I've just been awarded the Cybersecurity Certification badge! 🎉 This recognition marks a significant milestone in my journey towards mastering cybersecurity practices.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Honors & Awards",
      experiences: [
        {
          title: "Employee of the Month",
          company: "Farenexus",
          company_url: "https://drive.google.com/file/d/1pZxT13lhmALN8MczvZmn1RxJVklnRspb/view?usp=sharing",
          logo_path: "logo-farenexus.png",
          duration: "October 2022",
          location: "Mohali",
          description:
            "Excellent team player and always enthusiastic with a solution oriented approach.",
          color: "#4285F4",
        },
        {
          title: "Supporting Role",
          company: "Tmotions",
          company_url: "https://drive.google.com/file/d/1XxkpV5DygIHYb_DJ0tVbGO9ZktH9dPKd/view?usp=sharing",
          logo_path: "tmotions.png",
          duration: "March 2020 - April 2021",
          location: "Bestech Business Tower- Mohali",
          description:
            "Best Supporting Role Awardee Amidst Covid-19 Challenges for DevOps Excellence and Team Leadership.",
          color: "#4285F4",
        },
       {
          title: "Employee of the Month",
          company: "NVISH",
          company_url: "https://www.nvish.com/",
          logo_path: "nvish-logo-1.svg",
          duration: "Oct 2011 - June 2016",
          location: "Quark City Mohali",
          description:
            "I'm pleased to share that throughout my career, I've had the privilege of receiving numerous cash prizes rupees 5000 on multiple occasions. These prizes have been a testament to my dedication and hard work..",
          color: "#4285F4",
        },
        {
          title: "Excellence",
          company: "Competent",
          company_url: "https://drive.google.com/file/d/1acQQuUq3Ww5rCS7OO5DVJ41cxTzumh9d/view?usp=sharing",
          logo_path: "Competent-Group-Logo.png",
          duration: "Dec 2008 - Dec 2009",
          location: "Mohali",
          description:
            "Honored as the recipient of the Best Exemplary Performance award for my outstanding contributions among our team of 50 members.",
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
    profile_image_path: "ninja.gif",
    description:
      "I am the 'Automation Guru' - even your breakfast is probably served by robots! 🤖. Sanjeev Kumar Rana, the Cloud Specialist extraordinaire! 🚀  I like a tech chameleon adapting with the times. My passion for continuous learning and automation is a superpower, making processes smoother than ever! 💻🤖 Problem-solving is my middle name, and staying ahead of the tech game is my secret weapon. Together, we'll conquer the cloud and drive DevOps success in our organization. Let's innovate and create a tech revolution! 🌟😄.",
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
