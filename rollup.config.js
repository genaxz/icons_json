import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

export default {
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
  plugins: [resolve()],
};
