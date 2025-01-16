import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    python,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    smokingbullwindowpage,
    smokinglogo,
    carrent,
    buckwindow,
    UnqlLogo,
    jobit,
    tripguide,
    threejs,
    linux,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Site Reliabilty Engineer for HPS IaaS",
      company_name: "IBM",
      icon: "https://www.ibm.com/design/language/fd83a72512411fed1b18e363306cb7ef/rebus-dark.svg",
      iconBg: "#383E56",
      date: "January 2022 - March 2024",
      points: [
        "Utilized advanced monitoring tools to diagnose and resolve complex infrastructure issues, improving system reliability and performance, while deploying and managing infrastructure and services in IBM’s Cloud ecosystem.", 
        "Authored comprehensive runbooks detailing operational procedures and resolutions for common issues Engaged in Pagerduty/on-call rotation, promptly addressing real-time alerts and internally reported issues.", 
        "Partnered with development teams to collect logs and metrics using tools such as Mezmo and Sysdig to identify bugs and defects in infrastructure and generated tickets for their fixes in their next release.",
        "Ensured robust incident management by allying with extended IBM teams and using monitoring tools to drive prompt resolution, boosting overall service reliability; contributed to scrums, sprint planning, and retrospectives.",
        "Led successful team to develop, test, and monitor new Linux Baremetal VSI for new product, demonstrating exceptional dedication and servicing as mentor to other engineers, resulting in strong team building and effective implementation.",
        "Took part in data center monthly health checks and remediations to remain SOC2 Type 2 compliant Maintained, configured, upgraded, and organized remote hardware device replacements",
      ],
    },
    {
      title: "Site Reliabilty Engineer for WatsonX Code Assistant",
      company_name: "IBM",
      icon: "https://www.ibm.com/design/language/fd83a72512411fed1b18e363306cb7ef/rebus-dark.svg",
      iconBg: "#E6DEDD",
      date: "March 2024 - July 2024",
      points: [
        "Served as SRE for IBM watsonx Code Assistant for Z, a generative AI based Cloud service, to improve developer productivity in application modernization while resolving driving incidents.",
"Ensured the service’s resiliency and reliability by implementing monitoring and synthetics for observability, ensuring robust incident management, driving prompt resolution, and boosting overall service reliability.",
"Engaged in PagerDuty/on-call rotation",
"Wrote Java tests and utilizing TypeScript scripts to implement multiple tools for new AI features.",
"Supplied logs and metrics to assist the development team in diagnosing and resolving reported issues"

      ],
    },
    {
      title: "Site Reliabilty Engineer for OpenPages",
      company_name: "IBM",
      icon: "https://www.ibm.com/design/language/fd83a72512411fed1b18e363306cb7ef/rebus-dark.svg",
      iconBg: "#383E56",
      date: "July 2024 - October 2024",
      points: [
        "Ensured resiliency and reliability of Cloud application IBM OpenPages by optimizing its infrastructure and enhancing system performance and uptime through proactive monitoring and problem resolution.",
"Managed upgrades, backups, and certificate renewals for customer OpenPages SaaS instances, documenting errors and their resolutions for future fixes.", 
"Conducted troubleshooting sessions with customers to resolve issues with their instances.",
"Used monitoring tools to resolve infrastructure issues; enabled cross-functional team collaboration to ensure seamless integration and functionality of IBM OpenPages while fostering cohesive workplace environments.",
"Completed system upgrades and renewed SSL certificates for numerous customers on schedule by automating and streamlining numerous processes, freeing up time for team members to accomplish additional tasks.",
"Participated in PagerDuty on-call rotation, promptly notifying customers through Salesforce tickets to get their approval for changes to prevent outages."

      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I was a technical lead and later on a teamlead/technical lead for hashtag #SiteReliabilityEngineering teams that Dwayne was part of. He is a great hashtag#sre and gets stuff done. His growth mindset helps him to learn quickly and perform really well. ",
      name: "Ephraim Petry",
      designation: "Technical Lead",
      company: "IBM",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHkUWS19zEDkw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721162277196?e=1738800000&v=beta&t=pnFtdfkARanDVi5jmtetdD26MR057vlwraLT4jPPYrA",
    },
    {
      testimonial:
        "I hired Dwayne and was his manager at IBM for over two years. I have nothing but good things to say about him. He's got excellent SRE skills and he's a quick learner who doesn't mind going the extra mile to get things done. His attitude is always positive and his growth mindset enabled him to perform exceptionally well in my SRE team",
      name: "Thomas Fiege",
      designation: "Development and Engineering Manager",
      company: "IBM",
      image: "https://media.licdn.com/dms/image/v2/C5603AQGiB98_ytKzBg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1604445835677?e=1738800000&v=beta&t=prq394tvZh8z5ymWW59PcnONVYT2XITzJyFyz-1KjlY",
    },
    {
      testimonial:
        "I am pleased to recommend Dwayne Hovington for a Site Reliability Engineer (SRE) role. Dwayne is a highly skilled and dedicated professional who consistently demonstrates exceptional technical expertise and a commitment to work. Dwayne's proficiency in Cloud Operations, Automation, DevOps, Shell Scripting and containerization technologies, along with his knowledge of monitoring and logging tools, makes him an ideal candidate for SRE work. His proactive approach to identifying issues has been invaluable to our team. Moreover, Dwayne brings a collaborative spirit, actively contributing to brainstorming and problem-solving sessions.",
      name: "Balakrishna Vishnumalakala",
      designation: "Senior Manager",
      company: "IBM",
      image: "https://www.ibm.com/design/language/fd83a72512411fed1b18e363306cb7ef/rebus-dark.svg",
    },
  ];
  
  const projects = [
    {
      name: "Smoking Bull Lounge",
      description:
        "Ecomerce website for a local cigar lounge",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "WooCommerce",
          color: "green-text-gradient",
        },
        {
          name: "Booking",
          color: "pink-text-gradient",
        },
      ],
      image: smokingbullwindowpage,
      source_code_link: "https://smokingbullcigar.com/",
      logo: smokinglogo
    },
    {
      name: "Unql Buck",
      description:
        "Online Ecommerce outlet store where can users can sell everything to everyone.",
      tags: [
        {
          name: "Bluehost",
          color: "blue-text-gradient",
        },
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
        {
          name: "WooCommerce",
          color: "pink-text-gradient",
        },
      ],
      image: buckwindow,
      source_code_link: "https://unqlbuck.com/",
      logo: UnqlLogo
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      logo: UnqlLogo
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };