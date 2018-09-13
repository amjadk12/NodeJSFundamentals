(function (exports, require, module, __filename, __dirname) {
import path from 'path';

const p=path()
let pathobj= p.parse(__filename);
// let pathobj="Amjad Khan";

console.log(`File Object: ${pathobj}`);
})                     