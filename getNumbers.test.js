const practice = require('./getNumbers')

beforeAll(() => console.log('Testing All Functions:'));
afterAll(() => console.log('Finished Testing.'));

describe('Testing the createPattern function:', () => {
  test('Input (27) - Should Output 0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27', () => {
    expect(practice.createPattern(27)).toEqual([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 
      25, 26, 27]);
  });
  
  test('Input (50) - Should Output 0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50', () => {
    expect(practice.createPattern(50)).toEqual([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 
      25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50]);
  });

  test('Input (200) - Should Output 0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73, 74, 75, 100, 101, 102, 103, 104, 105, 135, 136, 137, 138, 139, 140, 175, 176, 177, 178, 179, 180', () => {
    expect(practice.createPattern(200)).toEqual([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 
      25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73, 74, 75, 100, 101, 102, 
      103, 104, 105, 135, 136, 137, 138, 139, 140, 175, 176, 177, 178, 179, 180]);
  });

  test('Input (400) - Should Output 0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73, 74, 75, 100, 101, 102, 103, 104, 105, 135, 136, 137, 138, 139, 140, 175, 176, 177, 178, 179, 180, 220, 221, 222, 223, 224, 225, 270, 271, 272, 273, 274, 275, 325, 326, 327, 328, 329, 330, 385, 386, 387, 388, 389, 390', () => {
    expect(practice.createPattern(400)).toEqual([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 
      25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73, 74, 75, 100, 101, 102, 
      103, 104, 105, 135, 136, 137, 138, 139, 140, 175, 176, 177, 178, 179, 180, 220, 221, 222, 
      223, 224, 225, 270, 271, 272, 273, 274, 275, 325, 326, 327, 328, 329, 330, 385, 386, 387, 
      388, 389, 390]);
  });
})

describe('Testing the getNumbers function with valid input:', () => {
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

  test('Input (0, 120) - Should Output 0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73, 74, 75, 100, 101, 102, 103, 104, 105', () => {
    expect(practice.getNumbers(0, 120)).toEqual([0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 
      25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73, 74, 75, 100, 101, 102, 103, 104, 105]);
  });

  test('Input (6, 73) - Should Output 10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73', () => {
    expect(practice.getNumbers(6, 73)).toEqual([10, 11, 12, 13, 14, 15, 25, 26, 27, 28, 29, 
      30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73]);
  });

  test('Input (25, 120) - Should Output 25, 26, 27, 28, 29, 30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73, 74, 75, 100, 101, 102, 103, 104, 105', () => {
    expect(practice.getNumbers(25, 120)).toEqual([25, 26, 27, 28, 29, 
      30, 45, 46, 47, 48, 49, 50, 70, 71, 72, 73, 74, 75, 100, 101, 102, 103, 104, 105]);
  });
})

describe('Testing the getNumbers function with invalid input:', () => {
  test('Input (0, 0) - Should Fail and Output "invalid input"', () => {
    expect(practice.getNumbers(0, 0)).toEqual('invalid input');
  });

  test('Input (40, 40) - Should Fail and Output "invalid input"', () => {
    expect(practice.getNumbers(40, 40)).toEqual('invalid input');
  });

  test('Input (-2, 20) - Should Fail and Output "invalid input"', () => {
    expect(practice.getNumbers(-2, 20)).toEqual('invalid input');
  });

  test('Input (-30, -1) - Should Fail and Output "invalid input"', () => {
    expect(practice.getNumbers(-30, -1)).toEqual('invalid input');
  });

  test('Input (40, 0) - Should Fail and Output "invalid input"', () => {
    expect(practice.getNumbers(40, 0)).toEqual('invalid input');
  });
})

