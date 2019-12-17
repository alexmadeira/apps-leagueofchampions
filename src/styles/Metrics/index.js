import ColorsList from './colors';
import SpacesList from './spaces';
import FontsConfig from './fonts';
import BreakpointsConfig from './breakpoints';

export const Colors = { ...ColorsList };
export const Spaces = { ...SpacesList };
export const Fonts = { ...FontsConfig };
export const Breakpoints = { ...BreakpointsConfig };

export default { Colors, Spaces, Fonts, Breakpoints };
