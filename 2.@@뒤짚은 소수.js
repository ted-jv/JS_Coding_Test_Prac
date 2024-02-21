function isPrime(n) {
	if (n === 1) return false;
	for (let i = 2; i < Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}

function solution(arr) {
	let answer = [];

	for (let x of arr) {
		x = String(x);
		let temp = '';
		for (let i = x.length - 1; i >= 0; i--) {
			temp += x[i];
		}

		temp = Number(temp);

		if (isPrime(temp)) answer.push(temp);
	}

	return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

// 팁 - parseInt, Number 문자열에 사용 가능, 사용 후 정수의 값만 남는다.
// 소수 - 1과 자기 자신만이 약수인 수를 말함. ex) 23의 약수는 1,23 so 약수.

// 숙지 - isPrime 함수 만드는 법과 원리

// 풀이 - 답지에 있는 형식이 더 간단하므로 숙지하고 다시 풀어볼 것
