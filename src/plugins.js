const myProvider = require("./my-provider");
const outputs = [];
const auths = [];
const caches = [];
const plugins = [
  {
    instance: myProvider
  }
];
module.exports = [...outputs, ...auths, ...caches, ...plugins];
