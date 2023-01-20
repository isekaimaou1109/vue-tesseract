// import { babel } from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';
// import minify from 'rollup-plugin-minify-es';

const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const minify = require('rollup-plugin-minify-es');

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/vue-tesseract.min.js',
      format: 'cjs'
    },
    {
      file: 'dist/vue-tesseract.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    babel({ 
      babelHelpers: 'bundled', exclude: 'node_modules/**' ,
      presets: ['vue']
    }),
    commonjs(),
    minify()
  ]
};

module.exports = config
