function solution(k, arr) {
	let answer = 0,
		lt = 0,
		sum = 0;

	for (let rt = 0; rt < arr.length; rt++) {
		sum += arr[rt];
		if (rt >= k - 1) {
			if (answer < sum) {
				answer = sum;
				sum -= arr[lt++];
			} else sum -= arr[lt++];
		}
	}

	return answer;
}
// 답지 방식대로 푼 코드
function solution2(k, arr) {
	let answer,
		sum = 0;

	for (let i = 0; i < k; i++) {
		sum += arr[i];
	}

	answer = sum;

	for (let j = k; j < arr.length; j++) {
		sum += arr[j] - arr[j - k];
		answer = Math.max(answer, sum);
	}

	return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
console.log(solution2(3, a));
