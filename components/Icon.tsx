import React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: 'svg' | 'png';
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ type, name, className, ...rest }) => {
  const imagePath = `/images/${name}.${type}`;

  if (type === 'svg' || type === 'png') {
    return (
      <span {...rest}>
        <img src={imagePath} alt={`Icon: ${name}`} className={className} />
      </span>
    );
  } else {
    return null;
  }
};

export default Icon;
