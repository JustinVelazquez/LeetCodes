/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  // Take in our array of logs
  // we then want to separate our logs into 2 differnt arrays
  // For every log in our letterlogs array we perform a check to see if the last element is a number or not and sort accordingly
  // We then sort our letterLog array by using localeCompare to sort lexiography. first by contents and then by the identifier
  // We lastely return the sorted letterlogs array with our unchanged digitsArray conated onto our letterLogs array
  const letterLogs = [];
  const digiLogs = [];

  for (const log of logs) {
    if (/[^0-9]/.test(log[log.length - 1])) {
      letterLogs.push(log);
    } else digiLogs.push(log);
  }

  letterLogs.sort((a, b) => {
    if (
      a
        .split(' ')
        .slice(1)
        .join(' ')
        .localeCompare(b.split(' ').slice(1).join(' ')) === 0
    ) {
      return a.split(' ')[0].localeCompare(b.split(' ')[0]);
    } else
      return a
        .split(' ')
        .slice(1)
        .join(' ')
        .localeCompare(b.split(' ').slice(1).join(' '));
  });

  return letterLogs.concat(digiLogs);
};
