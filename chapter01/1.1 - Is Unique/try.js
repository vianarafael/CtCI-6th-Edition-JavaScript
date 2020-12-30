// 1st solution - brute force - On2
// const isUnique = (str) => {
//   const letters = {};
//   for (let i = 0; i < str.length; i++) {
//     let curLetter = str[i];
//     if (Object.keys(letters).includes(curLetter)) return false;
//     letters[curLetter] = 1;
//   }
//   return true;
// };

// The book says - what if you cannot use additional data structures

// const isUnique = (str) => {
//   const word = str.split('');
//   while (word.length > 0) {
//     let curLetter = word.pop();
//     if (word.includes(curLetter)) return false;
//   }
//   return true;
// };

// trying to remember

const isUnique = (str) => {
  const letter = {};
  for (let i = 0; i < str.length; i++) {
    if (letter[str[i]] && letter[str[i]] > 1) return false;
    letter[str[i]] = 1;
  }
  return true;
};
console.log(isUnique('abcd'), 'true');
console.log(isUnique('abccd'), 'false');
console.log(isUnique('bhjjb'), 'false');
console.log(isUnique('mdjq'), 'true');
