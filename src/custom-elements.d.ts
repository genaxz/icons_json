declare namespace JSX {
  interface IntrinsicElements {
    'svg-icon': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        icon?: string;
        size?: string | number;
        color?: string;
        viewBox?: string;
      },
      HTMLElement
    >;
  }
}
