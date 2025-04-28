import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

// Base configuration for all builds
const baseConfig = {
  plugins: [json(), resolve()],
};

export default [
  // Main library (Web Component)
  {
    ...baseConfig,
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.min.js',
        format: 'iife',
        name: 'SvgIconLibrary',
        plugins: [terser()],
        sourcemap: true,
      },
    ],
  },
  // React wrapper
  {
    ...baseConfig,
    input: 'src/frameworks/react/index.ts',
    plugins: [
      ...baseConfig.plugins,
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/frameworks/react',
      }),
    ],
    external: ['react', 'react-dom'],
    output: [
      {
        file: 'dist/frameworks/react/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/frameworks/react/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
  // Vue wrapper
  {
    ...baseConfig,
    input: 'src/frameworks/vue/index.ts',
    plugins: [
      ...baseConfig.plugins,
      vue(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/frameworks/vue',
      }),
    ],
    external: ['vue'],
    output: [
      {
        file: 'dist/frameworks/vue/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/frameworks/vue/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
  },

  // Angular wrapper
  {
    ...baseConfig,
    input: 'src/frameworks/angular/index.ts',
    plugins: [
      ...baseConfig.plugins,
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/frameworks/angular',
      }),
    ],
    external: ['@angular/core'],
    output: [
      {
        file: 'dist/frameworks/angular/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/frameworks/angular/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
  },
];
