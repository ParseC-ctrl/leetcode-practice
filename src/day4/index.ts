let a = "ADOBECODEBANC",
  b = "ABC";
function minWindow(s: string, t: string) {
  const { matchT, init, type } = initDate(t);
  let minLength = Infinity,
    slow = 0,
    fast = 0,
    result = false;
  // 先将slow和fast移动到最近的符合条件的数之下
  while (!type.includes(s[slow])) {
    slow++, fast++;
  }

  while (fast < s.length) {
    let result = compare(init, matchT);
    console.log(result);
    if (result) {
      minLength = Math.min(minLength, fast - slow + 1);
      // 成功之后，保存符合字符串，并将slow指针移动到下一个符合条件的数下
      init[s[slow]]--;
      slow++;
      while (!type.includes(s[slow])) {
        slow++;
      }
    } else {
      if (!type.includes(s[fast])) {
        fast++;
      } else {
        init[s[fast]]++;
        //重新比较一次，如果成功，则快指针无需向前移动
        result = compare(init, matchT);
        if (!result) fast++;
      }
    }
    console.log("slow,fast,result", slow, fast,init);
  }
  return minLength === Infinity ? "" : minLength;
}

function initDate(s: string) {
  let matchT = {};
  let init = {};
  let type = [];
  b.split("").forEach((item) => {
    if (!init[item]) {
      init[item] = 0;
    }
    if (!matchT[item]) {
      matchT[item] = 1;
      type.push(item);
    } else {
      matchT[item]++;
    }
  });
  return {
    matchT,
    init,
    type,
  };
}

function compare(objA: Object, successObj: Object): boolean {
  let flag = true;
  Object.keys(objA).forEach((item) => {
    if (objA[item] < successObj[item]) {
      flag = false;
    }
  });
  return flag;
}

console.log(minWindow(a, b));
