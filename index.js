/**
 * @description A helper function to flatten array
 * @param {Array} arr Array to be flattened
 * @param {Number} depth The number of depths to unveil
 * @returns {Array} A flattened array  
 */
function flattenArr(arr, depth = null) {
    const result = [];
    arr.forEach(i => {
        if(!Array.isArray(i)) {
            result.push(i);
        } else {
            if(depth) {
                result.push(...flattenArr(i, depth - 1));
            } else {
                if(depth === null) {
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