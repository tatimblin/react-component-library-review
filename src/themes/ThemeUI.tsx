import { red } from '@mui/material/colors';
import { makeTheme } from '@theme-ui/css/utils';
import { Theme } from 'theme-ui';

const heading = {
  fontFamily: 'text.heading',
  lineHeight: 'text.heading',
  fontWeight: 'text.heading',
}

const themeuiBase : Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    root: {
      fontFamily: 'sans-serif',
      lineHeight: 1,
      fontWeight: 400,
      color: '#000',
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      fontFamily: 'sans-serif',
      lineHeight: 1,
      fontWeight: 400,
      color: '#000',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};

export const themeuiThemes : { [key: string]: Theme } = {
  default: makeTheme({
    fonts: {
      body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#0F70F0',
      secondary: '#F2BF56',
      muted: '#f6f6f6',
    },
    ...themeuiBase,
    text: {
      heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
        color: 'primary',
      },
      base: {
        fontSize: 1,
      }
    },
    links: {
      primary: {
        backgroundColor: 'primary',
        color: 'white',
        padding: '10px 20px',
        display: 'inline-block',
      },
    },
    cards: {
      primary: {
        backgroundColor: 'background',
      },
    },
  }),
  subway: makeTheme({
    fonts: {
      body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#009743',
      seondary: '#FFCB0A',
    },
    ...themeuiBase,
    text: {
      heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
        color: 'primary',
      },
      base: {
        fontSize: 1,
      },
    },
    links: {
      primary: {
        backgroundColor: 'primary',
        color: 'white',
        padding: '10px 20px',
        display: 'block',
        borderRadius: 20,
      },
    },
    cards: {
      primary: {
        backgroundColor: 'background',
      },
    },
  }),
  verizon: makeTheme({
    fonts: {
      body: '"Helvetica Neue", sans-serif',
      heading: '"Helvetica Neue", sans-serif',
      monospace: 'Menlo, monospace',
    },
    colors: {
      text: '#fff',
      background: '#000000',
      primary: '#EE0000',
    },
    ...themeuiBase,
    text: {
      heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
        color: 'primary',
      },
      base: {
        color: 'text',
        fontSize: 2,
      },
    },
    links: {
      primary: {
        backgroundColor: 'primary',
        color: 'white',
        padding: '8px 20px',
        display: ['block', 'inline-block'],
        fontSize: 2,
        textTransform: 'uppercase',
        fontWeight: 'bold',
      },
    },
    cards: {
      primary: {
        backgroundColor: 'background',
      },
    },
  }),
};

export const ThemeList : string[] = Object.keys(themeuiThemes);
