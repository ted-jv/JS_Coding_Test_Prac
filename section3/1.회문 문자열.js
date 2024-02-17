function solution(s) {
	let answer = 'YES';
	s = s.toLowerCase();

	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		if (s[i] !== s[s.length - 1 - i]) return 'NO';
	}

	return answer;
}

function solution2(s) {
	s = s.toLowerCase();

	return s === s.split('').reverse().join('') ? 'YES!' : 'NO!';
}

let str = 'goooG';
console.log(solution(str));
console.log(solution2(str));

/* 팁 */
// split, reverse, join 모두 배열 메소드
