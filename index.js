/**
 * @description A helper function to flatten array
 * @param {Array} arr Array to be flattened
 * @param {Number} level The number of levels to unveil
 * @returns {Array} A flattened array  
 */
function flattenArr(arr, level = null) {
    const result = [];
    arr.forEach(i => {
        if(!Array.isArray(i)) {
            result.push(i);
        } else {
            if(level) {
                result.push(...flattenArr(i, level - 1));
            } else {
                if(level === null) {
                    result.push(...flattenArr(i));
                } else {
                    result.push(i);
                }
            }
        }
    });
    return result;
}

module.exports = flattenArr;