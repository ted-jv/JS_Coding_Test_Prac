function solution(arr) {
	let answer = Array.from({ length: arr.length }, () => 1);

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] < arr[j]) answer[i]++;
		}
	}

	return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

/* 팁 (Array.from) */
// let newArray = Array.from({length: n}, () => 1); // length 만들 배열의 길이, 콜백은 넣을 기본 값
// console.log(newArray); // 출력: [1, 1, 1, 1, 1]
