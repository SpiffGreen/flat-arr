// Write tests here using jest framework
const assert = require("assert");
const flatten = require("./index");
// console.log(assert);

const arr1 = [
    [1, 2, 3, 4],
    5, 6,
    [
        [7, 8, 9, 10],
        [11, 12, 13, 14],
        15, 16, 17, 18, 19
    ]
];

const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    7, 8, 9,
    [10, 
        [11,
            [12,
                [13, 14, 15]
            ],
        16,
        ],
        17,
    ],
    18
];

// console.log(flatten(arr2))

/**
 * @description Expected results
 */

const result1 = [
    1,  2,  3,  4,  5,  6,  7,
    8,  9, 10, 11, 12, 13, 14,
   15, 16, 17, 18
 ];


/**
 * @desciption Actual Test
 */
// No depth specification.
assert.notStrictEqual(flatten(arr2), result1, "Returned array not Equal in value");