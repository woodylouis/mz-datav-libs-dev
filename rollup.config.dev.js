const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/mz.datav.js')
const outputEsPath = path.resolve(__dirname, './dist/mz.datav.es.js')
module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: "umd",
      name: 'mzDatav'
    }, 
    {
      file: outputEsPath,
      format: "es",
      name: 'mzDatav'
    },   
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'sam-test-data'
  ]
}