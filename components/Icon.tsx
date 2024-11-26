import Image from 'next/image';

interface IconProps {
  name: string;
  type?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ name, type = 'svg', alt = 'icon', width = 24, height = 24 }) => {
  return (
    <div>
      <Image
        src={`/icons/${name}.${type}`} // Adjust the path based on your icon directory
        alt={alt}
        width={width}
        height={height}
        layout="intrinsic" // This maintains the given width/height
      />
    </div>
  );
};

export default Icon;
