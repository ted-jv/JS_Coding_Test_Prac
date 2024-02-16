function solution(s, t) {
	let answer = 0;

	for (let x of s) {
		if (x === 'R') answer++;
	}
	return answer;
}

function solution2(s, t) {
	return s.split(t).length - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R')); // 3
console.log(solution2(str, 'R')); // 3

/* 팁 */ // split은 문자열 메소드
//'do ri'.split('');		// ['d', 'o', ' ', 'r', 'i']
//'do ri'.split(' ');		// ['do', 'ri']

/* solution2 문제풀이 */
// 문자열 메소드 split의 인수를 기준으로 배열이 만들어진다. ( 인수를 기준으로 쪼개지므로 배열의 length(R의 갯수)는 +1이 되기에 -1을 한다.)
