function oneAway(original, secondary) {
  //   if (
  //     secondary.length !== original.length &&
  //     secondary.length !== original.length++ &&
  //     secondary.length !== original.length--
  //   )
  //     return false;

  const originalArr = original.split('');
  let countDifLetter = 0;
  for (letter of secondary) {
    if (originalArr.includes(letter)) {
      originalArr.splice(originalArr.indexOf(letter), 1);
    } else {
      countDifLetter++;
    }
  }
  return (
    (originalArr.length === 1 || originalArr.length === 0) &&
    (countDifLetter === 1 || countDifLetter === 0)
  );
}
// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
