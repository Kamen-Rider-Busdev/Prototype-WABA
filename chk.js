const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const i = h.indexOf('<script type="text/babel">');
const pre = h.slice(0, i + 22);
const j = h.indexOf('root.render');
const post = h.slice(j);
fs.writeFileSync('/tmp/test.html', pre + '<div>Test</div>' + post);
console.log('written', pre.length, post.length);
