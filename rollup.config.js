import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

export default [
  {
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
    plugins: [json(), resolve()],
  },
  {
    input: 'src/frameworks/react/index.ts',
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/frameworks/react',
      }),
      json(),
      resolve(),
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
];
