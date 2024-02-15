function solution(arr) {
	let answer = [],
		min = Number.MAX_SAFE_INTEGER,
		sum = 0;

	//홀수 합계
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			sum += arr[i];

			//최솟값 출력
			if (arr[i] < min) min = arr[i];
		}
	}

	answer.push(sum);
	answer.push(min);

	return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85]; // 41
console.log(solution(arr));

// 팁- x % 2 === 1은 홀수
