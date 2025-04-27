import iconPaths from './icon-paths.js';

class SvgIcon extends HTMLElement {
  static get observedAttributes() {
    return ['icon', 'size', 'color', 'viewBox'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const icon = this.getAttribute('icon');
    const size = this.getAttribute('size') || 24;
    const color = this.getAttribute('color') || 'currentColor';
    const viewBox = this.getAttribute('viewBox') || '0 0 24 24';

    const path = iconPaths[icon];

    if (!path) {
      console.warn(`Icon "${icon}" not found in iconPaths`);
      this.shadowRoot.innerHTML = '';
      return;
    }

    this.shadowRoot.innerHTML = `
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="${size}"
        height="${size}"
        viewBox="${viewBox}"
        fill="${color}"
      >
        <path d="${path}"></path>
      </svg>
    `;
  }
}

// Define the custom element
if (typeof window !== 'undefined' && !customElements.get('svg-icon')) {
  customElements.define('svg-icon', SvgIcon);
}

export default SvgIcon;
