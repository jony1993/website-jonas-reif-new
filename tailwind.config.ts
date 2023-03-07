import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
    content: [
        'content/**/*.md'
    ],
    theme: {
    extend: {
      colors: {
        'primary': {
            '50': '#e6e6ff',
            '100': '#d2d1ff',
            '200': '#b1acff',
            '300': '#887bff',
            '400': '#6c47ff',
            '500': '#601eff',
            '600': '#5d00ff',
            '700': '#5900ff',
            '800': '#4c00db',
            '900': '#0b011d',
        }
      }
    }
  }
}