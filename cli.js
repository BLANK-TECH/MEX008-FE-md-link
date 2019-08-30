#!/usr/bin/env node
const miEntrada = require('./index');
const validate = require('./modules/validate.js');
const state = require('./modules/state.js');

const [A,B,...args]=process.argv

const URL = args;
console.log(URL);


miEntrada(args);
// console.log(`hello world ${args}`);



