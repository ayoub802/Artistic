/* eslint-env node */
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
      margin: 'auto',
    },
    extend: {
      colors: {
        blue_color : 'var(--blue)',
        black_color : 'var(--black)',
        black_color_900 : 'var(--black-900)',
        cyan_color : 'var(--cyan)',
        green_color : 'var(--green)',
        indigo_color : 'var(--indigo)',
        orange_color : 'var(--orange)',
        pink_color : 'var(--pink)',
        purple_color : 'var(--purple)',
        red_color : 'var(--red)',
        teal_color : 'var(--teal)',
        yellow_color : 'var(--yellow)',
      },
      fontFamily: {
        Inter: ['var(--font-inter)', ...fontFamily.sans],
        space_gortesk: ['var(--font-space)', ...fontFamily.sans],
      },
      fontSize :{
        heading1: '80px',
        heading2: '72px',
        heading3: '54px',
        heading4: '40px',
        heading5: '34px',
        heading6: '28px',
        heading7: '20px',
        text1: '26px',
        text2: '22px',
        text3: '20px',
        text4: '18px',
        text5: '16px',
        text6: '14px',
        text7: '12px',
      },

      fontWeight:{
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '800',
      },

      padding:{
        'xlg': '19px 55px',
        'lg': '19px 44px',
        'md': '10px 26px',
        'sm': '9px 24px',
        'xsm': '8px 20px',
      },

      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // plugins: [require('tailwindcss-animate')],
}