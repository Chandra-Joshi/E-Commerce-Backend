/*
import squarenumb from "./calculate.js";
import { cube } from "./calculate.js";

const number=20;


const squarenum =squarenumb(number);
console.log(squarenum);


const cubeNum = cube(number);
console.log(cubeNum);
in the above we use both default and object method of export

*/


import { square as squareNumber,cube as cubeNumber } from "./calculate.js";

const num=22;

const squareNum=squareNumber(num);
console.log(squareNum);

const cubeNum=cubeNumber(num);
console.log(cubeNum);