function solution(a, b, c) {
	let answer = 'YES',
		max;
	let total = a + b + c;

	if (a > b) max = a;
	else max = b;

	if (c > max) max = c;

	if (total - max <= max) answer = 'NO';

	return answer;
}

console.log(solution(6, 7, 11)); // YES
console.log(solution(13, 33, 17)); // NO

//삼각형 기본 조건 - 두 변의 합이 세 번째 변보다 커야 합니다.
//풀이 - 세 변을 더한 값에 가장 큰 변을 뺀다. 그 값이 나머지 두 변 보다 크면 YES , 아니면 NO
