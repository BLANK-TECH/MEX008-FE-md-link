const readMarkdown = require('../modules/readMarkdown');
const convertMarkdown = require('../modules/convertMarkdown');
const validateLinks = require('../modules/validate');
const mdLinks = require('../index');
const broken = require('../modules/broken');
const help = require('../modules/help');

const dataReadme = '[Node.js](https://nodejs.org/)[Google](https://www.google.com.mx/)[Hotmail](https://outlook.live.com/owa/)[Platzi](https://platzi.com/)';
const objectStats = {Total:8,Unique:6};
const objectData = [{ 
href: 'https://platzi.com/',
text: 'Platzi',
file: 'C:\\Users\\CHIMPAPA\\Documents\\JavaScript\\Markdown-Links\\MEX008-FE-md-link\\READMEPRUEBA.md',
status: 200 
}]

test('readMarkdown should be a function', () => {
  expect(typeof readMarkdown).toBe('function');
});

test('readMarkdown shoul return a string', ()=>{
  return readMarkdown('READMEPRUEBA.md').then(data=>{
    expect(typeof data).toBe('string');
  });
});

test('The file extension README.txt is not .md',()=>{
 return readMarkdown('README.txt').catch(e=>{
  expect(e).toBe('error');
 })
});

test('convertMarkdown should be a function', () => {
  expect(typeof convertMarkdown).toBe('function');
});

test('convertMarkdown should return a Object', ()=>{
    return convertMarkdown(dataReadme,'READMEPRUEBA.md').then(object=>{
      expect(typeof object).toBe('object');
  }) 
});

test('validateLinks should be a function', () => {
  expect(typeof validateLinks).toBe('function');
});

test('validateLinks should return a Object', ()=>{
  return validateLinks(objectData,'READMEPRUEBA.md').then(object=>{
    expect(typeof object).toBe('object');
  }) 
});

test('mdLinks should be a Function', () => {
  expect(typeof mdLinks).toBe('function');
});

test('--validate should return a object', ()=>{
    return mdLinks('READMEPRUEBA.md','--validate').then(res=>{
      expect(res instanceof Array).toBe(true);
    });
});

test('--validate should return a object', ()=>{
  return mdLinks('READMEPRUEBA.md','--validate').catch(e=>{
    expect(e).toBe('error');
  });
30000});

test('--stats should return a object', ()=>{
  return mdLinks('READMEPRUEBA.md','--stats').then(object=>{
    expect(typeof object).toBe('object');
  });
});

test('--stats --validate should return a object', ()=>{
  return mdLinks('READMEPRUEBA.md','--stats', '--validate').then(object=>{
    expect(typeof object).toBe('object');
  });
30000});

test('broken should be a function', () => {
  expect(typeof broken).toBe('function');
});

test('broken should return a object', ()=>{
  const data = broken(objectStats,objectData);
    expect(typeof data).toBe('object');
});

test('help should be a function', () => {
  expect(typeof help).toBe('function');
});

test('help should return a string', ()=>{
  const data = help();
    expect(typeof data).toBe('string');
});

test('mdLinks help should return a object', ()=>{
  return mdLinks('help').then(data=>{
    expect(typeof data).toBe('string');
  });
});

test('mdLinks should return error', ()=>{
  // expect.assertions(1);
  return mdLinks().catch(e=>{
    expect(e).toBe('Error, deberias ingresar una ruta al menos o ingresa mdLinks help');
   })
  });
  