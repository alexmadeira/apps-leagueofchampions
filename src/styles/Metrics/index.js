import BreakpointsConfig from './breakpoints';
import ColorsList from './colors';
import FontsConfig from './fonts';
import SpacesList from './spaces';

export const Colors = { ...ColorsList };
export const Spaces = { ...SpacesList };
export const Fonts = { ...FontsConfig };
export const Breakpoints = { ...BreakpointsConfig };

export default { Colors, Spaces, Fonts, Breakpoints };
