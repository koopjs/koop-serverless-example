const pgProvider = require("./pg-provider");
const outputs = [];
const auths = [];
const caches = [];

const pgprovider = pgProvider({
  name: "pg module"
});
const plugins = [
  {
    instance: pgprovider
  }
];
module.exports = [...outputs, ...auths, ...caches, ...plugins];
