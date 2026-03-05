import { ceasarCipher } from './ceasarCipher';

test('Returns string with values shifted by x', () => {
	expect(ceasarCipher('Zebra !', 3)).toBe('Cheud !');
});
