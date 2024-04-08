function solution(s) {
	let answer;
	let stack = [];

	for (let x of s) {
		if (x === ')') {
			while (stack.pop() !== '(');
		} else stack.push(x);
	}

	answer = stack.join('');
	return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));

/*tip*/
//  let stack = [3, 2];
//  if (stack.pop() === 2) console.log('stack', stack); --> 여기서 stack의 콘솔 값은 stack = [3]으로 찍힌다.
