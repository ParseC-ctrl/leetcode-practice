const data = [1, 1, 1, 1, 1, 1, 1, 1];

function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0,
    slow = 0,
    minLength = Infinity;
  for (let fast = 0; fast < nums.length; fast++) {
    sum += nums[fast];
    while (sum >= target) {
      minLength = Math.min(minLength, fast - slow + 1);
      sum -= nums[slow];
      slow++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

const fruits = [0,1,0,2];

function totalFruit(fruits: number[]): number {
  let slow = 0,fast = 0,ans = 0;
  let bucketA = fruits[slow],bucketB = fruits[fast];
  while(fast < fruits.length){
      if(fruits[fast] == bucketB || fruits[fast] == bucketA){
          ans = Math.max(ans,fast + 1 - slow);
          fast++;
      }else{
          slow = fast - 1;
          bucketA = fruits[slow];
          while(slow >= 1 && fruits[slow - 1] == bucketA) slow--;
          bucketB = fruits[fast];
          ans = Math.max(ans,fast + 1 - slow);
      }
  }
  return ans;
}

console.log(totalFruit(fruits));
