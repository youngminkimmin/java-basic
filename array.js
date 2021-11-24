const fruits = ["apple", "banana", "orange", "kiwi"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
fruits.push("plum");
console.log(fruits);

let num = 10;
let isok = true;
let myName = "김영민";

let newNum = num;
console.log(newNum);
num = 20;
console.log(num, "" === "", newNum);
//primitive  vs  reference(참조값) 기존의값을 추가는 가능하나 새로운 값을 만들순 없음
const colors = ["red", "blue", "green"]; // reference type   array, object

colors.push("yellow"); //push는 뒷쪽으로 밀어넣음 (순서) / nushfit = 순서 젤 앞으로 밀어넣음
/*console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
const lastitem = colors.pop(); // 맨마지막 값을 빼냄
const firstitem = colors.shift(); // 맨처음 값을 빼냄
console.log(lastitem, "===", firstitem); */

const seletItem = colors.splice(3, 3); // 배열 값을 가져옴
console.log(seletItem);
console.log(seletItem[0]);
