var num01 = 10;
var num01 = 50;
var num02 = 20;

//console.log(num01);

let aa = 10;
if (true) {
  let bb = 20;
} else {
  let cc = 30;
  // console.log("๐ ~ file: variables.js ~ line 12 ~ aa", bb);
}
//console.log(aa);
// let,const ๋ block scope
//var ๋ function scope๋ฅผ ๋ฐ๋ฅธ๋ค.

var num = 20; // ์ ์ญ ๋ณ์
function test() {
  var localNum = 10;
  if (true) {
    var functionNum = "๋๋ var๋ก ์ ์ธ๋ funtionNum์๋๋ค";
    let blockNum = "๋๋ let์ผ๋ก ์ ์ธ๋ blockNum์๋๋ค";
  }
  console.log(
    "๐ ~ file: variables.js ~ line 23 ~ test ~ functionNum",
    functionNum
  );
}
test();
console.log(Math.round(1.6));

let age = 20;
let name = "๊น์๋ฏผ";
let ok = true;
let colors = ["red", "green", "blue", "orange"]; // ๋ฐฐ์ด,array
console.log(`๋์ ์ด๋ฆ์ ${name} ์ด๊ณ  ๋์๋ ${age}`);
