declare class SvgIcon extends HTMLElement {
  static get observedAttributes(): string[];
  constructor();
  connectedCallback(): void;
  attributeChangedCallback(): void;
  render(): void;
}

export default SvgIcon;
