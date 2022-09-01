#!/usr/bin/node

function fibs(n) {
    if(n<2){
        return n
    }
    else {
        return fibs(n-1) + fibs(n-2)
    }
}

console.log(fibs(7))
