function solution(n) {
	let answer = 0;

	for (let i = 1; i <= n; i++) {
		answer += i;
	}

	return answer;
}

console.log(solution(10)); // 55
//팁- answer += i 와 answer = answer + i은 같다.
