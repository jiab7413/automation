#!/usr/bin/env node
const Serve = require('../lib/serve');
const serve = new Serve()
serve.run(process.argv.slice(2))
