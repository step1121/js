let orange = 100;
let apple = 120;

if(orange < apple){
  alert("みかんの値段がリンゴより安い")
} else if(orange == apple){
  alert("みかんとりんごが同じ値段")
} else {
  alert("みかんの値段がリンゴより高い")
}

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num *2;
  count = count + 1;
}

alert("2をかけ続けて" + max + "を超えるのに必要だった回数は" + count + "回です");