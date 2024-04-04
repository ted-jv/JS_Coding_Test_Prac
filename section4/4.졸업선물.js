function solution(m, product) {
	let answer = 0;
	let sum = 0;
	let productSort = product.sort((a, b) => a[0] / 2 + a[1] - (b[0] / 2 + b[1]));

	for (let i = 0; i < productSort.length; i++) {
		for (let j = 0; j < 2; j++) {}
	}

	return answer;
}

let arr = [
	[6, 6],
	[2, 2],
	[4, 3],
	[4, 5],
	[10, 3],
];
console.log(solution(28, arr));
