/**
 * 中心扩散法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const palindrome = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.slice(l + 1, r);
  };
  let ret = "";
  for (let i = 0; i < s.length; i++) {
    const s1 = palindrome(i, i);
    const s2 = palindrome(i, i + 1);
    ret = ret.length > s1.length ? ret : s1;
    res = res.length > s2.length ? res : s2;
  }
  return ret;
};

/**
 * dp
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxLen = 1,
    start = 0;
  const dp = Array(s.length).fill(false);

  for (let l = 2; l <= s.length; l++) {
    // 字串的长度，字符串长度从 2 开始
    for (let i = 0; i < s.length; i++) {
      // i 起始的位置
      // j 为终止位置
      let j = i + l - 1;
      // 初始条件
      if ((l == 2 || l == 3) && s[i] == s[j]) {
        dp[i][j] = true;
      }

      // 递推公式
      if (s[i] === s[j] && dp[i + 1][j - 1] == true) {
        dp[i][j] = true;
      }

      if (dp[i][j] && l > maxLen) {
        maxLen = l;
        start = i;
      }
    }
  }

  return s.slice(start, start + maxLen);
};
