function solution(s) {
	let answer = 0;

	for (let x of s) {
		if (x === x.toUpperCase()) answer++;
	}

	return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str)); // 3

/* 팁 */
// 문자열.toUpperCase() - 대문자로 변환
// 문자열.toLowerCase() - 소문자로 변환
