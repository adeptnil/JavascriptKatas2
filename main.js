const stringTxt = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
const bobTxt = "bob likes dogs";
const arrNum = [1, 2, 3, 4, 5, 6, 7];
const arrTxt = [];
const objExp = {a: 1, b: 7, c: 3, d: 14};

function putInHtml(answer, location) {
    let div = document.createElement("div");
    div.textContent = answer;
    document.getElementById(location).appendChild(div);
}

//Kata #1
var arcOne = stringTxt.split(" ");
arcOne.reverse();
stringTxtRev = arcOne.join(" ");
console.log(stringTxtRev);
putInHtml(stringTxtRev, 'div1');

//Kata #2
var arcTwo = bobTxt.split(" ");
arcTwo.reverse();
bobTxtarr = arcTwo.join(" ");
console.log(bobTxtarr);
putInHtml(bobTxtarr, 'div2');

//Kata #3
console.log(Math.min(...arrNum));
putInHtml(Math.min(...arrNum), 'div3');

//Kata #4
console.log(Math.max(...arrNum));
putInHtml(Math.max(...arrNum), 'div4');

//Kata #5
function remainder(x, y){

}

//Kata #6

//Kata #7

//Kata #8