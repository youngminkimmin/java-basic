const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
const day = now.getDay();
const days = ["일", "월", "화"];
console.log(days[day]);
/*
if(day===0){
    console.log("일요일");
}else if(day===1){
    console.log("월요일");
}else if(day===2){
    console.log("화요일");
}*/
