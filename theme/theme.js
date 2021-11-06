import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  md: '48em', // 768
  lg: '62em', // 992
  xl: '80em', // 1280
  '2xl': '85.375em', // 1366
  '3xl': '90em', // 1440
  '4xl': '96em', // 1536
  '5xl': '120em' // 1920
})

export const theme = extendTheme({
  styles: {
    global: () => ({
      'html, body': {
        fontFamily: '"CeraPro", sans-serif',
        fontWeight: 400
      },
      body: {
        lineHeight: 'tall',
        color: 'gray.700',
        fontSize: 'md',
        fontWeight: 400,
        bg:'white'
      }
    })
  },
  breakpoints,
  fonts: {
    heading: '"CeraPro", sans-serif',
    body: '"CeraPro", sans-serif'
  },
  fontSizes: {
    xx: '.55rem',
    tiny: '.68rem',
    '7xl': '5rem',
    '8xl': '6rem'
  },
  colors: {
    cf: {
      100: 'rgba(68, 95, 36, 0.04)',
      200: 'rgba(49,188,46,0.1)',
      300: 'rgba(60, 145, 48, 0.05)',
      350: 'rgba(59, 145, 48, 0.7)',
      400: '#008808',
      450: '#9DC897',
      500: 'rgba(60, 145, 48, 0.18)',
      600: '#d6e1c9',
      700: '#307926',
      800: '#5AA250',
      900: 'linear-gradient(#93CF88, #5AA250)'
    },
    cfBlue: {
      100: 'rgba(23, 103, 197, 0.1)',
      400: '#1767C5',
      500: '#3182CE',
      900: 'linear-gradient(180deg, #93C5FF 0%, #1767C5 100%)'
    },
    cfNewButton: {
      400: 'linear-gradient(90.06deg, #1FA81B 0.05%, #31BC2E 98.95%)',
      500: 'linear-gradient(90.06deg, #E08D0A 0.05%, #FFBC00 99.95%)',
      600: 'linear-gradient(90.06deg, #022D2B 0.05%, #004C46 99.95%)'
    },
    cfNew: {
      400: 'linear-gradient(#1FA81B, #4BD643)',
      500: '#E08D0A',
      600: '#004C46',
      700: '#31BC2E'
    },
    cfYellow: {
      100: 'rgba(208, 142, 49, 0.1)',
      400: '#D08F31',
      900: 'linear-gradient(180deg, #FFCC81 0%, #C88523 100%)'
    },
    cfDark: {
      200: 'rgba(227, 231, 221, 0.2)',
      250: 'rgba(97, 111, 57, 0.1)'
    },
    cfButton: {
      500: '#3c9130',
      600: '#307926'
    },
    proButton: {
      500: '#008808',
      600: '#008808'
    },

    linear: {
      500: 'linear-gradient(#93CF88, #5AA250)',
      600: 'linear-gradient(#93CF88, #5AA250)'
    },
    progressGreen: {
      500: '#d6e1c9',
      600: '#3c9130'
    }
  },
  space: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    82: '21rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    121: '36rem',
    122: '37rem',
    123: '40rem',
    124: '42rem',
    125: '45rem',
    127: '48rem',
    129: '50rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    143: '72rem',
    145: '76rem',
    150: '80rem',
    155: '90rem'
  },
  sizes: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    82: '21rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    109: '28.125rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    122: '37rem',
    123: '40rem',
    124: '42rem',
    125: '45rem',
    127: '48rem',
    129: '50rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    143: '72rem',
    145: '76rem',
    150: '80rem',
    155: '90rem'
  }
})
