import { motion } from 'framer-motion';
import { TeamMember } from '../../data/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[400px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>
      
      <h3 className="font-serif text-xl mb-1">{member.name}</h3>
      <p className="text-neutral-600 text-sm mb-2">{member.role}</p>
      
      <p className="text-neutral-500 line-clamp-3">{member.bio}</p>
    </motion.div>
  );
};

export default TeamMemberCard;