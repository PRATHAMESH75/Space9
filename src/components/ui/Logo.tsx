import { Square } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative mr-2">
        <Square size={22} className="absolute" strokeWidth={1.5} />
        <Square size={14} className="absolute top-1 left-1" strokeWidth={1.5} />
      </div>
      <span className="font-serif text-xl tracking-wide">SPACE9</span>
    </div>
  );
};

export default Logo;