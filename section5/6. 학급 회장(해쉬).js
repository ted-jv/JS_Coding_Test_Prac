function solution(s) {
	let answer;
	let hash = new Map();

	for (let i = 0; i < s.length; i++) {
		if (hash.has(s[i])) hash.set(s[i], hash.get(s[i]) + 1);
		else hash.set(s[i], 1);
	}

	let max = Number.MIN_SAFE_INTEGER;

	for (let [key, value] of hash) {
		if (max < value) {
			max = value;
			answer = key;
		}
	}

	return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
