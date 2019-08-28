#!/usr/bin/env node

const [A,B,...args]=process.argv

console.log(`hello world ${args}`);

const URL = args;

console.log(URL);


const miEntrada = require('./index.js');