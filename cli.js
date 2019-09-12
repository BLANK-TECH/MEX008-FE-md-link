#!/usr/bin/env node
'use strict';

const mdLinks = require('./');

// const [A,B,...args]=process.argv

mdLinks(process.argv[2],process.argv[3],process.argv[4])
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})




