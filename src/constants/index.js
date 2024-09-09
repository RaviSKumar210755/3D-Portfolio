export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Infotrixs',
    pos: 'Front End Web Developer',
    duration: 'Jan 2023 - Feb 2023',
    title:
      'Worked on Internship Portal With Senior Developers fixing bugs and added extra functionality. Optimized user experiences through responsive design, resulting in a 15% boost in mobile satisfaction. Collaborated with the QA team to achieve a 95% bug-free release and led to 10% retention boost.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5UGylG7_C4H321TLBJmqX8y2WPIbICoHtFEzdnYQ4g&s',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'NVCTI IIT Dhanbad',
    pos: 'Web Developer',
    duration: 'Aug 2022 - Jan 2023',
    title:
      'Worked on Home page and Event page for IIT Dhanbad cultural fest Srijan 23 drawing 2000+ users. Created Admin dashboard for Managing Organization’s various events seamless. Handled backend part of the event page for IIT Dhanbad TechFest Concetto 23.',
    icon: 'https://i.ibb.co/0BfGDGC/images-1-nvcti.jpg',
    animation: 'clapping',
  },
];
