import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import TeamMemberCard from '../components/ui/TeamMemberCard';
import { teamMembers } from '../data/team';

const AboutPage = () => {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <Section className="bg-neutral-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl mb-6">About Space9</h1>
            <p className="text-neutral-600 text-lg mb-4">
              Founded in 2015, Space9 brings together architecture, interior design, and buildership under one roof, creating a seamless experience for our clients.
            </p>
            <p className="text-neutral-600 mb-4">
              Our integrated approach ensures that projects move smoothly from concept to completion, with a consistent vision and attention to detail at every stage.
            </p>
          </motion.div>
          
          <motion.div
            className="h-[400px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Space9 team collaborating"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>
      
      {/* Our Philosophy */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Our Philosophy"
            subtitle="We believe that exceptional spaces are created through a combination of thoughtful design, technical expertise, and meticulous execution."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-serif text-xl mb-4">Design Excellence</h3>
              <p className="text-neutral-600">
                We create spaces that balance aesthetics, functionality, and context, resulting in designs that are both beautiful and purposeful.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-serif text-xl mb-4">Integrated Approach</h3>
              <p className="text-neutral-600">
                Our multidisciplinary expertise allows us to see the big picture while attending to every detail, ensuring cohesive results.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-serif text-xl mb-4">Lasting Quality</h3>
              <p className="text-neutral-600">
                We prioritize timeless design and durable construction over trends, creating spaces that remain relevant and functional for years to come.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Our Team */}
      <Section className="bg-neutral-50">
        <SectionTitle
          title="Our Team"
          subtitle="Meet the talented individuals who bring creativity, expertise, and dedication to every project."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>
      
      {/* Our Process */}
      <Section>
        <SectionTitle
          title="Our Process"
          subtitle="We follow a comprehensive approach that guides projects from initial concept to final execution."
          center
        />
        
        <div className="mt-12">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-neutral-200"></div>
            
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  number: '01',
                  title: 'Discovery',
                  description: 'We begin by understanding your goals, requirements, and vision through in-depth consultations and site analysis.',
                },
                {
                  number: '02',
                  title: 'Concept Development',
                  description: 'Our team develops initial design concepts that explore different approaches to meeting your objectives.',
                },
                {
                  number: '03',
                  title: 'Design Refinement',
                  description: 'We refine the selected concept, developing detailed plans, specifications, and visual representations.',
                },
                {
                  number: '04',
                  title: 'Implementation',
                  description: 'Our buildership team brings the design to life, managing construction with precision and quality control.',
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  className={`relative md:flex items-start ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`md:w-5/12 p-8 bg-white shadow-sm border border-neutral-100 relative ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <span className="absolute -top-6 left-8 text-5xl font-serif text-navy-200 opacity-50">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                  
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-navy-800 border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;

