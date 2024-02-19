function solution(s) {
	let answer = '';
	let count = 1;
	s = s + ' ';

	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === s[i + 1]) count++;
		else {
			if (count > 1) {
				answer += s[i] + count;
				count = 1;
			} else answer += s[i];
		}
	}

	return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));

// 4,6번 라인 다시 볼 것
