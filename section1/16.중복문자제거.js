function solution(s) {
	let answer = '';

	for (let x of s) {
		if (answer.indexOf(x) === -1) answer += x;
	}

	return answer;
}
console.log(solution('ksekkset'));

/* 팁 (indexOf 메소드 예시) */

// let s = "Hello, World!";
// let index1 = s.indexOf("World"); // 문자열 "World"의 첫 번째 인덱스를 반환
// console.log(index1); // 출력: 7

// let index2 = s.indexOf("JavaScript"); // 문자열 "JavaScript"를 찾을 수 없으므로 -1을 반환
// console.log(index2); // 출력: -1 ( 위는 이 방식 이용 )
