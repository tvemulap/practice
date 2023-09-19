const practice = require('./getNumbers')

beforeAll(() => console.log('Testing All Functions:'));
afterAll(() => console.log('Finished Testing.'));

describe('Testing the getNumbers function:', () => {
  test('Should Output 0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50', () => {
    expect(practice.createPattern(50)).toEqual([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 
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

  test('Input (30, 70) - Should Output 30, 45, 46, 47, 48, 49, 50, 70', () => {
    expect(practice.getNumbers(30, 70)).toEqual([30, 45, 46, 47, 48, 49, 50, 70]);
  });

  test('Input (0, 120) - Should Output 0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73, 74, 75, 100, 101, 102, 103, 104, 105"', () => {
    expect(practice.getNumbers(0, 120)).toEqual([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73, 74, 75, 100, 101, 102, 103, 104, 105]);
  });

  test('Input (6, 73) - Should Output 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73"', () => {
    expect(practice.getNumbers(6, 73)).toEqual([10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73]);
  });

  test('Input (0, 0) - Should Fail and Output "invalid input"', () => {
    expect(practice.getNumbers(0, 0)).toEqual('invalid input');
  });

  test('Input (-2, 20) - Should Fail and Output "invalid input"', () => {
    expect(practice.getNumbers(-2, 20)).toEqual('invalid input');
  });

  test('Input (40, 0) - Should Fail and Output "invalid input"', () => {
    expect(practice.getNumbers(40, 0)).toEqual('invalid input');
  });
})

