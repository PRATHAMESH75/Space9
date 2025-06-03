export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    text: 'Space9 transformed our house into a dream home. Their architectural vision perfectly captured what we wanted, and their attention to detail during construction was impressive. The team was responsive and professional throughout the entire process.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 2,
    name: 'Mark Thompson',
    role: 'CEO, Nexus Development Group',
    text: 'Working with Space9 on our commercial complex was a fantastic experience. Their comprehensive approach from design to construction made the process seamless. The final result exceeded our expectations in both aesthetics and functionality.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Design Director, Azure Hospitality',
    text: 'The interior design work Space9 did for our boutique hotel has received countless compliments from guests. Their ability to create unique, sophisticated spaces while maintaining practical considerations for hospitality operations was impressive.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Urban Planning Commissioner',
    text: 'The Metropolitan Cultural Center project demonstrates Space9\'s excellence in buildership. Their team managed a complex construction timeline with precision, ensuring that all technical requirements for acoustics and specialized systems were perfectly executed.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 5,
    name: 'Jennifer Williams',
    role: 'Residential Client',
    text: 'From our first meeting to the final walkthrough, Space9 provided exceptional service. They listened to our needs and created a home that perfectly suits our lifestyle. The quality of construction and thoughtfulness of design make us happy every day.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 6,
    name: 'Robert Mendes',
    role: 'Commercial Property Developer',
    text: 'Space9\'s integrated architecture, interior design, and buildership services created significant value for our retail development. Their cohesive approach ensured that every aspect of the project worked in harmony, from structural elements to the final aesthetic details.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];