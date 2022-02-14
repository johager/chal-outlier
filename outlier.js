/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

Examples:

[2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
*/

function outlier(arr) {
    let even = NaN
    let evenCount = 0
    let odd = NaN
    let oddCount = 0

    for (let num of arr) {
        if (num % 2 === 0) {
            // even
            even = num
            evenCount += 1
            if(evenCount > 1 && !isNaN(odd)) {
                return odd
            }
        } else {
            // odd
            odd = num
            oddCount += 1
            if(oddCount > 1 && !isNaN(even)) {
                return even
            }
        }
    }

    return NaN
}

function testOutlier(inp, exp) {
    const res = outlier(inp)
    console.log("passed:", res === exp, ` inp: ${inp}  res: ${res}  exp: ${exp}`)
}

testOutlier([2, 4, 0, 100, 4, 11, 2602, 36], 11)
testOutlier([160, 3, 1719, 19, 11, 13, -21], 160)
// testOutlier([2, 4, 0], NaN)