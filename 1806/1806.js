/**
 * @param {number} n
 * @return {number}
 */
 const getInitPerm = (n) => {
  const perm = [];
  for (let i = 0; i < n; i++) {
      perm.push(i);
  }
  
  return perm;
};

const operation = (perm, n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
      if (i % 2 === 0) arr[i] = perm[i / 2];
      if (i % 2 === 1) arr[i] = perm[n / 2 + (i - 1) / 2];
  }
  
  return arr;
};

const checkInitially = (perm) => {
  return perm.every((n, idx) => n === idx);
};

const reinitializePermutation = function(n) {
  let perm = getInitPerm(n);
  let count = 0;
  for(;;) {
    count++;
    perm = operation(perm, n);
    if (checkInitially(perm)) break;
  }
  
  return count;
};
