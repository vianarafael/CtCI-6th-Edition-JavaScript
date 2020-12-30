// 1st trial
function checkPermute(str1, str2) {
  if (str1.length !== str2.length) return false;
  const stack = [];
  for (letter of str1) {
    stack.push(letter);
  }
  for (letter of str2) {
    if (stack.includes(letter)) {
      const index = stack.indexOf(letter);
      stack.splice(index, 1);
    }
  }
  return stack.length === 0;
}

// Tests
console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermute('aba', 'aa'), false);
