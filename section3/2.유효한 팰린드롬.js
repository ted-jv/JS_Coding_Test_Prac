function solution(s) {
	let answer = 'YES';
	s = s.toLowerCase().replace(/[^a-z]/g, '');

	if (s !== s.split('').reverse().join('')) return 'NO';

	return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
let str2 = 'found7, time: study; Yduts; emit, 7Dnuofff';
console.log(solution(str)); // YES
console.log(solution(str2)); // NO

/* 팁 (replace) */
// replace는 문자열 메소드, 위에 사용된 방법 중 ^은 "부정"의 의미이다. 이걸 제외한 것을 의미.
