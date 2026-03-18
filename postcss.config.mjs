/** @type {import('postcss-load-config').Config} */
import 'tailwindcss';
import 'autoprefixer';

export default function config() {
  return {
    plugins: [
      tailwindcss,
      autoprefixer,
    ],
  };
}
