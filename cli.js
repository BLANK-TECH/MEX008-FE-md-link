#!/usr/bin/env node
'use strict';

const miEntrada = require('./');


const [A,B,...args]=process.argv

const URL = args;
console.log(URL);


miEntrada(args);
// console.log(`hello world ${args}`);



