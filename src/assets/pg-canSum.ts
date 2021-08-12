// how to memoizate this fucntion

const canSum=(a, params, memo={})=>{
	const nums = [];
	if(a in memo) return memo[a];
  if(a===0) return true;
  if(a<0) return false;

  for (let p of params) {
    const result = a-p;
    if(canSum(result,params,memo)===true) {
    	nums.push(p);
    	memo[a] = true;
      console.log(nums);
      return true;
    }
  }

	memo[a]=false;
  return false;
}

console.log(canSum(15, [4,5,2,3]));
console.log(canSum(300, [7,14]));