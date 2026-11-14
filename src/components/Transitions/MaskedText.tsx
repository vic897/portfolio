import React from 'react';

interface MaskedTextProps {
  lines: readonly string[];
  className?: string;
  lineClassName?: string;
  animAttr?: boolean;
}

export const MaskedText: React.FC<MaskedTextProps> = ({
  lines,
  className = '',
  lineClassName = '',
  animAttr = true,
}) => {
  return (
    <span className={`block ${className}`} data-anim-group={animAttr ? '' : undefined}>
      {lines.map((line) => (
        <span key={line} className={`dm-mask-line ${lineClassName}`}>
          <span
            className="dm-mask-inner"
            data-anim={animAttr ? 'mask-rise' : undefined}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
};
