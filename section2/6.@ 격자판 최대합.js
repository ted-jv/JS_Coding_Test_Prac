function solution(arr) {
	let answer = 0;
	let n = arr.length;
	let max = Number.MIN_SAFE_INTEGER;
	let sum1 = (sum2 = 0);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			sum1 += arr[i][j];
			sum2 += arr[j][i];
		}
		max = Math.max(sum1, sum2, max);
		sum1 = sum2 = 0;
	}

	sum1 = sum2 = 0;

	for (let i = 0; i < n; i++) {
		sum1 += arr[i][i];
		sum2 += arr[n - 1 - i][i];
	}
	max = Math.max(sum1, sum2, max);
	answer = max;

	return answer;
}

let arr = [
	[10, 13, 10, 12, 15],
	[12, 39, 30, 23, 11],
	[11, 25, 50, 53, 15],
	[19, 27, 29, 37, 27],
	[19, 13, 30, 13, 19],
];
console.log(solution(arr));
