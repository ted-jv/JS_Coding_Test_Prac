function solution(n, arr) {
	let answer = 0;
	let max = Number.MIN_SAFE_INTEGER;

	for (let x of arr) {
		let sum = 0;
		x = String(x);
		for (let i = 0; i < x.length; i++) {
			sum += Number(x[i]);
		}

		if (sum > max) {
			max = sum;
			answer = x;
		} else if (sum === max) {
			answer > x ? answer : (answer = x);
		}
	}

	return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
