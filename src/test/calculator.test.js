const {
  add,
  subtract,
  multiply,
  divide
} = require('../calculator');

describe('Calculator', () => {

  describe('add', () => {

    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

  });

  describe('subtract', () => {

    test('should subtract two numbers correctly', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(-5, -2)).toBe(-3);
    });

  });

  describe('multiply', () => {

    test('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

  });

  describe('divide', () => {

    test('should divide two numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => {
        divide(10, 0);
      }).toThrow('No se puede dividir entre cero.');
    });

  });

});