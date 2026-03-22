export interface Event {
  id: string;
  title: string;
  date: string;
  mode: 'In-person' | 'Online' | 'Hybrid';
  location: string;
  participants: number;
  description: string;
  summary?: string[];
  tags: string[];
  image?: string;
  images?: string[];
  isUpcoming?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  designation?: string;
  department?: string;
  bio?: string;
  yearBranch?: string;
  linkedin?: string;
  image?: string;
}

export interface TimelineEntry {
  year: string;
  events: Event[];
}
