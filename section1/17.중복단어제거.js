function solution(s) {
	let answer = [];

	for (let x of s) {
		if (answer.indexOf(x) === -1) answer.push(x);
	}

	return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str)); // [ 'good', 'time', 'student' ]

/* 팁 (indexOf) */
// indexOf는 문자열과 배열에 모두 사용 가능하다.
