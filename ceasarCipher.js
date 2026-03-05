export function ceasarCipher(str, shift) {
	let result = '';

	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);

		// Uppercase A-Z
		if (code >= 65 && code <= 90) {
			result += String.fromCharCode(((code - 65 + shift) % 26) + 65);

			// Lowercase a-z
		} else if (code >= 97 && code <= 122) {
			result += String.fromCharCode(((code - 97 + shift) % 26) + 97);

			// Non-letters
		} else {
			result += str[i];
		}
	}

	return result;
}
