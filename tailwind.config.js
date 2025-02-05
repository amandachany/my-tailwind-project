/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 确保 Tailwind 能扫描到你所有的组件
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#1DA1F2", // 添加自定义颜色
      },
    },
  },
  plugins: [],
};
