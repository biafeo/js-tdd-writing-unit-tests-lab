export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }
  return points;
}

export function isPalindrome(word) {
  const modifiedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedWord = modifiedWord.split("").reverse().join("");
  return modifiedWord === reversedWord;
}
