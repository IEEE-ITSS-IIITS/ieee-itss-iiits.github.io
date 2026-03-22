import { Event, TeamMember, TimelineEntry } from './types';

export const CHAPTER_CONFIG = {
  email: 'itss@iiits.in',
  institution: 'IIIT Sri City',
  location: 'Chittoor District, Andhra Pradesh, India',
  socials: {
    linkedin: '#',
    instagram: '#',
    twitter: '#',
  },
  registrationEndpoint: 'https://formspree.io/f/placeholder',
};

export const STATS = {
  trained: 1400,
  events: 40,
  partners: 12
};

export const DOMAINS = [
  { id: 'edge-ai', title: 'Edge AI', desc: 'Deploying deep learning on resource-constrained hardware.' },
  { id: 'v2x', title: 'V2X', desc: 'Vehicle-to-everything communication protocols.' },
  { id: 'safety', title: 'Safety', desc: 'Formal verification of autonomous decision systems.' },
  { id: 'efficiency', title: 'Efficiency', desc: 'Optimization of urban traffic flow via swarm intelligence.' }
];

export const EVENTS: Event[] = [
  {
    id: 'WS-01',
    title: 'IEEE-ITSS Winter School',
    date: '7–9 Dec 2023',
    mode: 'In-person',
    location: 'IIIT Sri City',
    participants: 105,
    description: 'Focus on ICT, AI/ML, IoT for 2-wheelers and e2W mobility; safety & electrification. Key topics include computer vision, data analytics, semi-autonomous riding, V2X, sensor fusion, EV tech, and wireless charging.',
    summary: [
      'Focus: ICT, AI/ML, IoT for 2-wheelers and e2W mobility',
      'Safety & electrification topics',
      'Audience: UG, PG/PhD, young faculty, industry',
      'Societal relevance: road safety and sustainable mobility'
    ],
    tags: ['Winter School', 'AI/ML', 'EV Tech'],
    images: ['/assets/slide_3_image_114.png', '/assets/slide_4_image_126.png']
  },
  {
    id: 'CP-01',
    title: 'Certificate Program 1.0',
    date: '6–18 May 2024',
    mode: 'In-person',
    location: 'IIIT Sri City',
    participants: 89,
    description: 'A 2-week intensive (50% hands-on) program covering IoT, autonomous systems, digital twin, AI/ML, and computer vision.',
    summary: [
      '2-week intensive (50% hands-on)',
      'Jointly certified by IIIT Sri City, British Council, and IEEE ITSS',
      'Continuous assessment and project evaluation'
    ],
    tags: ['Certificate Program', 'IoT', 'Autonomous Systems'],
    images: ['/assets/slide_5_image_138.png']
  },
  {
    id: 'PD-01',
    title: 'Smart Mobility Pitch Deck — ASCENTA \'25',
    date: '1 Mar 2025',
    mode: 'In-person',
    location: 'IIIT Sri City',
    participants: 25,
    description: 'Deep-tech showcase connecting student startups, faculty research, and industry mentors/investors.',
    tags: ['Pitch Deck', 'Smart Mobility', 'Entrepreneurship'],
    images: ['/assets/slide_6_image_151.png']
  },
  {
    id: 'CP-02',
    title: 'Certificate Program 2.0 (Theme: DigiT)',
    date: '4–8 May 2025',
    mode: 'In-person',
    location: 'IIIT Sri City',
    participants: 80,
    description: 'Theme: Digital Twin for IoT (DigiT). Focuses on industry-relevant skills and research insights in smart infrastructure and autonomous mobility.',
    summary: [
      'Theme: Digital Twin for IoT (DigiT)',
      'Pre-work model to build theory before campus workshop',
      'Applications: smart infrastructure, autonomous mobility, CPS'
    ],
    tags: ['Certificate Program', 'Digital Twin', 'IoT'],
    images: ['/assets/slide_6_image_148.png', '/assets/slide_7_image_163.png']
  },
  {
    id: 'HK-01',
    title: 'NexSync Motors Hackathon',
    date: 'Nov 2025',
    mode: 'In-person',
    location: 'IIIT Sri City',
    participants: 40,
    description: 'AI perception, detection, tracking, and autonomous decision-making for real-world mobility challenges.',
    tags: ['Hackathon', 'AI Perception', 'Autonomous Systems'],
    images: ['/assets/slide_6_image_154.png']
  },
  {
    id: 'CP-03',
    title: 'Certificate Program 3.0 — NIT Manipur',
    date: '14–18 Jan 2026',
    mode: 'Hybrid',
    location: 'NIT Manipur',
    participants: 65,
    description: '5-day hybrid workshop on IoT, Digital Twin, AI for Robotics & Autonomous Systems focusing on AI for Robotics.',
    summary: [
      'Focus: AI for Robotics',
      'Themes: IoT, Digital Twin, Autonomous Systems',
      'In collaboration with Anusandhan National Research Foundation'
    ],
    tags: ['Certificate Program', 'Robotics', 'Hybrid'],
    images: ['/assets/slide_8_image_172.png', '/assets/slide_8_image_175.png']
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: '2026',
    events: [EVENTS[5]],
  },
  {
    year: '2025',
    events: [EVENTS[4], EVENTS[3], EVENTS[2]],
  },
  {
    year: '2024',
    events: [EVENTS[1]],
  },
  {
    year: '2023',
    events: [EVENTS[0]],
  },
];

export const ADVISORS: TeamMember[] = [
  {
    name: 'Dr. Hiranmay Ghosh',
    role: 'Faculty Advisor',
    designation: 'Professor',
    department: 'Computer Science & Engineering',
    bio: 'Expert in Computer Vision and AI/ML applications in transportation.',
  },
];

export const STUDENT_TEAM: TeamMember[] = [
  {
    name: 'Student Coordinator',
    role: 'Chapter Lead',
    yearBranch: '3rd Year, CSE',
    linkedin: '#',
  },
];

export const GALLERY_IMAGES = [
  { id: 1, title: 'IIIT Sri City Entrance', src: '/assets/slide_1_image_89.png' },
  { id: 2, title: 'Winter School 2023', src: '/assets/slide_3_image_114.png' },
  { id: 3, title: 'Certificate Program 1.0', src: '/assets/slide_5_image_138.png' },
  { id: 4, title: 'Smart Mobility Pitch Deck', src: '/assets/slide_6_image_151.png' },
  { id: 5, title: 'NexSync Hackathon', src: '/assets/slide_6_image_154.png' },
  { id: 6, title: 'CP 3.0 NIT Manipur', src: '/assets/slide_8_image_175.png' },
  { id: 7, title: 'Winter School Session', src: '/assets/slide_3_image_117.png' },
  { id: 8, title: 'CP 2.0 Group Photo', src: '/assets/slide_6_image_148.png' },
  { id: 9, title: 'NIT Manipur Workshop', src: '/assets/slide_8_image_172.png' },
  { id: 10, title: 'Autonomous Systems Workshop', src: '/assets/slide_10_image_208.png' },
  { id: 11, title: 'IoT Training', src: '/assets/slide_4_image_126.png' },
  { id: 12, title: 'V2X Research', src: '/assets/slide_7_image_163.png' },
];

export const PAST_EVENTS = [
  {
    id: 'PAST-01',
    title: 'Certificate Program 3.0: IoT and Autonomous Systems',
    date: '14 - 18 Jan 2026',
    location: 'NIT Manipur (Hybrid)',
    images: ['/assets/slide_8_image_172.png', '/assets/slide_8_image_175.png'],
    participants: 65,
    description: 'A 5-day national level workshop focusing on AI for Robotics and Autonomous Systems. Jointly organized by NIT Manipur and IIIT Sri City.',
    details: [
      'Themes: IoT and Application, Digital Twin Concepts, Autonomous Systems',
      'Special Focus: AI for Robotics',
      'In collaboration with Anusandhan National Research Foundation'
    ]
  },
  {
    id: 'PAST-02',
    title: 'Certificate Program 2.0: IoT and Autonomous Systems',
    date: '4 - 8 May 2025',
    location: 'IIIT Sri City',
    images: ['/assets/slide_6_image_148.png', '/assets/slide_7_image_163.png'],
    participants: 80,
    description: 'Second edition focusing on Digital Twin for IoT (DigiT). Includes comprehensive pre-work and hands-on laboratory sessions.',
    details: [
      'Theme: Digital Twin for IoT (DigiT)',
      'Pre-work model for theoretical depth',
      'Applications in smart infrastructure and CPS'
    ]
  },
  {
    id: 'PAST-03',
    title: 'NexSync Motors Hackathon',
    date: 'Nov 2025',
    location: 'IIIT Sri City',
    images: ['/assets/slide_6_image_154.png'],
    participants: 40,
    description: 'An AI-focused hackathon tackling perception and autonomous decision-making for real-world mobility.',
    details: [
      'AI perception & tracking',
      'Autonomous decision modeling',
      'Real-world sensor data processing'
    ]
  },
  {
    id: 'PAST-04',
    title: 'Smart Mobility Pitch Deck — ASCENTA \'25',
    date: '1 Mar 2025',
    location: 'IIIT Sri City',
    images: ['/assets/slide_6_image_151.png'],
    participants: 25,
    description: 'Entrepreneurship-focused event connecting student research with industry investors.',
    details: [
      'Direct industry mentorship',
      'Student startup showcase',
      'Seed funding opportunities'
    ]
  },
  {
    id: 'PAST-05',
    title: 'Certificate Program 1.0',
    date: '6 - 18 May 2024',
    location: 'IIIT Sri City',
    images: ['/assets/slide_5_image_138.png'],
    participants: 89,
    description: 'An intensive 2-week laboratory-focused program on IoT and Autonomous Systems.',
    details: [
      'Joint certification: British Council & IEEE ITSS',
      '50% hands-on curriculum',
      'Continuous assessment protocol'
    ]
  },
  {
    id: 'PAST-06',
    title: 'IEEE-ITSS Winter School',
    date: '7 - 9 Dec 2023',
    location: 'IIIT Sri City',
    images: ['/assets/slide_3_image_114.png', '/assets/slide_4_image_126.png'],
    participants: 105,
    description: 'Comprehensive research school focusing on sustainable mobility for 2-wheelers and electrification.',
    details: [
      'Advanced V2X & Sensor Fusion topics',
      'Safety electrification focus',
      'Audience: Research scholars & industry professionals'
    ]
  }
];

export const UPCOMING_EVENTS = [
  {
    id: 'UP-01',
    title: 'Smart Mobility Workshop 2026',
    date: '15 Apr 2026, 10:00 AM IST',
    type: 'Workshop',
    image: '/assets/slide_1_image_89.png',
    location: 'IIIT Sri City',
    description: 'A deep dive into next-gen mobility solutions and urban planning using AI.',
    participants: '50+'
  }
];
