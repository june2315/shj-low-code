const child_process = require('child_process');
let scopeArgIndex = Array.from(process.argv).findIndex(
  (item) => item.replace('--', '') === 'scope',
);
let scopes = scopeArgIndex !== -1 ? process.argv.slice(scopeArgIndex + 1) : [];

console.log(scopeArgIndex, scopes);
