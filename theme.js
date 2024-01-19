
import { themes } from 'mdx-deck'
export const theme = themes.future
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
const monospace = 'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'
const lobster = 'Lobster, Georgia, serif'
const roboto = 'Roboto, sans-serif'

export default {
  ...theme,
  font: roboto,
  monospace,
  prism: {
    style: okaidia
  },
  // fontSizes: [ 16, 24, 32, 48, 64, 96, 128 ],
  colors: {
    text: '#000',
    background: 'transparent',
    link: '#0366D6',
    pre: '#fff',
    preBackground: '#000',
    code: '#111',
    codeBackground: '#E1E4E8',
  },
  css: {
    ...theme.css,
    '& pre': {
      background: '#000 !important',
    },
    textAlign: 'left',
    '& .Slide': {
      width: '100%',
      alignItems: 'flex-start'
    }
  },
  heading: {
    fontFamily: roboto,
    fontWeight: 400
  },
  p: {
    fontFamily: monospace,
    fontSize: '1em'
  },
  li: {
    fontFamily: monospace,
    fontSize: '0.5em',
    lineHeight: '1.5'
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  // blockquote: {
  //   fontSize:
  // }
}
var window = window || [];
var analytics = window.analytics = window.analytics || [];
if (analytics.initialize){
  analytics.setAnalyticsCollectionEnabled(true);
}