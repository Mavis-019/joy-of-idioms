import type { Config } from 'tailwindcss';

/**
 * 悦读成语 — 水墨国风色彩体系
 * 【严禁修改】以下色值与原项目保持完全一致
 */
const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#a93027', hover: '#ca483d' },
        secondary: { DEFAULT: '#1a6a53', hover: '#237159' },
        tertiary: { DEFAULT: '#7b5500' },
        rice: { DEFAULT: '#fdf9f0', darker: '#f5eee0' },
        charcoal: '#1c1c17',
        'ink-light': '#58413e',
        'border-warm': '#ebdcc5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif SC"', '"Playfair Display"', 'serif'],
        // 数字专用：半角比例数字，与汉字混排紧凑（商品标题/描述中的数字）
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
