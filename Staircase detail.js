'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let count = 0; 
    let left = "     ";
    let len = left.length;
    let right = "#";
    let sum = "";
    while(count< n){

        sum = left.substr(0,len)+ right;
        console.log(sum);
        right = right + "#";

        count++, len--;

    }
    

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
