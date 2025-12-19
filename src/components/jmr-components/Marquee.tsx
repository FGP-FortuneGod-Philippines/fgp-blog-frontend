import React from 'react';

export interface Client {
  src: string;
  label: string;
}

export interface MarqueeProps {
  clients: Client[];
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
  imageClassName?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  clients,
  direction = 'left',
  speed = 40,
  pauseOnHover = true,
  className = '',
  itemClassName = 'mx-4 md:mx-8 w-32 h-24 md:w-48 md:h-32',
  imageClassName = 'w-full h-full object-contain opacity-100 hover:opacity-70 transition-opacity duration-300',
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className="flex"
        style={{ 
          animation: `${direction === 'left' ? 'scroll-left' : 'scroll-right'} ${speed}s linear infinite`,
          animationPlayState: 'running',
          width: 'max-content',
        } as React.CSSProperties}
        onMouseEnter={pauseOnHover ? (e) => {
          e.currentTarget.style.animationPlayState = 'paused';
        } : undefined}
        onMouseLeave={pauseOnHover ? (e) => {
          e.currentTarget.style.animationPlayState = 'running';
        } : undefined}
      >
        {[...clients, ...clients].map((client, index) => (
          <div 
            key={`${direction}-${index}`}
            className={`flex items-center justify-center flex-shrink-0 ${itemClassName}`}
          >
            <img 
              src={client.src} 
              alt={client.label}
              className={imageClassName}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Add global styles - this will apply to entire page */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-50%)); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;