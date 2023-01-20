const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/vue-tesseract.cjs.js',
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
    commonjs()
  ]
};

module.exports = config
