export interface Project {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  coverImage: string;
  images: string[];
  client: string;
  location: string;
  year: string;
  services: string[];
}

export const projects: Project[] = [
  {
    id: 'modern-residence',
    title: 'Modern Residence',
    category: 'Architecture',
    excerpt: 'A contemporary residential project featuring clean lines and open spaces.',
    description: 'This modern residence combines minimalist design with functionality. The structure features expansive glass walls that blur the boundaries between indoor and outdoor living, allowing natural light to flood the interior spaces. Sustainable materials and energy-efficient systems were integrated throughout, creating a home that is both environmentally conscious and aesthetically striking.',
    coverImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    client: 'Private Client',
    location: 'Los Angeles, CA',
    year: '2023',
    services: ['Architectural Design', 'Interior Design', 'Construction Management'],
  },
  {
    id: 'urban-loft',
    title: 'Urban Loft Transformation',
    category: 'Interior Design',
    excerpt: 'A complete renovation of an industrial loft into a sophisticated living space.',
    description: 'This project involved transforming a raw industrial loft into a luxurious urban dwelling. We preserved original architectural elements like exposed brick walls and concrete pillars while introducing contemporary finishes and custom-designed furniture. The result is a harmonious blend of industrial heritage and modern comfort, creating a unique living experience in the heart of the city.',
    coverImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    client: 'Emily & Michael Thompson',
    location: 'New York, NY',
    year: '2022',
    services: ['Interior Design', 'Custom Furniture', 'Lighting Design'],
  },
  {
    id: 'commercial-complex',
    title: 'Nexus Commercial Complex',
    category: 'Buildership',
    excerpt: 'A multi-use commercial building with offices, retail, and public spaces.',
    description: 'Nexus is a forward-thinking commercial development that combines work, retail, and leisure in one cohesive environment. Our team managed the entire construction process, implementing innovative building techniques and sustainable practices. The complex features a central atrium with natural vegetation, creating a microclimate that enhances occupant comfort while reducing energy consumption.',
    coverImage: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    client: 'Nexus Development Group',
    location: 'Chicago, IL',
    year: '2021',
    services: ['Construction Management', 'Project Planning', 'Sustainable Building Practices'],
  },
  {
    id: 'coastal-villa',
    title: 'Coastal Villa Retreat',
    category: 'Architecture',
    excerpt: 'A luxury villa designed to embrace its coastal surroundings.',
    description: 'This coastal villa was designed to harmonize with its natural environment while offering luxurious modern living. The architecture responds to the coastal climate with deep overhangs, cross-ventilation, and durable materials that withstand marine conditions. Indoor and outdoor spaces flow seamlessly into one another, creating a residence that fully embraces its privileged location between mountains and sea.',
    coverImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    client: 'Private Client',
    location: 'Malibu, CA',
    year: '2022',
    services: ['Architectural Design', 'Landscape Design', 'Interior Design'],
  },
  {
    id: 'boutique-hotel',
    title: 'Azure Boutique Hotel',
    category: 'Interior Design',
    excerpt: 'A boutique hotel with distinctive character and luxurious details.',
    description: 'Azure Boutique Hotel required a complete interior design concept that would set it apart in a competitive market. Our approach focused on creating a distinctive atmosphere through carefully curated materials, custom artwork, and bespoke furniture. Each of the 42 rooms has a unique character while maintaining a cohesive design language throughout the property, providing guests with an unforgettable hospitality experience.',
    coverImage: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    client: 'Azure Hospitality Group',
    location: 'Miami, FL',
    year: '2021',
    services: ['Interior Design', 'FF&E Specification', 'Art Curation'],
  },
  {
    id: 'cultural-center',
    title: 'Metropolitan Cultural Center',
    category: 'Buildership',
    excerpt: 'A contemporary cultural center with advanced acoustic properties.',
    description: 'This ambitious public project demanded exceptional execution to realize the architect\'s vision for a cutting-edge cultural venue. Our buildership team coordinated the complex construction process, implementing specialized systems for acoustics and stage mechanics. The center features a 1,200-seat concert hall, flexible exhibition spaces, and educational facilities, all built to exacting specifications with superior craftsmanship.',
    coverImage: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/705764/pexels-photo-705764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    client: 'City of Portland',
    location: 'Portland, OR',
    year: '2020',
    services: ['Construction Management', 'Specialized Systems Implementation', 'Quality Control'],
  },
];

export const featuredProjects = projects.slice(0, 3);

export const projectCategories = [...new Set(projects.map(project => project.category))];