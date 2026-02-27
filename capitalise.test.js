import { capitalise } from './capitalise';

test('Return first with first letter of string capitalised', () => {
	expect(capitalise('string')).toBe('String');
});
