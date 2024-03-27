const initArray = [-1, 0, 3, 5, 9, 12];

// 左闭右闭
function searchWhile(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// 左闭右开
function searchWhile2(nums: number[], target: number): number {
  let left = 0,
    right = nums.length;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle;
    } else {
      return middle;
    }
  }
  return -1;
}

function searchFor(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  for (
    let middle = Math.floor((left + right) / 2);
    left <= right;
    middle = Math.floor((left + right) / 2)
  ) {
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

const Array1 = [1, 3, 5, 6];

function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor((right + left) / 2);
    if (nums[middle] < target) left = middle + 1;
    else if (nums[middle] > target) right = middle - 1;
    else return middle;
  }
  return left;
}

// const Array2 = [5, 7, 7, 8, 8, 10];
const Array2 = [1];
let result = [];
function searchLeft(nums: number[], target: number) {
  let left = 0,
    right = nums.length - 1;
  let leftBorder = -99999;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return (leftBorder = left);
}

function searchRight(nums: number[], target: number) {
  let left = 0,
    right = nums.length - 1;
  let rightBorder = 99999;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    rightBorder = right;
  }
  return (rightBorder = right);
}

function searchRange(nums: number[], target: number): number[] {
  const leftBorder = searchLeft(nums, target);
  const rightBorder = searchRight(nums, target);
  if (leftBorder == -99999 || rightBorder == 99999) return [-1, -1];
  if (rightBorder - leftBorder >= 0) return [leftBorder, rightBorder];
  return [-1, -1];
}

/**
 *  给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
    由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 */

function mySqrt(x: number): number {
  if (x < 2) return x;
  let left: number = 0,
    right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid > x) right = mid - 1;
    else if (mid * mid < x) left = mid + 1;
    else return mid;
  }
  return right;
}

function isPerfectSquare(x: number) {
  if (x < 2) return true;
  let left: number = 0,
    right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid > x) right = mid - 1;
    else if (mid * mid < x) left = mid + 1;
    else return true;
  }
  return false;
}

function removeElement(nums: number[], val: number): number {
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    if (nums[i] === val) {
      for (let j = i + 1; j < size; j++) {
        nums[j - 1] = nums[j];
      }
      i--;
      size--;
    }
  }
  return size;
}

const Array3 = [0, 1, 2, 2, 3, 0, 4, 2];

function removeElementByDoublePoint(nums: number[], val: number): number {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] != val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}

const Array4 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums: number[]): number {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[slow] != nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

/**
 Do not return anything, modify nums in-place instead.
 */
const Array5 = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
function moveZeroes(nums: number[]): void {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[slow] === 0 && nums[slow] != nums[fast]) {
      let swap = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = swap;
    }
    if (nums[slow] !== 0) {
      slow++;
    }
  }
}

let s = "1a##c",
  t = "11#a#c";

function backspaceCompare(s: string, t: string) {
  let sSkipNum = 0,
    tSkipNum = 0;
  let i = s.length - 1,
    j = t.length - 1;
  while (1) {
    while (i >= 0) {
      if (s[i] === "#") {
        sSkipNum++;
      } else {
        if (sSkipNum > 0) sSkipNum--;
        else break;
      }
      i--;
    }
    while (j >= 0) {
      if (t[j] === "#") {
        tSkipNum++;
      } else {
        if (tSkipNum > 0) tSkipNum--;
        else break;
      }
      j--;
    }
    if (i < 0 || j < 0) break; // S 或者T 遍历到头了
    if (s[i] != t[j]) return false;
    i--;
    j--;
  }
  if (i == -1 && j == -1) return true;
  return false;
}
