const fs = require('fs');
const { minify } = require('terser');

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

fs.copyFileSync('./src/index.js', './dist/docsify-ethicalads.js');
minify(String(fs.readFileSync('./src/index.js'))).then((result) => { 
  fs.writeFileSync('./dist/docsify-ethicalads.min.js', result.code);
});
