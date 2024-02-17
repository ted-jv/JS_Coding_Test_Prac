function solution(arr) {
	let answer = 0;
	let n = arr.length;
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let flag = 1;
			for (let k = 0; k < dx.length; k++) {
				let nx = i + dx[k];
				let ny = j + dy[k];

				if (
					nx >= 0 &&
					ny >= 0 &&
					nx < n &&
					ny < n &&
					arr[nx][ny] >= arr[i][j]
				) {
					flag = 0; // 봉우리가 false 의미
					break;
				}
			}
			if (flag) answer++;
		}
	}

	return answer;
}

let arr = [
	[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4],
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2],
];
console.log(solution(arr));

// 	let a;
//	let b = 2;
//	console.info(a < b);

// 팁 - for문 안에서  break를 쓰면 해당 if 경우에 break 작동하여 그 for문은 멈추고 다음으로 넘어간다.
