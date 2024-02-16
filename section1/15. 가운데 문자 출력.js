function solution(s) {
	let answer = '';

	//짝수면 else 홀수
	if (s.length % 2 === 0) {
		answer += s[s.length / 2 - 1] + s[s.length / 2];
	} else answer += s[Math.floor(s.length / 2)];

	return answer;
}
console.log(solution('study')); // u
console.log(solution('good')); // oo

/* 팁 */
// 문자열, 배열의 길이 length는 위를 예시로 5,4 숫자 그대로
// 문자열, 배열의 인덱스는 length -1이다.
// 문자열 또한 배열처럼 s[0]으로 인덱스로 그 위치의 문자를 알아낼 수 있다.

// Math.round() - 소수점 첫 번째 자리에서 반올림
// Math.ceil() - 가장 가까운 정수로 올림
// Math.floor() - 가장 가까운 정수로 내림
