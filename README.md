## Flat Array
Flatten an array of arrays into one or more. It flexible enough that you can dictate the maximum depth it unveils.

### Installation
In using npm in your project, run:
```sh
$ npm install flat-arr --save
```

Include the module to use
```js
const flatArr = require("flat-arr");
```

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

console.log(flatArr(arr, 3));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, [ 13, 14, 15 ], 16, 17, 18 ]

console.log(flatArr(arr));
/* [
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18
] */
```

### Manual Release Steps
* Increment the "version" attribute of package.json
* Commit with the message "Release version x.x.x"
* Create version tag in git
* Create a github release
* Release on npm

### Author
Spiff Jekey-Green

### License
[MIT](./LICENSE) License