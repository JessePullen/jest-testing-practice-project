import { calculator } from './calculator';

test('Return number 1 plus number 2', () => {
	expect(calculator.add(1, 1)).toBe(2);
});

test('Return number 1 minus number 2', () => {
	expect(calculator.subtract(1, 1)).toBe(0);
});

test('Return number 1 divided by number 2', () => {
	expect(calculator.divide(2, 2)).toBe(1);
});

test('Return number 1 multiplied by number 2', () => {
	expect(calculator.multiply(2, 2)).toBe(4);
});
