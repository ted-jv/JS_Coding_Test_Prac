function solution(day, arr) {
	let answer = 0;

	for (let x of arr) {
		if (x % 10 === day) answer++;
	}

	return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33]; // 3
console.log(solution(3, arr));

// 팁- 주어지는 차량의 숫자는 정해진 두자릿 수이므로 10으로 나눠 일의 자릿수를 받아낸다.
