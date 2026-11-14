import React, { useRef } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.28,
  onClick,
  href,
  target,
  rel,
  download,
  type = 'button',
  ariaLabel,
}) => {
  const elRef = useRef<HTMLElement>(null);
  const isTouch = useMediaQuery('(pointer: coarse), (hover: none)');
  const reducedMotion = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isTouch || reducedMotion || !elRef.current) return;
    const rect = elRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
    elRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  };

  const handleLeave = () => {
    if (!elRef.current) return;
    elRef.current.style.transform = 'translate3d(0px, 0px, 0)';
  };

  const sharedProps = {
    ref: elRef as React.Ref<never>,
    className: `transition-transform duration-300 ease-out will-change-transform ${className}`,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
    'aria-label': ariaLabel,
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} download={download} {...sharedProps}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} {...sharedProps}>
      {children}
    </button>
  );
};
