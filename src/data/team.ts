export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Michael Rivera',
    role: 'Principal Architect & Founder',
    bio: 'With over 20 years of experience in architecture, Michael founded Space9 with a vision to create a firm that integrates design and construction seamlessly. His work has been recognized with numerous design awards and publications in leading architectural journals.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Sophia Chen',
    role: 'Interior Design Director',
    bio: 'Sophia brings her refined aesthetic sensibility and technical expertise to every project. With a background in both fine arts and interior architecture, she creates spaces that are both beautiful and functional, paying meticulous attention to materials, light, and spatial flow.',
    image: 'https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'James Harrison',
    role: 'Head of Construction',
    bio: 'James oversees all buildership operations at Space9, ensuring that design intent is executed with precision and quality. His extensive experience in construction management and deep understanding of building systems allows the team to tackle complex projects with confidence.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Olivia Martinez',
    role: 'Project Architect',
    bio: 'Olivia specializes in sustainable design solutions and technical innovation. Her methodical approach to architectural problems has resulted in numerous creative solutions that balance aesthetic goals with environmental responsibility and practical considerations.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'Daniel Kim',
    role: 'Creative Director',
    bio: 'Daniel leads the conceptual design process at Space9, bringing a unique perspective informed by his international background and multidisciplinary education. He excels at translating client aspirations into compelling spatial narratives and architectural expressions.',
    image: 'https://images.pexels.com/photos/2523944/pexels-photo-2523944.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    name: 'Emma Wilson',
    role: 'Senior Interior Designer',
    bio: 'Emma has a talent for creating interiors that feel both timeless and contemporary. Her knowledge of historical design traditions combined with her awareness of current trends allows her to craft spaces with depth and longevity that resist passing fads.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];