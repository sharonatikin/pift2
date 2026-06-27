import { defineConfig } from 'eslint/config'
import eslintNextPlugin from '@next/eslint-plugin-next'
 
const eslintConfig = defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      next: eslintNextPlugin,
    },
    settings: {
      next: {
        rootDir: 'packages/my-app/',
      },
    },
  },
])
 
export default eslintConfig