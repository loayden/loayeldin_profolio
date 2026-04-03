export type CvExperienceEntry = {
  title: string;
  period: string;
  summary: string;
  points: string[];
};

export const cvExperience: CvExperienceEntry[] = [
  {
    title: 'Independent Full-Stack Developer and Product Builder',
    period: '2023 - Present',
    summary:
      'Builds live websites, portfolio systems, and product-style interfaces with a strong focus on visual quality, responsiveness, and clear communication.',
    points: [
      'Delivers public-facing websites using Next.js, React, TypeScript, and App Router workflows.',
      'Translates rough founder or client direction into polished interfaces with stronger hierarchy and conversion paths.',
      'Maintains a frontend standard focused on responsiveness, visual discipline, and clear presentation.',
    ],
  },
  {
    title: 'Robotics Engineer, Innovation Competitor, and Prototype Builder',
    period: '2018 - Present',
    summary:
      'Designs and presents robotics concepts focused on real-world problems including healthcare support, education access, and intelligent systems.',
    points: [
      'Works with Raspberry Pi, Arduino, Python, C++, sensors, and computer vision in competition and prototype environments.',
      'Represented Egypt in international robotics and innovation competitions across multiple countries.',
      'Turns technical research into practical concepts, working demos, and high-pressure presentations.',
    ],
  },
  {
    title: 'Robotics Mentor and Technical Educator',
    period: '2024 - Present',
    summary:
      'Supports students through mentorship, workshops, and project-based learning in robotics, programming, and innovation.',
    points: [
      'Mentors more than 100 students through workshops, technical guidance, and competition preparation.',
      'Explains difficult technical ideas in a simpler, more practical way for younger learners.',
      'Combines engineering depth with communication, structure, and patience in learning environments.',
    ],
  },
];

export const cvSelectedProjectSlugs = [
  'vibeup-event-platform',
  'aurelien-eta-fashion-site',
  'autonomous-robotics-control',
  'homecare-assist-robot',
];

export const cvSelectedRecognitionKeys = [
  'April 27, 2024|MRC Greece',
  'February 4, 2024|Robo Tourney United States Tournament',
  'March 4, 2024|African-Asian Innovation and Technology Forum in Jordan',
  'March 6, 2022|SeaPerch World Championship',
  'November 16, 2022|Young Innovators Competition',
  'October 17, 2022|Robot Challenge',
];
