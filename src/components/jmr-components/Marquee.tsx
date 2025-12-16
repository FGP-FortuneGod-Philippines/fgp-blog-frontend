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
  itemClassName = 'mx-8 w-48 h-32',
  imageClassName = 'w-full h-full object-contain opacity-100 hover:opacity-70 transition-opacity duration-300',
}) => {
  return (
    <div className={`relative overflow-hidden ${pauseOnHover ? 'scroll-container' : ''} ${className}`}>
      <div 
        className={`flex ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{ 
          '--marquee-speed': `${speed}s`,
          width: 'max-content',
        } as React.CSSProperties}
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
    </div>
  );
};

export default Marquee;