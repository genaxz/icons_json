declare module 'svg-icon-library/react' {
  import * as React from 'react';

  export interface SvgIconProps extends React.HTMLAttributes<HTMLElement> {
    icon: string;
    size?: number | string;
    color?: string;
    viewBox?: string;
  }

  export const SvgIcon: React.FC<SvgIconProps>;
  export const iconPaths: Record<string, string>;
}
