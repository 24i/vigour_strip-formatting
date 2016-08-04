'use strict'

/**
 * @id stripFormatting
 * @function stripFormatting
 * Removes leading whitespace from each line of input
 * @param val {string} - The string to strip formatting from
 * @returns stripped {string}
 */
module.exports = function (val) {
  return val.replace(/\n *?([^ ]|$)/g, '$1')
}
