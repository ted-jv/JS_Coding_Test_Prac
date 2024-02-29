function solution(test) {
	let answer = 0;
	let m = test.length; // 시험 횟수
	let n = test[0].length;

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			let cnt = 0;
			for (let k = 0; k < m; k++) {
				let pi = (pj = 0);
				for (let f = 0; f < n; f++) {
					if (test[k][f] === i) pi = f;
					if (test[k][f] === j) pj = f;
				}
				if (pi < pj) cnt++;
			}
			if (cnt === m) answer++;
		}
	}

	return answer;
}

let arr = [
	[3, 4, 1, 2],
	[4, 3, 2, 1],
	[3, 1, 4, 2],
];
console.log(solution(arr));
