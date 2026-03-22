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
    description: 'Computer vision, data analytics, semi-autonomous riding; V2X, sensor fusion, EV tech, wireless charging.',
    summary: [
      'Focus on ICT, AI/ML, IoT for 2-wheelers and e2W mobility',
      'Safety & electrification topics covered',
      'Audience: UG, PG/PhD, young faculty, industry'
    ],
    tags: ['Winter School', 'AI/ML', 'EV Tech'],
    image: '/assets/slide_3_image_117.png'
  },
  {
    id: 'CP-01',
    title: 'Certificate Program 1.0',
    date: '6–18 May 2024',
    mode: 'In-person',
    location: 'IIIT Sri City',
    participants: 89,
    description: '2-week intensive (50% hands-on) jointly certified by IIIT Sri City, British Council, and IEEE ITSS.',
    summary: [
      'IoT, autonomous systems, digital twin, AI/ML, computer vision',
      'Strong hands-on component',
      'Continuous assessment and project evaluation'
    ],
    tags: ['Certificate Program', 'IoT', 'Autonomous Systems'],
    image: '/assets/slide_5_image_138.png'
  },
  {
    id: 'PD-01',
    title: 'Smart Mobility Pitch Deck — ASCENTA \'25',
    date: '1 Mar 2025',
    mode: 'In-person',
    location: 'IIIT Sri City',
    participants: 25,
    description: 'Deep-tech showcase connecting student startups, faculty research, and industry mentors.',
    tags: ['Pitch Deck', 'Smart Mobility', 'Entrepreneurship'],
    image: '/assets/slide_6_image_151.png'
  },
  {
    id: 'CP-02',
    title: 'Certificate Program 2.0 (Theme: DigiT)',
    date: '4–8 May 2025',
    mode: 'In-person',
    location: 'IIIT Sri City',
    participants: 80,
    description: 'Theme: Digital Twin for IoT (DigiT). Pre-work model + on-campus workshop.',
    summary: [
      'Pre-work to build theory before campus workshop',
      'Focus on industry-relevant skills and research insights',
      'Applications in smart infrastructure and autonomous mobility'
    ],
    tags: ['Certificate Program', 'Digital Twin', 'IoT'],
    image: '/assets/slide_6_image_148.png'
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
    image: '/assets/slide_6_image_154.png'
  },
  {
    id: 'CP-03',
    title: 'Certificate Program 3.0 — NIT Manipur',
    date: '14–18 Jan 2026',
    mode: 'Hybrid',
    location: 'NIT Manipur',
    participants: 65,
    description: '5-day hybrid workshop on IoT, Digital Twin, AI for Robotics & Autonomous Systems.',
    tags: ['Certificate Program', 'Robotics', 'Hybrid'],
    image: '/assets/slide_8_image_175.png'
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
    image: '/assets/slide_8_image_172.png',
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
    date: 'Dec 2025',
    location: 'IIIT Sri City',
    image: '/assets/slide_6_image_148.png',
    description: 'Second edition of the successful certificate program focusing on Digital Twins for Intelligent Transportation Systems (DigIT).',
    details: [
      'Theme: Digital Twin for ITS (DigIT)',
      'Hands-on training with IoT sensor networks',
      'Collaborative research sessions'
    ]
  },
  {
    id: 'PAST-03',
    title: 'IEEE ITSS Winter School',
    date: '2025',
    location: 'IIIT Sri City',
    image: '/assets/slide_3_image_114.png',
    description: 'An intensive Winter School program covering modern research technologies in the field of Intelligent Transportation.',
    details: [
      'Advanced sessions on ITS infrastructure',
      'Expert lectures from industry and academia',
      'Strategic research methodology workshop'
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
