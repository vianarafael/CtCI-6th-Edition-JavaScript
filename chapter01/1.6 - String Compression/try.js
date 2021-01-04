function strComp(str) {
  let pointer;
  let result = [];
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    // 1st iteration
    if (!pointer) {
      pointer = curr;
    }

    if (curr !== pointer || i === str.length - 1) {
      if (i === str.length - 1) counter++;
      result.push(pointer);
      result.push(counter);
      counter = 0;
      pointer = curr;
    }
    counter++;
  }
  result = result.join('');
  return result.length < str.length ? result : str;
}

console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');
