// const webSpiderV2 = require('./chapter-3/web-spider-v2');

// webSpiderV2();
const urlParse = require('url').parse;
const url = 'https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/src/questions/javascript-questions.md';
const parsedUrl = urlParse(url);
console.log(`[] ${'parsedUrl'.toUpperCase()}:: `, parsedUrl);

