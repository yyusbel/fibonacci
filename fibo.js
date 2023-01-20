#!/usr/bin/env node
//fibs assignment - iterationss
const fibs = (number) => {
    let fiboArray = [];
    for (i = 0; i < number; i++) {
        if ((fiboArray(0) == null) || (fiboArray(1) == null)) {
            fiboArray.push(i);
        } else {
            let fiboNumber = fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2];
            fiboArray.push(fiboNumber);
        };
    };
    console.log("Interation", fiboArray);
};
fibs(8);
const fibsRec = (length) => {
    if (length < 1 || isNaN(length)) return "Invalid entry";
    if (length === 1) return [0];
    if (length === 2) return [0, 1];
    return [...fibsRec(length - 1),
    fibsRec(length - 1)[length - 2] + fibsRec(length - 1)[length - 3]];
}
console.log("Recursion", fibsRec(8));


//mergesort Assignment

const mergeSort = (array) => {
    if (array.length === 0) return "Invalid array";
    if (array.length === 1) return array;
    const split = Math.floor(array.length / 2);
    const left = array.slice(0, split);
    const righht = array.slice(split, array.length);
    return mergeSort(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    const result = [];
    let comingLeft = 0;
    let comingRight = 0;
    while (comingLeft < left.length && comingRight < right.length) {
        if (left[comingLeft] < right[comingRight]) {
            result.push(left[comingLeft]);
            comingLeft++;
        } else {
            result.push(right[comingRight]);
            comingRight++;
        }
    }
    while (comingLeft < left.length) {
        result.push(left[comingLeft]);;
        comingLeft++;
    }
    while (comingRight < right.length) {
        result.push(right[comingRight]);
        comingRight++
    }
    return result;
}
console.log("Recursion, Merge Sort Algorithm", mergeSort([8,5,1,9,7,15,4,2,0]));