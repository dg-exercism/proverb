//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...args) => {
  return [...args].reduce((lines, word, i, arr) => {
    if (arr[i+1] && typeof arr[i+1] !== 'object') {
      lines += `For want of a ${word} the ${arr[i+1]} was lost.\n`
    } else if (arr[i+1] && typeof arr[i+1] === 'object') {
      lines += `And all for the want of a ${arr[i+1].qualifier} ${arr[0]}.`;
     } else if (!arr[i + 1] && typeof word !== 'object') {
      lines += `And all for the want of a ${arr[0]}.`
     }
     return lines
  }, '')
};
