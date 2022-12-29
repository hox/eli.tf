import { Options } from '$fresh/plugins/twind.ts';
import * as colors from 'twind/colors';

export default {
  selfURL: import.meta.url,
  darkMode: 'class',
  mode: 'strict',
  theme: {
    extend: {
      colors,
    },
  },
} as Options;
