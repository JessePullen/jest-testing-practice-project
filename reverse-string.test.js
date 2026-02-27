import { reverseString } from './reverse-string';

test('Return first with first letter of string capitalised', () => {
	expect(reverseString('string')).toBe('gnirts');
});
