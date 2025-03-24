import lodash

function clamp(number, lower, upper) {
  if (number < lower) {
    return lower;
  } else if (number > upper) {
    return upper;
  } else {
    return number;
  }
}

// touch and go
// inside turn, outside turn
// sweetheart
// TPO

// 範圍中，返回原值
console.log(clamp(7, 0, 9)) // => 7

// 小於 lower，返回 lower
console.log(clamp(-12, -4, 5)) // => -4

// 大於 upper，返回 upper
console.log(clamp(18, 3, 9)) // => 9
