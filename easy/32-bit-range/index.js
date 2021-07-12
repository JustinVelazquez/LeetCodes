/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // take in our 32-bit int. Can be positive or negative but must be within our constraints
  // we return our 32 bit int with its digits reveresed.
  // if our digit falls out of the 32-bit range we return 0
  //Examples
  // x = 321 =>  123
  // x = -123 => -321

  let reverseNumString = +String(Math.abs(x)).split('').reverse().join('');
  if (reverseNumString > 0x7fffffff) {
    return 0;
  }
  return x < 0 ? -reverseNumString : reverseNumString;
};

reverse(124);
reverse(-342);
