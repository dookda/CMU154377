const name = "sakda homhuan";
let age = 12;

// console.log(name);


{
    let name = "poon";
    // console.log(name);
}

// var name = "boon";

// console.log(name);

var a = "abcdefg";
var b = 1;
var c = 2.5;
var d = true;
var e = 'qwerty';
var f = '55';
var g = false;
var h = null;

// console.log(a, b, c, d, e, f);

// operator
let plus = c > b;
b += 1;
b = b + 1;
// console.log(b + 1);

var score = 75;
var b = 5;

if (score >= 80) {
    console.log("A");
} else if (score >= 70 && score < 80) {
    // console.log("B");
} else if (score >= 60 && score < 70) {
    console.log("C");
} else {
    console.log("D");
}

// function
function plusValue() {
    let a = 1;
    let b = 2;
    let res = a + b;
    // console.log(res)
}
// call function
plusValue();

function plusWithParam(c, d) {
    let res = c + d;
    // console.log(res);
}

plusWithParam(2, 5)


// return function
function plusNumber(a, b) {
    return "ผัด" + b + "ใส่" + a;
}

let num = plusNumber("หมู", "กระเพรา")

console.log(num);


// alert("hello")
// console.log("test!!!")

// function plusNumberV2(num1, num2){
//     return num1+num2;
// }

// arrow function
let plusNumberV2 = (num1, num2) => {
    return num1 + num2;
}

let val = plusNumberV2(1, 2);
// console.log(val);

// let plusNumberV3 = () => console.log(5 + 2);
// plusNumberV3();


// loop

// let i = 0;
// while (i < 10) {
//     i++;
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// array
const numb = [1, 3, 5, "sakda", 2, 8, 3, 3, 6, 0, "a"];
// console.log(numb[5] + numb[8])

numb.forEach((i) => {
    let res = i * 2;
    // console.log(res);
});

numb.map(i => {
    // console.log(i);
})

numb.filter(i => {
    // console.log(i);
})

const obj = {
    fname: "sakda",
    lname: "homhuan",
    id: 1234567890
}

console.log(obj.fname + " " + obj.lname);

