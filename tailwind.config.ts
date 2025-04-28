// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
        backdropBlur: {
            xs: '2px',
            sm: '4px',
            md: '8px',
            lg: '12px',
            xl: '24px',
            '2xl': '40px'
            },
      colors: {
        'restaurant-navy': '#0F172A',
        'restaurant-gold': '#D4AF37',
        'restaurant-amber': '#B8860B'
      },
      keyframes: {
        scaleUp: {
          'from': { transform: 'scale(0.8)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' }
        },
        fadeIn: {
          'to': { opacity: '1' }
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      animation: {
        scaleUp: 'scaleUp 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        pulseGentle: 'pulseGentle 3s ease-in-out infinite'
      },
    }
  },

}