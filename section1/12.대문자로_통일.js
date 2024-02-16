function solution(s) {
	let answer = '';

	for (let x of s) {
		if (x === x.toLowerCase()) answer += x.toUpperCase();
		else answer += x;
	}

	return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str)); // ITISTIMETOSTUDY

/* 팁 */
// 문자열.toUpperCase() - 대문자로 변환
// 문자열.toLowerCase() - 소문자로 변환
