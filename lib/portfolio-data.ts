export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
  note: string;
};

export type FocusArea = {
  title: string;
  description: string;
};

export type ServiceTrack = {
  title: string;
  description: string;
  idealFor: string;
  deliverables: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  summary: string;
  tools: string[];
};

export type TimelineEntry = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
};

export type CompetitionEntry = {
  year: string;
  title: string;
  place: string;
  location: string;
  description: string;
};

export type AchievementRecord = {
  date: string;
  title: string;
  result: string;
  details: string;
};

export type ContactOption = {
  label: string;
  description: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectSection = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  strapline: string;
  summary: string;
  role: string;
  timeline: string;
  status: string;
  liveUrl?: string;
  liveLabel?: string;
  featured: boolean;
  stack: string[];
  outcomes: string[];
  detailSections: ProjectSection[];
};

export const siteConfig = {
  shortName: 'Loay Eldin',
  fullName: 'Loay Eldin Mohamed Mahmoud',
  title: 'Full-Stack Developer, Robotics Engineer, Tech Educator, and Founder of FRع',
  age: '19',
  location: 'Cairo, Egypt',
  email: 'loayeldin77@gmail.com',
  phone: '+20 114 499 922',
  description:
    'Premium portfolio of Loay Eldin, a Cairo-based full-stack developer, robotics engineer, and technical educator building polished digital products and intelligent systems.',
  whatsappHref: 'https://wa.me/20114499922',
  githubHref: 'https://github.com/loayden',
  instagramHref: 'https://www.instagram.com/fr3_fdn/?__pwa=1',
  linkedinHref: 'https://linkedin.com/in/loayeldin77',
  twitterHref: 'https://twitter.com/loay_eldin',
  founderBrand: 'FRع',
};

export const navigation: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Recognition', href: '/competitions' },
  { label: 'Experience', href: '/experience' },
  { label: 'CV', href: '/cv' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  ...navigation,
  { label: 'Skills', href: '/skills' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: siteConfig.githubHref },
  { label: 'Instagram', href: siteConfig.instagramHref },
  { label: 'LinkedIn', href: siteConfig.linkedinHref },
  { label: 'X', href: siteConfig.twitterHref },
  { label: 'WhatsApp', href: siteConfig.whatsappHref },
];

export const stats: Stat[] = [
  {
    value: '25+',
    label: 'Awards and podium finishes',
    note: 'Built through robotics, innovation, and technical competitions.',
  },
  {
    value: '6+',
    label: 'Countries represented',
    note: 'Global competition exposure across the USA, Europe, Africa, and Asia.',
  },
  {
    value: '100+',
    label: 'Students mentored',
    note: 'Hands-on coaching, workshops, and curriculum-led teaching.',
  },
  {
    value: '3',
    label: 'Core strengths',
    note: 'Product engineering, robotics systems, and technical education.',
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: 'Product-ready frontend execution',
    description:
      'Interfaces that feel premium, convert clearly, and are structured for fast iteration in Next.js and React.',
  },
  {
    title: 'Systems thinking under pressure',
    description:
      'Competition robotics and engineering challenges sharpened speed, precision, and decision making.',
  },
  {
    title: 'Teaching-led communication',
    description:
      'Strong explaining, mentoring, and stakeholder communication for teams that need both technical depth and clarity.',
  },
];

export const professionalProfile = {
  age: '19',
  summary:
    'Full-stack developer, robotics engineer, and technical educator focused on turning ambitious ideas into clear, polished, and useful products. Combines strong frontend execution in Next.js, React, and TypeScript with hands-on robotics experience across Raspberry Pi, Arduino, Python, sensors, and computer vision. Alongside building live public websites, he has represented Egypt in international competitions, earned multiple first-place and worldwide placements, and mentored more than 100 students through workshops and project-based learning.',
};

export const principles: FocusArea[] = [
  {
    title: 'Build with signal',
    description:
      'Every section, screen, and interaction should prove capability, not just decorate it.',
  },
  {
    title: 'Make complexity feel simple',
    description:
      'Strong architecture matters, but the user should experience confidence and clarity, not technical noise.',
  },
  {
    title: 'Ship with taste and discipline',
    description:
      'Visual quality, performance, responsive behavior, and content hierarchy all matter together.',
  },
  {
    title: 'Teach while building',
    description:
      'Documentation, mentoring, and knowledge transfer are part of the product, not extra work.',
  },
];

export const serviceTracks: ServiceTrack[] = [
  {
    title: 'Full-time product engineering',
    description:
      'For companies hiring a developer who can own frontend quality, collaborate across product and engineering, and bring a sharper presentation layer to the team.',
    idealFor: 'Startups, product teams, and remote-first companies hiring a frontend or full-stack engineer.',
    deliverables: [
      'High-end React and Next.js execution',
      'Interface architecture and design system refinement',
      'Performance-aware implementation and clean code handoff',
    ],
  },
  {
    title: 'Premium portfolio and website builds',
    description:
      'For founders, executives, and creators who need a site that feels custom, credible, and hireable.',
    idealFor: 'Personal brands, consultants, speakers, and product launches.',
    deliverables: [
      'Editorial design direction and page strategy',
      'Responsive build with polished motion',
      'Clear conversion paths for leads, applications, or bookings',
    ],
  },
  {
    title: 'AI, robotics, and technical prototypes',
    description:
      'For teams exploring intelligent systems, control interfaces, automation layers, or sensor-driven workflows.',
    idealFor: 'Innovation labs, education programs, robotics teams, and experimental products.',
    deliverables: [
      'Prototype planning and interface concepts',
      'Control dashboards and workflow surfaces',
      'Integration-ready frontend and presentation layers',
    ],
  },
  {
    title: 'Mentoring, workshops, and technical education',
    description:
      'For schools, programs, and communities that need practical instruction in robotics, programming, and product thinking.',
    idealFor: 'Bootcamps, schools, youth programs, and technical communities.',
    deliverables: [
      'Workshop structure and session design',
      'Student-friendly explanations and hands-on activities',
      'Competition preparation and project-based learning support',
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Position',
    description:
      'Clarify the audience, the hiring or business goal, and the signal the work must send in the first few seconds.',
  },
  {
    title: 'Structure',
    description:
      'Turn that goal into a page system, content hierarchy, and technical approach that can scale beyond one screen.',
  },
  {
    title: 'Build',
    description:
      'Ship the frontend with strong responsiveness, tight spacing, restrained motion, and maintainable code.',
  },
  {
    title: 'Refine',
    description:
      'Polish clarity, remove weak copy, tighten the CTA path, and make the final experience feel confident.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend and product engineering',
    summary:
      'I focus on premium UI execution, page systems, and shipping interfaces that help teams look and operate at a higher level.',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend and application flow',
    summary:
      'I build the logic behind forms, data flow, APIs, and production-ready web experiences without overcomplicating the stack.',
    tools: ['Node.js', 'REST APIs', 'App Router', 'Server Components', 'Form workflows'],
  },
  {
    title: 'Robotics and intelligent systems',
    summary:
      'My robotics background brings hardware awareness, control thinking, and comfort with technical problem solving under pressure.',
    tools: ['Arduino', 'Raspberry Pi', 'C++', 'Python', 'Computer Vision'],
  },
  {
    title: 'Leadership and education',
    summary:
      'I mentor, explain, and document clearly, which makes collaboration smoother and technical work easier to trust.',
    tools: ['Workshops', 'Mentorship', 'Curriculum Design', 'Technical Communication', 'Team Guidance'],
  },
];

export const experienceTimeline: TimelineEntry[] = [
  {
    year: '2024',
    title: 'MRC Greece Champion',
    subtitle: 'Mediterranean Robotics Championship',
    description:
      'Won first place while competing against international teams in a high-pressure engineering environment.',
    outcome: 'Proved strong systems thinking, execution speed, and technical resilience.',
  },
  {
    year: '2024',
    title: 'Robo Tourney USA Finalist',
    subtitle: 'International Robotics Competition',
    description:
      'Represented Egypt in California and secured multiple placements including worldwide recognition.',
    outcome: 'Demonstrated technical range and high-stakes presentation ability on a global stage.',
  },
  {
    year: '2024',
    title: 'Mentor and technical educator',
    subtitle: 'Workshops, coaching, and youth programs',
    description:
      'Led robotics and programming guidance for students through project-based teaching and practical demonstrations.',
    outcome: 'Turned technical knowledge into repeatable learning experiences for over 100 students.',
  },
  {
    year: '2023',
    title: 'SeaPerch international competitor',
    subtitle: 'Underwater robotics competition',
    description:
      'Competed in underwater robotics and earned recognition for execution, maneuvering, and teamwork.',
    outcome: 'Strengthened multidisciplinary problem solving and systems integration skills.',
  },
  {
    year: '2023',
    title: 'Full-stack product builder',
    subtitle: 'Freelance and self-directed product work',
    description:
      'Designed and built modern web experiences with a focus on clean UI, responsive delivery, and stronger positioning.',
    outcome: 'Built a portfolio of product and interface work aligned with premium web standards.',
  },
];

export const competitionHighlights: CompetitionEntry[] = [
  {
    year: '2024',
    title: 'MRC Greece',
    place: '1st Place',
    location: 'Greece',
    description: 'Mediterranean robotics championship win with strong technical and competitive execution.',
  },
  {
    year: '2024',
    title: 'Robo Tourney USA',
    place: '2nd Place Worldwide',
    location: 'California, USA',
    description: 'International finals placement with additional award recognition in multiple categories.',
  },
  {
    year: '2023',
    title: 'SeaPerch International',
    place: '4th Place Worldwide',
    location: 'United States',
    description: 'High global placement in underwater robotics with team and maneuver recognition.',
  },
  {
    year: '2023',
    title: 'Young Innovators Africa',
    place: '1st Place Africa',
    location: 'South Africa',
    description: 'Continental innovation recognition for building practical technical solutions.',
  },
  {
    year: '2022',
    title: 'Egypt Open Robotics',
    place: 'National Champion',
    location: 'Cairo, Egypt',
    description: 'Top national performance that opened the path to wider international competition.',
  },
  {
    year: '2022',
    title: 'RoboRave Egypt',
    place: '2nd Place',
    location: 'Alexandria, Egypt',
    description: 'Strong national showing with qualification into international pathways.',
  },
];

export const achievementRecords: AchievementRecord[] = [
  {
    date: 'October 14, 2018',
    title: 'Arab Robotics Championship',
    result: 'Best Teamwork and Overcoming Challenges Award',
    details: 'Won with the Future Genius team.',
  },
  {
    date: 'March 3, 2019',
    title: 'Robot Challenge',
    result: 'Represented Egypt at the world championship in Beijing',
    details: 'Qualified to compete internationally.',
  },
  {
    date: 'June 25, 2019',
    title: 'African Innovation and Technology Championship',
    result: '2nd Place',
    details: 'The Genius Kids team qualified for the African championship.',
  },
  {
    date: 'September 10, 2019',
    title: 'Egypt Open Robotics Championship',
    result: 'Multiple awards',
    details: 'Won several awards with Genius 2 in Sumo and Genius 1 in Line Follower.',
  },
  {
    date: 'January 18, 2020',
    title: 'Technology Solution for Helping Refugees Competition',
    result: 'Best Presentation Award',
    details: 'Won for presenting a technology-based support solution.',
  },
  {
    date: 'February 5, 2020',
    title: 'Science and Robotic Carnival Senior',
    result: '1st Place',
    details: 'Won first place and received academic scholarships.',
  },
  {
    date: 'February 12, 2021',
    title: 'World Championship for Protection from Coronavirus',
    result: 'Qualified for the Istanbul camp',
    details: 'The Super Genius team advanced to the next international stage.',
  },
  {
    date: 'March 28, 2021',
    title: 'Egypt Open Robotics Championship',
    result: 'Winning results across multiple teams',
    details: 'Genius A, Genius C, and Genius B all achieved winning placements.',
  },
  {
    date: 'October 16, 2021',
    title: 'Robot Challenge',
    result: 'Represented Egypt at the world championship in Beijing',
    details: 'Qualified again for international representation.',
  },
  {
    date: 'November 13, 2021',
    title: 'African Innovation and Technology Forum',
    result: 'Advanced placements',
    details: 'Inventor Industry International and Super Genius achieved high rankings.',
  },
  {
    date: 'March 6, 2022',
    title: 'SeaPerch World Championship',
    result: '4th Place Worldwide',
    details: 'Also won Best Maneuver and Best Team Spirit awards.',
  },
  {
    date: 'August 6, 2022',
    title: 'African Innovation and Technology Forum',
    result: '1st Place in Africa',
    details: 'The Young Innovators team won first place at the continental level.',
  },
  {
    date: 'October 17, 2022',
    title: 'Robot Challenge',
    result: 'Qualified to represent Egypt in Beijing',
    details: 'The Genius team advanced to international competition.',
  },
  {
    date: 'November 16, 2022',
    title: 'Young Innovators Competition',
    result: '1st Place',
    details: 'The Genius Academy team won first place and received scholarships in the UAE.',
  },
  {
    date: 'February 9, 2023',
    title: 'RoboRave Egypt',
    result: 'Multiple winning positions',
    details: 'Qualified to represent Egypt in Canada, Australia, and Mexico.',
  },
  {
    date: 'March 12, 2023',
    title: 'African Innovation and Technology Forum',
    result: '1st and 3rd Place results',
    details: 'Super Genius, Genius Heroes, and Genius achieved top placements.',
  },
  {
    date: 'July 9, 2023',
    title: 'Robo Tourney Egypt',
    result: '2nd Place Nationwide',
    details: 'Qualified to represent Egypt in California.',
  },
  {
    date: 'July 30, 2023',
    title: 'Autonomous Rescue Submarine Competition',
    result: '1st Place',
    details: 'Qualified to represent Egypt in Morocco.',
  },
  {
    date: 'August 21, 2023',
    title: 'Robo Tourney United States Tournament',
    result: '2nd Place Worldwide',
    details: 'Also won the Creative Award and Think Award.',
  },
  {
    date: 'September 26, 2023',
    title: 'Prepare for the Future Conference',
    result: 'Top placements and cash awards',
    details: 'Won first places and multiple financial prizes.',
  },
  {
    date: 'October 17, 2023',
    title: 'SeaPerch North Africa',
    result: '3rd Place',
    details: 'The Inventor Industry team achieved third place.',
  },
  {
    date: 'November 5, 2023',
    title: 'Robot Challenge Egypt',
    result: '2nd Place Nationwide',
    details: 'Placed second in the Free Style Research category.',
  },
  {
    date: 'February 4, 2024',
    title: 'Robo Tourney United States Tournament',
    result: '2nd and 3rd Place Worldwide',
    details: 'Achieved multiple global placements.',
  },
  {
    date: 'February 24, 2024',
    title: 'African-Asian Innovation and Technology Forum',
    result: '1st Place results',
    details: 'Won top positions and advanced to a Ministry of Defense competition.',
  },
  {
    date: 'March 4, 2024',
    title: 'African-Asian Innovation and Technology Forum in Jordan',
    result: 'Top placements in scientific research and innovation',
    details: 'Achieved leading results in both research and innovation categories.',
  },
  {
    date: 'April 27, 2024',
    title: 'MRC Greece',
    result: '1st Place',
    details: 'Won first place in Wrestling Lego and Wrestling Alliances.',
  },
];

export const contactOptions: ContactOption[] = [
  {
    label: 'Hire me full-time',
    description: 'For product teams looking for a frontend or full-stack engineer with stronger taste and sharper execution.',
    href: '/contact?topic=Full-time%20role',
  },
  {
    label: 'Start a build',
    description: 'For premium websites, portfolio redesigns, landing pages, or product marketing surfaces.',
    href: '/contact?topic=Website%20or%20product%20build',
  },
  {
    label: 'Request a workshop',
    description: 'For schools, communities, and teams looking for mentoring or technical teaching sessions.',
    href: '/contact?topic=Workshop%20or%20mentorship',
  },
  {
    label: 'Ask for a private walkthrough',
    description: 'For hiring managers who want context on projects, decisions, and how I approach execution.',
    href: '/contact?topic=Project%20walkthrough',
  },
];

export const projects: Project[] = [
  {
    slug: 'ai-teacher-robot',
    title: 'AI Teacher Robot',
    category: 'AI Robotics and Education',
    strapline: 'An interactive teaching robot designed for classrooms and home learning',
    summary:
      'An AI-powered teaching robot concept built to listen to students, answer questions, explain lessons step by step, and support more interactive learning in schools and at home.',
    role: 'Robotics concept, education system design, AI interaction planning',
    timeline: 'EdTech and robotics innovation project',
    status: 'Designed as part of a wider vision for smarter and more accessible education',
    featured: true,
    stack: [
      'Raspberry Pi',
      'Python',
      'ChatGPT API',
      'Speech-to-Text',
      'Text-to-Speech',
      'OpenCV',
      'Unity',
      'Microphone',
      'Speaker',
      'Screen',
      'Camera',
    ],
    outcomes: [
      'Creates a more interactive learning experience than traditional passive teaching',
      'Supports students at school or at home, including those who are sick or disabled',
      'Combines robotics, AI, voice interaction, and education into one practical concept',
    ],
    detailSections: [
      {
        title: 'The idea',
        body:
          'This project is an AI teacher robot designed to act as an interactive educational assistant. The robot can listen to students, understand their questions, and respond with lesson explanations in a way that feels more engaging and personal than traditional one-way teaching.',
      },
      {
        title: 'How it works',
        body:
          'The robot is designed as a humanoid-style or semi-humanoid robot with wheels. It includes a microphone to hear student questions, a speaker to respond, a screen to display explanations and visual content, and a camera for face recognition using OpenCV. The main logic runs on Raspberry Pi using Python, while AI understanding is powered through the ChatGPT API. Speech-to-text is used for listening, and text-to-speech is used for spoken responses.',
      },
      {
        title: 'Educational value',
        body:
          'What makes this robot powerful is that students can ask questions by voice and receive answers like they are speaking to a real teacher. It can explain lessons step by step, make learning more interactive, and reduce boredom compared with traditional educational methods. The concept works in classrooms and also supports learning from home.',
      },
      {
        title: 'Bigger vision',
        body:
          'This project is part of a bigger vision to improve education in Egypt by making learning easier, more accessible, and more interactive. It is especially useful for students who are sick, have disabilities, or cannot attend school in person. In the wider vision, the system could also help connect students with doctors or specialists through video communication when needed.',
      },
    ],
  },
  {
    slug: 'vr-live-education-platform',
    title: 'VR Live Education Platform',
    category: 'VR and Education',
    strapline: 'A virtual learning system designed to make education more accessible and immersive',
    summary:
      'A VR-based learning concept that combines VR hardware, a website, and an online app to create a virtual classroom experience that helps students learn from home, revisit missed lessons, and stay more engaged than in traditional online learning.',
    role: 'Product concept, education-focused system design, hardware and software planning',
    timeline: 'Innovation project for education technology',
    status: 'Built as a concept to improve accessibility and engagement in education',
    featured: true,
    stack: [
      'VR Headset',
      'Audio Headphones',
      'VR Website',
      'Online App',
      'Virtual Classroom Experience',
      'Remote Communication',
    ],
    outcomes: [
      'Supports students who are sick or unable to attend school in person',
      'Creates a more focused and immersive learning environment that can reduce distraction',
      'Expands access for students with disabilities and different learning needs',
    ],
    detailSections: [
      {
        title: 'The idea',
        body:
          'This project is a VR live website and app designed to improve education by making learning more immersive, flexible, and accessible. The system combines VR hardware with an online platform so students can join lessons in a virtual environment that feels more interactive than a normal video call.',
      },
      {
        title: 'How it works',
        body:
          'The product includes VR glasses, headphones, a VR website, and an online application. The experience is similar to a platform like Zoom, but built for virtual reality. Students can enter lessons, communicate with teachers, and learn in a more engaging digital classroom instead of using a standard flat-screen format.',
      },
      {
        title: 'Why it matters for education',
        body:
          'I see this invention as something that could help change education in Egypt by making learning easier for students who struggle with attention, traditional classroom methods, or missed lessons. Students can review classes they missed, learn at home when they are sick, and access more enjoyable and less stressful learning methods.',
      },
      {
        title: 'Accessibility and social impact',
        body:
          'The platform is especially valuable for students with illnesses, disabilities, or special educational needs because it allows them to continue learning from home at any time. It also creates ways for students to communicate with teachers and friends through the VR experience, which can make education feel more motivating, inclusive, and enjoyable.',
      },
    ],
  },
  {
    slug: 'homecare-assist-robot',
    title: 'HomeCare Assist Robot',
    category: 'Healthcare Robotics',
    strapline: 'A support robot for patients, seniors, and people with disabilities',
    summary:
      'A home-assistance robot designed to support people who may become seriously ill while living alone, with features for cleaning, monitoring, medicine reminders, food delivery, and remote communication.',
    role: 'Robotics concept, system design, patient-care workflow planning',
    timeline: 'Independent build and social-impact project',
    status: 'Built as a practical care-support robotics concept',
    featured: true,
    stack: [
      'Arduino',
      'Bluetooth Control',
      'Camera System',
      'Temperature Sensor',
      'Heart Rate Monitoring',
      'Blood Pressure Monitoring',
      'Smoke and Gas Detection',
      'UV Sanitization',
    ],
    outcomes: [
      'Addresses a real problem for people who become seriously ill while alone at home',
      'Combines home-cleaning, safety alerts, and patient-assistance features in one robot',
      'Extends the same system to seniors and people with disabilities who need daily support',
    ],
    detailSections: [
      {
        title: 'The problem',
        body:
          'Many people live alone, including single adults, business professionals, older adults, and patients without a full-time caregiver. When someone becomes seriously ill at home and cannot move, the risk becomes much higher because there may be nobody nearby to help, monitor their condition, or call for assistance in time.',
      },
      {
        title: 'The solution',
        body:
          'I built this robot as a home-care assistant that begins helping from the moment it enters the house. It can clean the floor using suction for dust and paper, use a magnetic system to collect small metal objects, and apply ultraviolet light to help sanitize the floor surface. The robot can be controlled from a mobile phone through Bluetooth, or it can move around the home and clean automatically.',
      },
      {
        title: 'Patient support features',
        body:
          'The robot is designed to assist a patient during periods of serious illness when movement is difficult. It can bring food and medicine to the patient, remind them when it is time to take medication, and provide a screen for communication with a doctor or family members. It also includes a temperature sensor, blood pressure measurement, and heart-rate monitoring to help track the patient’s condition.',
      },
      {
        title: 'Safety and accessibility',
        body:
          'The robot includes smoke detection and gas-leak monitoring so it can alert people inside or outside the home if danger is detected. It can also support older adults and people with disabilities by following them with a camera, helping deliver essential items, and enabling communication with family, doctors, or teachers. This makes the robot useful not only for emergency situations, but also for daily care and independent living.',
      },
    ],
  },
  {
    slug: 'autonomous-robotics-control',
    title: 'Autonomous Robotics Control Platform',
    category: 'Robotics and AI',
    strapline: 'Control surfaces for intelligent machines',
    summary:
      'A concept-to-interface build for monitoring sensors, movement logic, and decision feedback inside a cleaner web-based operator experience.',
    role: 'Product direction, interface design, frontend implementation',
    timeline: 'Competition and prototype workflow',
    status: 'Private case study available on request',
    featured: true,
    stack: ['React', 'TypeScript', 'Python', 'OpenCV', 'Arduino'],
    outcomes: [
      'Turns engineering state into a readable operator workflow',
      'Bridges robotics logic with a premium control interface',
      'Shows systems thinking beyond standard CRUD products',
    ],
    detailSections: [
      {
        title: 'Challenge',
        body:
          'Robotics projects often work technically but present information poorly. The challenge was to make system state, control logic, and live feedback easier to understand under pressure.',
      },
      {
        title: 'Approach',
        body:
          'I designed the interface around fast scanning, tighter status grouping, and cleaner interaction priorities so operators could interpret information quickly instead of hunting through clutter.',
      },
      {
        title: 'Why it matters',
        body:
          'This project proves I can translate technical systems into product-quality experiences, not just make something functional on the engineering side.',
      },
    ],
  },
  {
    slug: 'vibeup-event-platform',
    title: 'VibeUp Event Platform',
    category: 'Event Platform',
    strapline: 'A polished event website focused on energy, community, and conversion',
    summary:
      'A live event-focused website built to present experiences, audience engagement, pricing, and brand value in a cleaner, modern format that feels more premium than a standard landing page.',
    role: 'Frontend design, responsive implementation, visual positioning',
    timeline: 'Live product website',
    status: 'Published and accessible online',
    liveUrl: 'https://vibeup-event.vercel.app/',
    liveLabel: 'Open live site',
    featured: true,
    stack: ['Next.js', 'React', 'Responsive UI', 'Landing Page Architecture', 'Brand Presentation'],
    outcomes: [
      'Shows strong landing-page structure with clearer section hierarchy',
      'Presents pricing, community, and platform value in a more product-ready way',
      'Demonstrates live execution rather than concept-only portfolio work',
    ],
    detailSections: [
      {
        title: 'Project overview',
        body:
          'VibeUp is a live event website built to communicate excitement, audience connection, and the value of the platform in a way that feels modern and organized. The structure gives users a clear path through the story, from the product idea to pricing and calls to action.',
      },
      {
        title: 'What I built',
        body:
          'I built the site as a polished frontend experience with stronger visual rhythm, clearer sectioning, and a layout designed to support both browsing and conversion. The page balances branding with usability instead of relying on generic template sections.',
      },
      {
        title: 'Why it matters',
        body:
          'This project proves I can build public-facing product websites that feel alive, structured, and professionally presented, which is critical for startups, launches, and branded digital products.',
      },
    ],
  },
  {
    slug: 'aurelien-eta-fashion-site',
    title: 'Aurelien ETA Fashion Website',
    category: 'Brand and Commerce',
    strapline: 'A fashion-led brand website with a premium editorial feel',
    summary:
      'A live brand website for Aurelien ETA designed to showcase collections, product categories, and a refined visual identity with a more elevated presentation style.',
    role: 'Frontend design, brand presentation, luxury-style web execution',
    timeline: 'Live brand website',
    status: 'Published and accessible online',
    liveUrl: 'https://aurelien-eta.vercel.app/',
    liveLabel: 'Open live site',
    featured: true,
    stack: ['Next.js', 'React', 'Brand UI', 'Responsive Layout', 'Collection Presentation'],
    outcomes: [
      'Shows ability to build for fashion and premium visual brands',
      'Balances product presentation with a calmer, more editorial aesthetic',
      'Adds a real public website to the portfolio with clear visual credibility',
    ],
    detailSections: [
      {
        title: 'Project overview',
        body:
          'Aurelien ETA is a fashion-focused website designed to highlight collections and brand identity with a more premium, visually controlled feel. The site is intended to support brand perception first while still keeping navigation and product discovery easy.',
      },
      {
        title: 'What I built',
        body:
          'I built the frontend to create a cleaner luxury-style experience through spacing, typography, and a more deliberate visual hierarchy. The result is a brand website that feels more intentional and polished than a basic storefront or template.',
      },
      {
        title: 'Why it matters',
        body:
          'This project is important in the portfolio because it proves I can adapt my frontend work to a different market and visual language while keeping the experience credible, responsive, and public-ready.',
      },
    ],
  },
  {
    slug: 'premium-commerce-experience',
    title: 'Premium Commerce Experience',
    category: 'Web Product',
    strapline: 'Conversion-focused digital product design',
    summary:
      'A modern commerce interface focused on trust, visual polish, and smoother product discovery for a premium-feeling online store.',
    role: 'Frontend architecture, UI direction, responsive implementation',
    timeline: 'Launch-oriented web build',
    status: 'Case study and implementation notes available on request',
    featured: false,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Stripe'],
    outcomes: [
      'Combines product marketing clarity with application-grade structure',
      'Shows stronger positioning, hierarchy, and conversion thinking',
      'Demonstrates end-to-end ownership from layout to interaction polish',
    ],
    detailSections: [
      {
        title: 'Challenge',
        body:
          'Many commerce sites feel interchangeable. The goal was to create a clearer premium signal while keeping the buying path simple and technically maintainable.',
      },
      {
        title: 'Approach',
        body:
          'I focused on stronger product storytelling, sharper spacing, and a cleaner CTA path so the interface could sell quality before the customer even reached checkout.',
      },
      {
        title: 'Why it matters',
        body:
          'This is the kind of work that helps hiring managers see product sensitivity, not just code output.',
      },
    ],
  },
  {
    slug: 'robotics-learning-system',
    title: 'Robotics Learning System',
    category: 'Education Technology',
    strapline: 'Teaching systems that feel practical, not theoretical',
    summary:
      'A student-focused platform concept for robotics learning, mentorship, and project-based progress tracking.',
    role: 'Experience design, curriculum-aware product planning, frontend build',
    timeline: 'Education program support',
    status: 'Available for walkthroughs and future expansion',
    featured: false,
    stack: ['Next.js', 'React', 'Node.js', 'Arduino', 'Workshop content'],
    outcomes: [
      'Connects technical education to a clearer digital experience',
      'Reflects real mentorship background rather than generic EdTech styling',
      'Shows ability to build for both operators and learners',
    ],
    detailSections: [
      {
        title: 'Challenge',
        body:
          'Students need interfaces that guide action clearly, while mentors need structure that supports consistency. Most educational tools miss one side or the other.',
      },
      {
        title: 'Approach',
        body:
          'I treated the product as both a learning surface and an operational system, balancing clarity for students with enough structure for mentors and organizers.',
      },
      {
        title: 'Why it matters',
        body:
          'The project shows that I can use product design to support teaching outcomes, not just visual presentation.',
      },
    ],
  },
  {
    slug: 'vision-security-console',
    title: 'Vision Security Console',
    category: 'Computer Vision',
    strapline: 'Interface thinking for monitoring workflows',
    summary:
      'A computer-vision-driven monitoring concept designed around clarity, alerts, and fast interpretation of system events.',
    role: 'Interface concept, system framing, frontend design',
    timeline: 'Prototype exploration',
    status: 'Private concept work',
    featured: false,
    stack: ['Python', 'OpenCV', 'React', 'Flask', 'TensorFlow'],
    outcomes: [
      'Pushes beyond simple dashboards into operator-centered design',
      'Pairs technical confidence with a calmer visual language',
      'Supports future alerting and monitoring workflows',
    ],
    detailSections: [
      {
        title: 'Challenge',
        body:
          'Monitoring tools often surface too much detail with too little hierarchy. The challenge was to prioritize signal without hiding important events.',
      },
      {
        title: 'Approach',
        body:
          'I organized the interface around urgency, freshness, and clear status layers so an operator could identify issues quickly.',
      },
      {
        title: 'Why it matters',
        body:
          'It demonstrates that I can shape complex data into operational products that feel controlled and usable.',
      },
    ],
  },
  {
    slug: 'smart-home-automation-stack',
    title: 'Smart Home Automation Stack',
    category: 'IoT and Automation',
    strapline: 'Connected device orchestration with a cleaner frontend layer',
    summary:
      'A connected-home concept that links hardware control, automation logic, and mobile-friendly interaction patterns.',
    role: 'System planning, control UI exploration, frontend implementation',
    timeline: 'Prototype and experimentation',
    status: 'Concept and architecture work',
    featured: false,
    stack: ['React Native', 'Node.js', 'MQTT', 'Arduino', 'Raspberry Pi'],
    outcomes: [
      'Shows comfort with connected product thinking',
      'Translates automation flows into accessible controls',
      'Reflects hardware and software integration awareness',
    ],
    detailSections: [
      {
        title: 'Challenge',
        body:
          'Smart-home tools can become messy as devices and automations grow. The goal was to preserve simplicity while supporting technical depth.',
      },
      {
        title: 'Approach',
        body:
          'I reduced the interface to a few clear actions, readable states, and grouped scenarios so the system stayed understandable as complexity increased.',
      },
      {
        title: 'Why it matters',
        body:
          'This work supports roles that involve connected products, hardware-linked interfaces, or system orchestration.',
      },
    ],
  },
  {
    slug: 'student-operations-platform',
    title: 'Student Operations Platform',
    category: 'Web Platform',
    strapline: 'Administrative clarity for learning programs',
    summary:
      'A management surface for student progress, communication, and educational coordination with cleaner operational hierarchy.',
    role: 'UX structure, page system planning, full-stack implementation direction',
    timeline: 'Program support platform',
    status: 'Detailed walkthrough available on request',
    featured: false,
    stack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT'],
    outcomes: [
      'Balances utility, readability, and long-term maintainability',
      'Shows product thinking for admin and workflow surfaces',
      'Supports education programs that need better operational visibility',
    ],
    detailSections: [
      {
        title: 'Challenge',
        body:
          'Operational education platforms need structure more than decoration. The interface had to help people decide and act quickly.',
      },
      {
        title: 'Approach',
        body:
          'I focused on headings, list clarity, and cleaner information grouping so an operator could understand the system by scanning.',
      },
      {
        title: 'Why it matters',
        body:
          'It proves I can design and build utility-focused products as well as portfolio-style marketing surfaces.',
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
