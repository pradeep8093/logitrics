const fs = require('fs-extra');
const concat = require('concat');

(async function build () {
  const files = [
    './dist/logitrics/runtime.js',
    './dist/logitrics/main.js',
    './dist/logitrics/polyfills.js'
  ];

  await fs.ensureDir('logitrics');
  await concat(files, 'logitrics/logitrics.js');
  await fs.copy('./dist/logitrics/styles.css', 'logitrics/styles.css')
})()