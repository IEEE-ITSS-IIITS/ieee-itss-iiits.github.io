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
