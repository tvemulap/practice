const practice = require('./getNumbers')

beforeAll(() => console.log('Testing All Functions:'));
afterAll(() => console.log('Finished Testing.'));

describe('Testing the getNumbers function:', () => {
  test('Should Output 0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50', () => {
    expect(practice.aroundTwenty()).toEqual([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 
      25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50]);
  });
})

describe('Testing the getNumbers function:', () => {
  test('Input (5, 45) - Should Output 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45', () => {
    expect(practice.getNumbers(5, 45)).toEqual([5, 10, 11, 12, 13, 14, 15, 
      25, 26, 27, 28, 29, 30, 45]);
  });
  
  test('Input (0, 50) - Should Output 0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50', () => {
    expect(practice.getNumbers(0, 50)).toEqual([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 
      25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50]);
  });
  
  test('Input (15, 28) - Should Output 15, 25, 26, 27, 28', () => {
    expect(practice.getNumbers(15, 28)).toEqual([15, 25, 26, 27, 28]);
  });
  
  test('Input (10, 40) - Should Output 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30', () => {
    expect(practice.getNumbers(10, 40)).toEqual([10, 11, 12, 13, 14, 15, 
      25, 26, 27, 28, 29, 30]);
  });
})

