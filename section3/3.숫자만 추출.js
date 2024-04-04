function solution(str) {
	let answer = '';

	for (let x of str) {
		if (!isNaN(x)) answer += x;
	}

	return parseInt(answer);
}
let str = 'g0en2T0s8eSoft';
console.log(solution(str));

/*팁 */
// parseInt("10 years"); // 10
// parseInt("years 10"); // NaN

// isNaN() - 숫자가 아니면 true, 숫자면 false