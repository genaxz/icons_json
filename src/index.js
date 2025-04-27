export {
  default as iconPaths,
  ui,
  arrows,
  devices,
  media,
} from './icon-paths.js';
export { default as SvgIcon } from './svg-icon.js';

// Register the component when imported
if (typeof window !== 'undefined') {
  import('./svg-icon.js');
}
