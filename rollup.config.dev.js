const path = require('path')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputPath = path.resolve(__dirname, './dist/mz.datav.js')

module.exports = {
  input: inputPath,
  output: {
    file: outputPath,
    format: "umd",
    name: 'mzDatav'
  }
}