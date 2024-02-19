function solution(s, t) {
	let answer = [];
	let count = 0;

	let straight = Array.from({ length: str.length }, () => 0);
	console.info(straight);
	let back = Array.from({ length: str.length }, () => 0);

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== 'e') {
			count++;
			straight[i] = count;
		} else {
			count = 0;
			straight[i] = count;
		}
	}

	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] !== 'e') {
			count++;
			back[i] = count;
		} else {
			count = 0;
			back[i] = count;
		}
	}

	for (let i = 0; i < str.length; i++) {
		answer.push(Math.min(straight[i], back[i]));
	}

	return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
