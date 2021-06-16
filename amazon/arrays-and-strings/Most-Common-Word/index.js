/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const cleanedPara = paragraph
    .replace(/[^a-z]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((a) => a.toLowerCase());

  const theWords = cleanedPara.reduce((allWords, currentWord) => {
    if (allWords[currentWord]) {
      allWords[currentWord]++;
    } else {
      allWords[currentWord] = 1;
    }
    return allWords;
  }, {});
  return Object.entries(theWords)
    .sort((a, b) => b[1] - a[1])
    .filter((word) => !banned.includes(word[0]))[0][0];
};
