function bmSearch(haystack, needle) {
  let m = needle.length
  let n = haystack.length

  if (m === 0) return 0
  if (n < m) return -1

  // 1️⃣ 建立 Bad Character Table
  let badChar = new Array(256).fill(-1)
  for (let i = 0; i < m; i++) {
    badChar[needle.charCodeAt(i)] = i
  }

  // 2️⃣ 進行 Boyer-Moore 搜尋
  let shift = 0
  while (shift <= n - m) {
    let j = m - 1

    // 從右向左比對
    while (j >= 0 && needle[j] === haystack[shift + j]) {
      j--
    }

    // 若完全匹配，回傳索引
    if (j < 0) return shift

    // 否則根據 bad character 規則移動
    shift += Math.max(1, j - badChar[haystack.charCodeAt(shift + j)])
  }

  return -1
}

// 測試
console.log(bmSearch("abcdefgh", "def")) // Output: 3
console.log(bmSearch("hello world", "world")) // Output: 6
console.log(bmSearch("abcd", "xyz")) // Output: -1

