export function analyseArray(array) {
	let object = {
		average: getAverage(array),
		min: Math.min(...array),
		max: Math.max(...array),
		length: array.length,
	};
	return object;
}

function getAverage(array) {
	let result = 0;
	for (const num of array) {
		result += num;
	}
	return result / array.length;
}
