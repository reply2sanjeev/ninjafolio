/*
 * azureninjas.in — all site content lives in this file.
 * Edit text, links and lists here; the components read from it.
 * Logos referenced by "logo" must exist in src/assets/images/.
 */

export const settings = {
  // Shuriken + katana-slash intro on first load. Set to false to skip it.
  showIntro: true,
};

export const seo = {
  title: "Sanjeev Rana · Cloud & DevOps Transformation Engineer",
  description:
    "Sanjeev Rana — cloud transformation leader and DevOps team lead specialising in Microsoft Azure, Microsoft 365, cloud security, infrastructure automation and AI solutions.",
  url: "https://www.azureninjas.in/",
};

export const greeting = {
  name: "Sanjeev Rana",
  alias: "Cloud & DevOps Transformation Engineer",
  // Hero cycles through these with a decode effect. Add, remove or reorder freely.
  taglines: [
    "Azure Security Ninja",
    "Azure DevOps Engineer",
    "Cloud & DevOps Transformation",
    "AI Engineer",
  ],
  role: "DevOps Team Lead · Farenexus",
  base: "SAS Nagar, Punjab",
  activeSince: 2008,
  summary:
    "Cloud transformation leader with 10+ years helping organisations modernise. I migrate, harden and automate Microsoft Azure and Microsoft 365 estates for managed-service clients — landing zones, Sentinel and Defender, infrastructure as code, and AI-powered automation.",
  resumeLink:
    "https://drive.google.com/file/d/142RHtGpfFf8Tey9fw5ykpPKFybdACHEA/view?usp=sharing",
  githubProfile: "https://github.com/reply2sanjeev",
};

export const socialMediaLinks = [
  { name: "GitHub", icon: "github", link: "https://github.com/reply2sanjeev" },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/sanjeev-kumar-50b95954/" },
  { name: "Email", icon: "mail", link: "mailto:sanjeev.kmr2@gmail.com" },
];

// Skills: each discipline shows its tools as tags and its points as a list.
export const skills = [
  {
    title: "Cloud security & SecOps",
    tools: ["Microsoft Sentinel", "Defender for Cloud", "Defender for Identity", "Entra ID", "Azure Firewall", "Azure Policy", "Purview"],
    points: [
      "Building Sentinel workspaces, data connectors, analytics rules and hunting queries in KQL",
      "Hardening subscriptions with Defender for Cloud, Azure Policy and secure-score remediation",
      "Identity protection with Entra ID Conditional Access, PIM and Defender for Identity",
      "Information protection and compliance controls across Microsoft 365 with Purview",
      "Azure Security Center implementation for threat detection and response. Designing secure network architectures and implementing identity and access management",
    ],
  },
  {
    title: "Cloud infrastructure architecture",
    tools: ["Landing zones", "Hub and spoke", "ExpressRoute", "VPN Gateway", "Azure Virtual Desktop", "Azure Monitor"],
    points: [
      "Designing and implementing scalable and resilient cloud infrastructures on Azure. Defining architecture blueprints and best practices for cloud-based applications",
      "Designed and implemented Azure landing zones to establish a foundation for secure and compliant cloud environments. Developed standardized architectures for networking, identity and access management, and resource governance",
      "Integration of on-premises environments with Azure for hybrid cloud solutions. Designing secure and efficient VPN and ExpressRoute connections. Implementing auto-scaling and load balancing for optimal resource utilization. Fine-tuning configurations for performance optimization",
      "Designing and implementing AVD environments for virtual desktop infrastructure (VDI). Configuring host pools, application groups, and managing virtual machines",
      "Optimizing cloud resources for cost efficiency. Implementing cost monitoring and governance strategies. Azure Monitor and Application Insights for proactive monitoring"
    ],
  },
  {
    title: "Azure migration",
    tools: ["Azure Migrate", "Azure Site Recovery", "Database Migration Service", "VMware", "Nutanix"],
    points: [
      "Proficient in utilizing Azure Migrate Services for assessing on-premises environments, physical servers, Nutanix, and VMware environments",
      "Experience in executing large-scale migrations, ensuring minimal downtime and data integrity",
      "Designed and implemented Azure migration strategies tailored to specific application workloads, ensuring minimal downtime and data integrity",
      "Conducted comprehensive assessments of on-premises infrastructures to identify migration requirements and constraints",
      "Successfully migrated physical servers, Nutanix, and VMware environments to Azure, ensuring minimal downtime and data integrity",
      "Utilized Azure Site Recovery (ASR) for replicating, failing over, and failing back on-premises virtual machines, Nutanix, and VMware environments to Azure",
      "Managed data migration projects, leveraging Azure Data Migration Services and other tools to ensure seamless transition and optimization of resources",
      "Collaborated cross-functionally with stakeholders, including infrastructure teams, application developers, and business units, to align migration efforts with organizational goals",
      "Implemented monitoring, logging, and security measures in Azure environments, ensuring compliance with industry standards and best practices",
      "Design, implement, and manage Azure Monitor solutions for comprehensive infrastructure and application monitoring. Configure and deploy Azure Monitor agents to collect performance metrics, logs, and traces",
      "Monitor and triage alerts generated by Azure Monitor. Prioritize alerts based on severity and potential impact on services"
    ],
  },
  {
    title: "DevOps & infrastructure as code",
    tools: ["Azure DevOps", "Terraform", "Bicep", "ARM", "PowerShell", "AKS", "Docker", "Git"],
    points: [
      "Designing and implementing CI/CD pipelines for automated build, test, and deployment processes. Azure Pipelines, Azure Repos, Azure Artifacts, and Release Management",
      "Proficient in creating and managing infrastructure using Azure Resource Manager (ARM) templates. Automation tools: PowerShell, Azure CLI",
      "Docker containerization and orchestration with Azure Kubernetes Service (AKS). Container registry management with Azure Container Registry",
      "Implementing monitoring solutions using Azure Monitor and Application Insights. Setting up logging and analytics with Azure Log Analytics",
      "Azure Boards for Agile project management. Collaborating with development and operations teams using Microsoft Teams",
      "Strong scripting skills using PowerShell for automation tasks. Git for version control and collaboration",
      "Integrate Terraform into CI/CD pipelines for automated infrastructure deployments. Collaborate with cross-functional teams to align Terraform configurations with application requirements",
      "Develop and maintain infrastructure code using Terraform to provision cloud resources. Implement reusable modules for common infrastructure patterns. Ensure consistency and repeatability in infrastructure deployment"
    ],
  },
  {
    title: "AI & automation",
    tools: ["Azure AI Foundry", "Azure OpenAI", "Copilot", "Logic Apps", "Azure Functions"],
    points: [
      "AI-powered automation and Microsoft Copilot integrations for operations teams",
      "Building AI assistants and agents on Azure-hosted infrastructure",
      "Event-driven automation with Logic Apps and Functions — alert routing, ticketing and reporting",
    ],
  },
];

export const experience = {
  work: [
    {
      "role": "DevOps Team Lead",
      "company": "Farenexus Solutions",
      "url": "https://www.farenexus.com/",
      "logo": "logo-farenexus.png",
      "duration": "Jan 2022 – Present",
      "location": "Mohali, India",
      "points": [
        "Leading a team of 5 engineers running Azure and Microsoft 365 managed services for client environments",
        "Led the architecture and deployment of Azure cloud solutions for diverse clients, optimizing resource allocation and ensuring high availability",
        "Designed and implemented Azure Virtual Desktop solutions, enhancing remote workforce productivity and flexibility",
        "Created and managed Azure Landing Zones for clients, providing a secure and compliant foundation for their Azure workloads",
        "Successfully planned and executed Azure Site Recovery for clients, ensuring business continuity in the event of disasters",
        "Spearheaded the implementation of Azure DevOps CI/CD pipelines, reducing deployment time and enhancing project scalability",
        "Developed complex Terraform for infrastructure as code, simplifying management of large-scale projects",
        "Leveraged PowerShell scripting for automation, task scheduling, and routine maintenance, reducing manual workload",
        "Managed and monitored Azure resources, creating advanced rules and alerts in Azure Monitor to ensure continuous availability and performance",
        "Collaborated with cross-functional teams to integrate unit test cases into the build pipeline, ensuring code quality and reliability",
        "Ensured application-consistent backups and automated daily snapshots, minimizing data loss and streamlining recovery",
        "Implemented Azure security best practices, including Azure Security Center, Azure Policy, and Azure Firewall",
        "Managed Azure Virtual Network, VPN, and ExpressRoute connections to create secure network architectures",
        "Oversaw Azure Backup and Azure File Sync for data protection and synchronization",
        "Provided expert consultation on Azure Landing Zones for clients, optimizing their cloud environments"
      ],
      "progression": "Team Lead since Jan 2025 · Sr. DevOps Engineer 2022–2024"
    },
    {
      "role": "DevOps Engineer",
      "company": "Tmotions Global",
      "url": "https://tmotions.com/",
      "logo": "tmotions.png",
      "duration": "May 2018 – Dec 2021",
      "location": "Regent Street, London",
      "points": [
        "Created and maintained continuous build and continuous integration environments in SCRUM and Agile projects",
        "Managed and coordinated the day-to-day planning, design and implementation of cloud services, infrastructure automation and server deployments",
        "Set up Amazon EC2 instances and security groups and databases in AWS using S3 bucket and configured instance backups to S3 bucket, later migrated applications to AWS Cloud, created new accounts, roles and groups using IAM. Maintained DNS records using Route53, gave public DNS names to Elastic Load Balancers (ELB) IP's",
        "Assisted to stage the development environment from on-premises to AWS cloud-based infrastructure using Cloud formation templates (CFT) to provision infrastructure as a code",
        "Defined AWS Security Groups, which acted as virtual firewalls that controlled the traffic, allowed reaching one or more AWS EC2 instances. Working on Multiple AWS instances, set the security groups, Elastic Load Balancer and AMIs, Auto scaling to design cost effective, fault tolerant and highly available systems",
        "Created S3 buckets and managing policies for S3 buckets and Utilized S3 bucket for storage and backup on AWS",
        "Created Cloud Watch alerts for instance and using them in Auto-scaling launch configurations",
        "Excellent Analytical and Communication skills, Quick Learner, Versatile Team player, Organized, Self-Motivated, can pick up new technologies and solve complex technical problems",
        "A solid understanding of cloud computing, IAAS, PaaS, SaaS, and Cloud design patterns",
        "Experience in Windows Azure Technologies (CDN, ACS, Notification services, SQL Azure, Blobs, Traffic Manager)",
        "Experience in implementing dynamic scalability and reliability in Azure",
        "Ensuring federated access across Active Directory and Azure AD. Troubleshooting and resolving Azure environment performance issues, connectivity issues, security issues, etc. Working with teams to integrate Azure infrastructure components into processes and procedures",
        "Experience in setting up automation (CI/CD) on Azure devops for different frameworks",
        "Good Knowledge of Azure SQL instances"
      ]
    },
    {
      "role": "DevOps Engineer",
      "company": "Alphanet Consulting LLC",
      "url": "https://anetcorp.com/",
      "logo": "Alphanet.png",
      "duration": "July 2016 – May 2018",
      "location": "Santa Clara, USA",
      "points": [
        "Prepared the environment for deployment of Windows Server 2003/2008/2016",
        "System Administration and Operating Systems, VMWare Administration, Systems Hardware (PowerEdge Servers), Enterprise Level Systems infrastructure",
        "Working on Datacenter Operations i.e. network technologies, industry standards and audit requirements",
        "Configured automatic updates for network clients by using Group Policy",
        "Performed day-to-day administration functions, backup and restoration, file server maintenance",
        "Supported all remote offices and home-based users using NetMeeting, VNC, Cisco VPN and Fortigate VPN",
        "Solely responsible for all IT decision making, support and administration at a site of more than 200 demanding users in a fast paced architectural and engineering environment",
        "Manage security solutions, including Cisco firewall, Fortigate Units, Anti-virus, and intrusion detection systems",
        "Manage all network hardware and equipment, including Routers, Switches, hubs, and UPSs",
        "Provide first hand support, IT training, and troubleshooting to all office staff for IT matters",
        "Administer all equipment, hardware and software upgrades",
        "Practice network asset management, including maintenance of network component inventory and related",
        "Documentation and technical specifications information",
        "Installation, configuration, and deployment of VMware products such as VMware ESXI, VMware converter",
        "Working on AWS EC2 for various services (Instance creation, Instance Snapshot, Made Security Groups). Working on Load Balancer. Involved in designing and deploying a multitude application utilizing almost all the AWS stack (Including EC2, Route53, S3, RDS, Lamda) focusing on high-availability, fault tolerance, and auto-scaling",
        "Working on Microsoft Azure (Managing User infrastructure, Licensing,)",
        "Basic knowledge of Ansible (install server and clients with Playbook command)"
      ]
    },
    {
      "role": "Sr. Network Engineer",
      "company": "NVISH",
      "url": "https://www.nvish.com/",
      "logo": "nvish-logo-1.svg",
      "duration": "Oct 2011 – June 2016",
      "location": "Newark, USA",
      "points": [
        "Resolved the issues involved with administering and maintaining corporate infrastructure, including network connectivity, Internet access, email, etc. Excellent understanding of the issues involved in administering and maintaining corporate LAN",
        "Installation & Configuration of ACTIVE DIRECTORY SERVICES. Configuration & Maintaining Microsoft windows server 2003, server 2008 and server 2012 network Infrastructure",
        "Installation and configuration of VMWARE, Citrix Xen and Oracle VM servers and to yield the various Operating Systems instances on them. Managing ESXi, and vSphere environments with VCenter Management. Creation of Templates from VMs and Creation of VMs from templates",
        "Install & Configure Google Apps, Microsoft Outlook, OWA & Server monitoring",
        "Manage Windows Server DC, DNS, DHCP, IIS, FTP Server",
        "Installation and configuration of Wi-Fi on Linksys Cisco Access Point. Installation and Configuration on VOIP VONAGE phones",
        "Managed IPPBX server (PRI and MVOIP) with end devices Cisco 7940 and 7960 G series IP phones",
        "Monitor and manage all aspects of server performance and availability through Nagios, MRTG and Network View"
      ]
    },
    {
      "role": "IT Executive",
      "company": "Competent Synergies Private Limited",
      "url": "https://www.competent.biz/",
      "logo": "Competent-Group-Logo.png",
      "duration": "Dec 2008 – Oct 2011",
      "location": "Mohali, India",
      "points": [
        "Managed Active directory, DNS and DHCP Servers",
        "Managed server 2003, 2008 & client OS Win XP, Win 7",
        "Worked with AD for managing the authentication between different organizations",
        "Managed user accounts, groups and controlling access rights using Active Directory",
        "Installing & configuring WSUS server for Patching",
        "Well known to draw the Diagram about the Network Environment in MS Visio Professional",
        "Weekly, monthly reporting relating to network performance"
      ]
    }
  ],
  learning: [
    {
      "role": "Microsoft Learning",
      "company": "Microsoft Corporation",
      "url": "https://learn.microsoft.com/en-us/users/ranasanjeev/",
      "logo": "microsoft_logo.png",
      "duration": "Jan 2021 – Present",
      "location": "Online",
      "points": [
        "I'm excited to embark on a journey of continuous learning with Microsoft, exploring their comprehensive resources to deepen my understanding of both Microsoft technologies and DevOps practices. Engaging with Microsoft Learning is key to my goal of mastering not only Microsoft technologies but also adopting DevOps principles to streamline development processes. As I dive into Microsoft Learning, I'm eager to integrate DevOps methodologies into my skill set, ensuring seamless collaboration between development and operations teams while leveraging Microsoft's tools and best practices"
      ]
    },
    {
      "role": "Lifelong Learning",
      "company": "CertiProf",
      "url": "https://www.credly.com/badges/22569211-8861-40a6-b249-101406d13fdd",
      "logo": "CertiProf-Badge-LLL.png",
      "duration": "April 2026 – Present",
      "location": "Online",
      "points": [
        "I am honored to receive this badge, which acknowledges my steadfast commitment to lifelong learning. In our ever-changing digital world, this recognition highlights my qualities of an open, disciplined mind, constantly evolving to navigate and contribute to the expanding landscape of knowledge. I am dedicated to using and sharing my expertise to contribute to a more equal and better world. Thank you for this meaningful recognition"
      ]
    },
    {
      "role": "ISC2 Candidate",
      "company": "ISC",
      "url": "https://www.credly.com/badges/bcd45586-1224-4bf4-9a1b-5881b7554921",
      "logo": "isc.png",
      "duration": "Dec 2023 – Dec 2024",
      "location": "Online",
      "points": [
        "I've just been awarded the Cybersecurity Certification badge! 🎉 This recognition marks a significant milestone in my journey towards mastering cybersecurity practices"
      ]
    }
  ],
  honors: [
    {
      "role": "Employee of the Month",
      "company": "Farenexus",
      "url": "https://drive.google.com/file/d/1pZxT13lhmALN8MczvZmn1RxJVklnRspb/view?usp=sharing",
      "logo": "logo-farenexus.png",
      "duration": "October 2022",
      "location": "Mohali",
      "points": [
        "Excellent team player and always enthusiastic with a solution oriented approach"
      ]
    },
    {
      "role": "Supporting Role",
      "company": "Tmotions",
      "url": "https://drive.google.com/file/d/1XxkpV5DygIHYb_DJ0tVbGO9ZktH9dPKd/view?usp=sharing",
      "logo": "tmotions.png",
      "duration": "March 2020 – April 2021",
      "location": "Bestech Business Tower- Mohali",
      "points": [
        "Best Supporting Role Awardee Amidst Covid-19 Challenges for DevOps Excellence and Team Leadership"
      ]
    },
    {
      "role": "Employee of the Month",
      "company": "NVISH",
      "url": "https://www.nvish.com/",
      "logo": "nvish-logo-1.svg",
      "duration": "Oct 2011 – June 2016",
      "location": "Quark City Mohali",
      "points": [
        "I'm pleased to share that throughout my career, I've had the privilege of receiving numerous cash prizes rupees 5000 on multiple occasions. These prizes have been a testament to my dedication and hard work."
      ]
    },
    {
      "role": "Excellence",
      "company": "Competent",
      "url": "https://drive.google.com/file/d/1acQQuUq3Ww5rCS7OO5DVJ41cxTzumh9d/view?usp=sharing",
      "logo": "Competent-Group-Logo.png",
      "duration": "Dec 2008 – Dec 2009",
      "location": "Mohali",
      "points": [
        "Honored as the recipient of the Best Exemplary Performance award for my outstanding contributions among our team of 50 members"
      ]
    }
  ],
};

// group: "microsoft" | "ninja" | "security" | "other" — drives the filter tabs.
export const certifications = [
  {
    "title": "AZ-900: Azure Fundamentals",
    "issuer": "Microsoft",
    "logo": "Az900.png",
    "link": "https://www.credly.com/badges/ccc04a53-f2e8-4598-8a2e-5b67b6e014a5",
    "group": "microsoft"
  },
  {
    "title": "AZ-104: Azure Administrator",
    "issuer": "Microsoft",
    "logo": "az.png",
    "link": "https://learn.microsoft.com/api/credentials/share/en-us/RanaSanjeev/E87EF8A959ABDE48?sharingId=21537036736891C7",
    "group": "microsoft"
  },
  {
    "title": "AZ-500: Azure Security Engineer Associate",
    "issuer": "Microsoft",
    "logo": "azsec.png",
    "link": "https://learn.microsoft.com/api/credentials/share/en-us/RanaSanjeev/31DC2A83C59FFA43?sharingId=21537036736891C7",
    "group": "microsoft"
  },
  {
    "title": "SC-300: Identity and Access Administrator Associate",
    "issuer": "Microsoft",
    "logo": "iai.png",
    "link": "https://learn.microsoft.com/api/credentials/share/en-us/RanaSanjeev/2605A900671AE884?sharingId=21537036736891C7",
    "group": "microsoft"
  },
  {
    "title": "SC-200: Security Operations Analyst Associate",
    "issuer": "Microsoft",
    "logo": "azso.jpg",
    "link": "https://learn.microsoft.com/api/credentials/share/en-us/RanaSanjeev/9F9CA9435ADAEC71?sharingId=21537036736891C7",
    "group": "microsoft"
  },
  {
    "title": "SC-400: Information Protection and Compliance Administrator Associate",
    "issuer": "Microsoft",
    "logo": "azipa.jpg",
    "link": "https://learn.microsoft.com/api/credentials/share/en-us/RanaSanjeev/8B3B8CAAA228B2C1?sharingId=21537036736891C7",
    "group": "microsoft"
  },
  {
    "title": "AZ-400: Microsoft Certified: DevOps Engineer Expert",
    "issuer": "Microsoft",
    "logo": "devops.png",
    "link": "https://learn.microsoft.com/api/credentials/share/en-us/RanaSanjeev/814DEF357ADDF4C2?sharingId=21537036736891C7",
    "group": "microsoft"
  },
  {
    "title": "DP-700: Microsoft Certified Fabric Data Engineer Associate",
    "issuer": "Microsoft",
    "logo": "fde.png",
    "link": "https://learn.microsoft.com/api/credentials/share/en-us/RanaSanjeev/29ECC49E65EEAC16?sharingId=21537036736891C7",
    "group": "microsoft"
  },
  {
    "title": "Cloud Ninja",
    "issuer": "Microsoft Defender For Cloud",
    "logo": "Ninja.png",
    "link": "https://drive.google.com/file/d/1dnXzW-IAMcoqTWSoTbNiI9_13cKiDnZQ/view?usp=share_link",
    "group": "ninja"
  },
  {
    "title": "Azure Network Security Ninja",
    "issuer": "Azure Network Security Ninja",
    "logo": "ninjana.png",
    "link": "https://drive.google.com/file/d/1EUABjVu-rFPP7LI1QfFbPuJGuxik2PTm/view?usp=sharing",
    "group": "ninja"
  },
  {
    "title": "Sentinel Ninja",
    "issuer": "Microsoft Sentinel Ninja",
    "logo": "sentinal.png",
    "link": "https://drive.google.com/file/d/1uL68KWR4d9reTxXZIqIaERYElal8e8FJ/view?usp=sharing",
    "group": "ninja"
  },
  {
    "title": "Microsoft Defender for Identity Ninja",
    "issuer": "Microsoft Defender for Identity Ninja",
    "logo": "IDEN.png",
    "link": "https://drive.google.com/file/d/1QSlVAH0sMTtKDqU40YwfGQ6dNaVKJyYr/view?usp=sharing",
    "group": "ninja"
  },
  {
    "title": "Microsoft Security: Who Hacked? Challenge",
    "issuer": "Microsoft Cloud Skills Challenge",
    "logo": "sec.png",
    "link": "https://learn.microsoft.com/en-us/training/challenges?id=1e3f64af-3cc8-4b5c-9b9a-78c998c1a45f",
    "group": "security"
  },
  {
    "title": "Cisco Certified Network Associate Routing and Switching (CCNA Routing and Switching)",
    "issuer": "Cisco",
    "logo": "cisco_ccna_R_26S.png",
    "link": "https://www.credly.com/badges/18256d7d-a2d9-4a28-b15a-d169f4a0bdee",
    "group": "security"
  },
  {
    "title": "Getting Started in Cybersecurity 2.0",
    "issuer": "Fortinet NSE",
    "logo": "forti.png",
    "link": "https://www.credly.com/badges/199f04b8-7aec-47b5-ba75-066cb87eee3e",
    "group": "security"
  },
  {
    "title": "Fortinet Certified Fundamentals Cybersecurity",
    "issuer": "Fortinet Cybersecurity",
    "logo": "fortinet-certified-fundamentals-cybersecurity.png",
    "link": "https://www.credly.com/badges/8a11f74c-85f4-451c-a2eb-c73e9d429999",
    "group": "security"
  },
  {
    "title": "Oracle Cloud Infrastructure Foundations 2021 Certified Associate",
    "issuer": "Oracle Cloud",
    "logo": "ora.png",
    "link": "https://catalog-education.oracle.com/pls/certview/sharebadge?id=288E4D6C7BBE29B23E370D729DA865858EDFF7542AF5B2D8F8411F00070C0E8B",
    "group": "other"
  },
  {
    "title": "CISSP® - Certified Information Systems Security Professional",
    "issuer": "SkillUp",
    "logo": "skillup-logo_v1.png",
    "link": "https://simpli-web.app.link/e/Y5jto9pCpxb",
    "group": "security"
  },
  {
    "title": "Introduction to Cybercrime",
    "issuer": "SkillUp",
    "logo": "skillup-logo_v1.png",
    "link": "https://simpli-web.app.link/e/zGFasuzCpxb",
    "group": "security"
  },
  {
    "title": "Getting Started with DevOps",
    "issuer": "SkillUp",
    "logo": "skillup-logo_v1.png",
    "link": "https://simpli-web.app.link/e/SetnjbZCpxb",
    "group": "other"
  },
  {
    "title": "Introduction to Kubernetes",
    "issuer": "SkillUp",
    "logo": "skillup-logo_v1.png",
    "link": "https://simpli-web.app.link/e/D7kaW85Cpxb",
    "group": "other"
  },
  {
    "title": "Scrum Foundation Professional Certificate SFPC (v2020)",
    "issuer": "Scrum",
    "logo": "scrum.png",
    "link": "https://drive.google.com/file/d/19zqyJ_dKhpy5L3t_oHSiQjTgfpR7kaRw/view?usp=share_link",
    "group": "other"
  },
  {
    "title": "Cyber Offence",
    "issuer": "ISEA",
    "logo": "isea.png",
    "link": "https://drive.google.com/file/d/1IGGw6ksCvjNE9lr1fVDRoJgFB4FWQ7HE/view?usp=sharing",
    "group": "security"
  },
  {
    "title": "Cyber Hygiene Practitioner Certification",
    "issuer": "ISEA",
    "logo": "isea.png",
    "link": "https://drive.google.com/file/d/17cjm7HXIYw0tYpvXMM0yh8rDDyLgl5du/view?usp=sharing",
    "group": "security"
  }
];

export const degrees = [
  {
    "title": "Himachal Pradesh University Shimla",
    "subtitle": "Bachelor of Commerce",
    "logo": "HPU.svg",
    "duration": "2001-2005",
    "points": [
      "Graduates with a BCOM degree"
    ],
    "link": "https://hpuniv.ac.in//"
  },
  {
    "title": "Jetking",
    "subtitle": "JCHNP",
    "logo": "Jetking.png",
    "duration": "2001-2005",
    "points": [
      "Installation and Configuration of Windows and Linux Operating system. System Drivers. Device Management",
      "Building and Configuring Computer Systems. Setting up Local Area Networks. Network Configuration and Troubleshooting Exercises. Diagnosing Hardware and Network Issues",
      "System Optimization and Performance Tuning. Backup and Recovery Procedures",
      "Wi-Fi Standards. Wireless Security (WPA, WPA2). Wireless Access Points (APs) and Routers",
      "Virtual Private Networks (VPNs). Secure Socket Layer (SSL) and Transport Layer Security (TLS)",
      "Introduction to Networking. Types of Networks (LAN, WAN, MAN). Networking Protocols (TCP/IP). Network Devices (Routers, Switches, Hubs). Subnetting and IP Addressing",
      "MCSE in 2003",
      "CCNA coaching and practical work"
    ],
    "link": "https://jetking.com///"
  }
];

export const contact = {
  photo: "creator-face.webp",
  intro:
    "Need a landing zone built, a SOC tuned, or an estate moved to Azure without downtime? I lead a team that does this every day for managed-service clients. Send a message and I'll get back to you.",
  email: "sanjeev.kmr2@gmail.com",
  phone: "+91 9779547807",
  address: "Jee Aayaan Nu, India - 174305",
  mapLink: "https://goo.gl/maps/bp64rCM8eYE6oWzJ8",
};
