function urlify(str, len) {
  let result = [];
  for (let i = 0; i < len; i++) {
    if (str[i] === ' ') {
      result.push('%20');
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
}

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
