const readMarkdown = require('../modules/readMarkdown');


test('readMarkdown should be a function', () => {
  expect(typeof readMarkdown).toBe('function');
});

test('the data is string', ()=>{
  return readMarkdown('README.md').then(data=>{
    expect(typeof data).toBe('string');
  });
});

// test('the data se cae',()=>{
//  return expect(readMarkdown('README.md')).reject.toBe('error');
// });

// test('the data is a object',() =>{
//   return expect(readMarkdown('README.md')).resolves.toBe('string');
// });