const boyerMooreSearch = (text, pattern) => {
  let textLength = text.length
  let patternLength = pattern.length

  // 如果搜尋字串為空，直接回傳 0（即在索引 0 處匹配）
  if (patternLength === 0) return 0

  // 1. 建立 (Bad Character Table)
  // 這個表會記錄 pattern 中每個字元的「最右出現位置」，用來決定跳躍步數
  let badCharacterTable = {}

  for (let i = 0; i < patternLength - 1; i++) {
    // pattern[i] 在 pattern 中出現的位置
    // 記錄該字元的移動距離（距離尾端的長度）
    badCharacterTable[pattern[i]] = patternLength - 1 - i
  }

  let searchIndex = 0 // 在 text 中開始比對的位置

  // 2. 開始在 text 中搜尋 pattern
  while (searchIndex <= textLength - patternLength) {
    let patternIndex = patternLength - 1 // 從 pattern 右邊開始比較

    // 3. 從 pattern 右側開始比對**
    while (patternIndex >= 0 && pattern[patternIndex] === text[searchIndex + patternIndex]) {
      patternIndex-- // 如果字元匹配，繼續往左比對
    }

    // 4. 如果 patternIndex < 0，表示完全匹配，回傳匹配的索引**
    if (patternIndex < 0) return searchIndex

    // 5. 計算跳躍步數
    let mismatchedChar = text[searchIndex + patternLength - 1] // 不匹配的字元
    let shift = badCharacterTable[mismatchedChar] || patternLength // 如果字元不在表內，則跳過整個 pattern 長度

    searchIndex += shift // 跳躍搜尋索引，加快比對
  }

  return -1 // 沒有找到匹配的字串
}

// 測試
console.log(boyerMooreSearch("i'm patrick", "patrick")) // 4
console.log(boyerMooreSearch("defghijkl", "xyz")) // -1
console.log(boyerMooreSearch("abcdabcabcdabc", "abc")) // 0
