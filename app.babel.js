import path from 'path';

const p = path();
var pathobj = p.parse(__filename);

console.log("File Object:" + pathobj);
