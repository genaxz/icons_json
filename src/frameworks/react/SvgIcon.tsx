import React from 'react';
import '../../svg-icon'; // Import the Web Component

export interface SvgIconProps extends React.HTMLAttributes<HTMLElement> {
  icon: string;
  size?: number | string;
  color?: string;
  viewBox?: string;
}

export const SvgIcon: React.FC<SvgIconProps> = ({
  icon,
  size = 24,
  color = 'black',
  viewBox = '0 0 24 24',
  ...props
}) => {
  return (
    <svg-icon
      icon={icon}
      size={size}
      color={color}
      viewBox={viewBox}
      {...props}
    />
  );
};
