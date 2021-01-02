function palinPerm(word) {
  if (word.length === 1 || word.length === 2) return true;
  const letters = {};
  let oddLetters = 0;
  for (letter of word) {
    letter = letter.toLowerCase();
    if (letter !== ' ') {
      letters[letter] = letters[letter] + 1 || 1;
    }

    // if there is more than 1 odd letters - false
    Object.values(letters).forEach((letterCount) => {
      if (letterCount % 2 !== 0) {
        oddLetters++;
      }
    });
  }
  return oddLetters === 1;
}

console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
