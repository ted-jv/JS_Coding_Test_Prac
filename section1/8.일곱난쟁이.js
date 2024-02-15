function solution(arr) {
	let answer = arr;
	let sum = arr.reduce((a, b) => a + b, 0);

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (sum - (arr[i] + arr[j]) === 100) {
				answer.splice(j, 1);
				answer.splice(i, 1);
			}
		}
	}

	return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

/* 팁- 배열 자르기 (slice) */
// 원본 배열을 파괴한다.
// ['a', 'b', 'c'].slice(2);	// ['c'] 인자
// ['a', 'b', 'c', 'd', 'e'].slice(1, 3);	// ['b', 'c']

/* 팁 - 값 누산기 (reduce)*/
// arr.reduce( function( previousValue, currentValue, index(초기값 지정(0)) ) ) { return previousValue + currentValue;}

/* 단어 정의 */
// 매개변수(parameter) = 인자 -> 위를 기준으로 정의된 solution(arr) 함수의 arr을 말함.
// 인수(argument)) -> console.log(solution)  아래서 불러지는 콘솔로그 함수에 들어가는 solution을 말함.

/* 풀이 */
// splice는 원본 배열을 파괴하므로 두 개의 for문 중에 이후의 인덱스에 해당하는 j 먼저 작성한다.
