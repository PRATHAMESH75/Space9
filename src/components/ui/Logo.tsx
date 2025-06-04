import { Square } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Nested squares */}
      <div className="relative w-[22px] h-[22px] mr-2">
        <Square size={22} className="absolute top-0 left-0" strokeWidth={1.5} />
        <Square size={14} className="absolute top-[4px] left-[4px]" strokeWidth={1.5} />
      </div>

      {/* Text with Stop Regular font */}
      <span className="text-xl tracking-wide font-stop">SPACE9</span>
    </div>
  );
};

export default Logo;
