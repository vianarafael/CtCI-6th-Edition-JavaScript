function palinPerm(word, str) {
  const letters = {};

  for (letter of word) {
    letter = letter.toLowerCase();
    letters[letter] = letters[letter] + 1 || 1;
  }

  for (letter of str) {
    letter = letter.toLowerCase();

    if (!Object.keys(letters).includes(letter)) return false;
    letters[letter] = letters[letter] - 1;
  }

  console.log(letters);

  return (
    Object.values(letters).reduce(
      (accumulator, currentValue) => accumulator + currentValue
    ) === 0
  );
}

console.log(palinPerm('Tact Coa', 'taco cat'), 'true');
console.log(palinPerm('Tact Coa', 'taco boa'), 'false');
