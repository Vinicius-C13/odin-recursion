
const  mergeSortRec = (arr) => {
    if (arr.length === 0) return "Insert a valid value";
    if (arr.length === 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);``

    return merge(mergeSortRec(left), mergeSortRec(right));
}


const merge = (leftArr, rightArr) => {

    const result = [];

    let iL = 0;
    let iR = 0;

    while (iL < leftArr.length && iR < rightArr.length) {
        if (leftArr[iL] < rightArr[iR]) {
            result.push(leftArr[iL]);
            iL++;
        } else {
            result.push(rightArr[iR]);
            iR++;
        }
    }

    while (iL < leftArr.length) {
        result.push(leftArr[iL]);
        iL++;
    }

    while (iR < rightArr.length) {
        result.push(rightArr[iR]);
        iR++;
    }

    return result
};

console.log(mergeSortRec([2, 4, 5, 1, 3]));
console.log(mergeSortRec([2, 115, 31, 112, 11, 1, 2, 90, 1001, 232, 231, 0]))
console.log(mergeSortRec([]));
console.log(mergeSortRec([0]));

