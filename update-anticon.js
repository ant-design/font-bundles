#!/usr/bin/env node

const fs = require('fs');
const stdin = process.openStdin();
let data = '';

stdin.on('data', function(chunk) {
  data += chunk;
});

stdin.on('end', function() {
  const icons = [];
  data.toString().split(/\n/).forEach((line, i) => {
    const match = line.match(/^\.\@\{iconfont-css-prefix\}-(.*):before\s{\scontent:\s\"\\(.*)\"/);
    if (match && match[0] && match[1] && match[2]) {
      const iconName = match[1];
      const iconUnicode = match[2];
      icons.push({
        name: iconName,
        id: iconName,
        created: 1,
        unicode: iconUnicode,
      });
    }
  })

  fs.writeFileSync('./bundle/ant-design.json', JSON.stringify({ icons }, null, 2));
  console.log('Update bundle/ant-design.json successfully!');
});
