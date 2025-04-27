import ui from './icon-paths/ui.json';
import arrows from './icon-paths/arrows.json';
import devices from './icon-paths/devices.json';
import media from './icon-paths/media.json';

// Combine all categories into a single paths object
const iconPaths = {
  ...ui,
  ...arrows,
  ...devices,
  ...media,
};

// Export the combined icon paths
export default iconPaths;

// Also export individual categories for more granular imports
export { ui, arrows, devices, media };
