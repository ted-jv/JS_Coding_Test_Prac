function solution(s, t) {
	let answer = [];
	let count = 0;

	let straight = Array.from({ length: str.length }, () => 0);
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

/* 풀이 */
// 위는 내 풀이 방식, 직진으로 for문 돌렸을 때 e와의 거리를 구하는 straight 배열과 
// 후진으로 for문 돌렸을 때 e와의 거리를 구하는 back 배열 두개를 만들어, Math.min으로 최소 거리를 answer에 넣는다.
// 허나 이 경우 for문을 3개를 써야하므로 답지 방식으로 다시 풀어본다.

function solution2(s, t){
  let answer=[];
  let p=1000;
  for(let x of s){
      if(x===t){
          p=0;
          answer.push(p);
      }
      else{
          p++;
          answer.push(p);
      }
  }
  p=1000;
  for(let i=s.length-1; i>=0; i--){
      if(s[i]===t) p=0;
      else{
          p++;
          answer[i]=Math.min(answer[i], p);
      }
  }
  return answer;
}

let str2="teachermode";
console.log(solution2(str2, 'e'));