function solution(str1, str2) {
	let answer = 'YES';
	let hash = new Map();

	for (let x of str1) {
		if (hash.has(x)) hash.set(x, hash.get(x) + 1);
		else hash.set(x, 1);
	}

	for (let x of str2) {
		if (!hash.has(x) || hash.get(x) == 0) return 'NO';
		else hash.set(x, hash.get(x) - 1);
	}

	return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
('YES');

// let a = 'abaCC';
// let b = 'Caaab';  "NO"

console.log(solution(a, b));
