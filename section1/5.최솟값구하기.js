function solution(arr) {
	let answer,
		min = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) min = arr[i];
	}
	answer = min;

	return answer;
}

let arr = [5, 7, 3, 2, 9, 11];
console.log(solution(arr)); // 2

// 팁 - Number.MAX_SAFE_INTEGER은 숫자 중 최댓값, <-> Number.MIN_SAFE_INTEGER
