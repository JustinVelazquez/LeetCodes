/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *  * @param {string} t
 */
var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};
