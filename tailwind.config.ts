import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  theme: {
    extend: {
      dropShadow: {
        'tower': [
          '0 1px 0 black',
          '0 2px 0 black',
          '0 3px 0 black',
          '0 4px 0 black',
          '0 5px 0 black',
          '0 5px 10px black'
        ]
      },
      fontFamily: {
        'gulax': ['Gulax', ...defaultTheme.fontFamily.sans],
        'format1452': ['"Format 1452"', ...defaultTheme.fontFamily.sans]
      }
    }
  }
};