const readMarkdown = require('../modules/readMarkdown');
const convertMarkdown = require('../modules/convertMarkdown');
const mdLinks = require('../index');
const broken = require('../modules/broken');
const help = require('../modules/help');

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

test('the data is string', ()=>{
  return readMarkdown('READMEPRUEBA.md').then(data=>{
    expect(typeof data).toBe('string');
  });
});

test('the file is not .md',()=>{
 return readMarkdown('README.txt').catch(e=>{
  expect(e).toBe('error');
 })
});

test('convertMarkdown should be a function', () => {
  expect(typeof convertMarkdown).toBe('function');
});

test('convertMarkdown should return a Object', ()=>{
  return readMarkdown('READMEPRUEBA.md').then(data=>{
    return convertMarkdown(data,'READMEPRUEBA.md').then(object=>{
      expect(typeof object).toBe('object');
    });
  })
  
});

test('mdLinks should be a Function', () => {
  expect(typeof mdLinks).toBe('function');
});

test('--validate should return a object', ()=>{
    // expect.assertions(1)
    return mdLinks('READMEPRUEBA.md','--validate').then(res=>{
      expect(res instanceof Array).toBe(true);
    });
});

test('--stats should return a object', ()=>{
  return mdLinks('READMEPRUEBA.md','--stats').then(object=>{
    expect(typeof object).toBe('object');
  });
});

test('--stats --validate should return a object', ()=>{
  return mdLinks('READMEPRUEBA.md','--stats --validate').then(object=>{
    expect(typeof object).toBe('object');
  });
});

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
  return mdLinks().catch(e=>{
    expect(e).toBe('error');
  });
  
});