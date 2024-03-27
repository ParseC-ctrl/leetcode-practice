const data = [1,1,1,1,1,1,1,1];

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

