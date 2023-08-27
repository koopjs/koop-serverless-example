const pgProvider = require("./pg-provider");
const outputs = [];
const auths = [];
const caches = [];
const plugins = [
  {
    instance: pgProvider
  }
];
module.exports = [...outputs, ...auths, ...caches, ...plugins];
