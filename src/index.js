module.exports = function count(s, pairs) {
  // your implementation
  const mod = 1000000007;
  let count = 0;

  if (!checkPairs(pairs)) {
    return count;
  }

  let n = defineN(pairs);

  if (n > 100000000) {
    return count;
  }

  for (let i = 0; i <= n; i++) {
    let conditionResult = true;

    for (let j = 0, length = s.length; j < length; j++) {
      let condition;

      if (+s[j] === 0) {
        condition = checkFirstCondition(n, j, i);
      } else {
        condition = checkSecondCondition(n, j, i);
      }

      conditionResult = conditionResult && condition;
    }

    if (conditionResult) {
      count++;
    }
  }
  
  return count % mod;
}

function checkPairs(pairs) {
  for (let i = 0, length = pairs.length; i < length; i++) {
    if (pairs[i][1] > 100000000) {
      return false;
    }
  }

  return true;
}

function defineN(pairs) {
  let result = 1;

  for (let i = 0, length = pairs.length; i < length; i++) {
    result = (result * (pairs[i][0] ** pairs[i][1]));
  }

  return result;
}

function checkFirstCondition(n, j, k) {
  let divisor = gcd(k + j, n);

  return divisor > 0 && divisor !== 1;
}

function checkSecondCondition(n, j, k) {
  let divisor = gcd(k + j, n);

  return divisor > 0 && divisor === 1;
}
function gcd(a, b) {
  if (a === 0 || b === 0) {
    return -1;
  }

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  return a + b;
}