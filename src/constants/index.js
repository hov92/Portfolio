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
    newbucklogo,
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
    logo,
    LogoLawn, 
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
        {
          name: "Elementor",
          color: "red-text-gradient",
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
        {
          name: "Elementor",
          color: "red-text-gradient",
        },
      ],
      image: newbucklogo,
      source_code_link: "https://unqlbuck.com/",
      logo: UnqlLogo
    },
    {
      name: "Legacy Lawn Cares",
      description:
        "Providing reliable, high-quality lawn care services with a focus on curb appeal, consistency, and customer satisfaction. From mowing and edging to seasonal cleanups and sodding, we help homeowners maintain beautiful, healthy outdoor spaces year-round.",
      tags: [
        {
          name: "Amelia",
          color: "blue-text-gradient",
        },
        {
          name: "JetEngine",
          color: "green-text-gradient",
        },
        {
          name: "Quickbooks",
          color: "pink-text-gradient",
        },
        {
          name: "Elementor",
          color: "red-text-gradient",
        },
      ],
      image: LogoLawn,
      source_code_link: "https://legacylawncares.com",
      logo: LogoLawn },
  ];
  
  export { services, technologies, projects };