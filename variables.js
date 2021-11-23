var num01 = 10;
var num01 = 50;
var num02 = 20;

//console.log(num01);

let aa = 10;
if (true) {
  let bb = 20;
} else {
  let cc = 30;
  // console.log("🚀 ~ file: variables.js ~ line 12 ~ aa", bb);
}
//console.log(aa);
// let,const 는 block scope
//var 는 function scope를 따른다.

var num = 20; // 전역 변수
function test() {
  var localNum = 10;
  if (true) {
    var functionNum = "나는 var로 선언된 funtionNum입니다";
    let blockNum = "나는 let으로 선언된 blockNum입니다";
  }
  console.log(
    "🚀 ~ file: variables.js ~ line 23 ~ test ~ functionNum",
    functionNum
  );
}
test();
console.log(Math.round(1.6));

let age = 20;
let name = "김영민";
let ok = true;
let colors = ["red", "green", "blue", "orange"]; // 배열,array
console.log(`나의 이름은 ${name} 이고 나의는 ${age}`);
