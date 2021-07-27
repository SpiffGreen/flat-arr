## FlattenArray
Flatten an array of arrays into one or more. It flexible enough that you can dictate the maximum depth it unveils.

### Example
```js
const arr = [
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

console.log(flattenArr(arr, 3));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, [ 13, 14, 15 ], 16, 17, 18 ]

console.log(flattenArr(arr));
/* [
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18
] */
```

### Author
Spiff Jekey-Green

### License
[MIT](./LICENSE) License