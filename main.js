const stringTxt = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
const bobTxt = "bob likes dogs";
const arrNum = [1, 3, 5, 3, 7, 3, 1, 1, 5];
const arrNumTwo = [];
const objExp = {a: 1, b: 7, c: 3, d: 14};
const counts = {};

function putInHtml(answer, location) {
    let div = document.createElement("div");
    div.textContent = answer;
    document.getElementById(location).appendChild(div);
}

//Kata #1
function rever(x){
     return x.split(" ").reverse().join(" ");
}
console.log(rever(stringTxt));
putInHtml(rever(stringTxt), 'div1');


//Kata #2
console.log(rever(bobTxt));
putInHtml(rever(bobTxt), 'div2');


//Kata #3
function mini(x){
    return Math.min(...x);
}
console.log(mini(arrNum));
putInHtml(mini(arrNum), 'div3');


//Kata #4
function maxi(x){
    return Math.max(...x);
}
console.log(maxi(arrNum));
putInHtml(maxi(arrNum), 'div4');


//Kata #5
function remainder(x, y){
    return x % y;
}
console.log(remainder(5, 5));
putInHtml(remainder(5, 5), 'div5');


//Kata #6
function distinct(x, y){
for(var i =0; i < x.length; i++){
    if (!y.includes(x[i])){
        y.push(x[i]);
        }
    }
    return y;
}

console.log(distinct(arrNum, arrNumTwo));
putInHtml(distinct(arrNum, arrNumTwo), 'div6');


//Kata #7


// function distinctTwo(x){
//     for(var i =0; i < x.length; i++){
//         if (!arrNumTwo.includes(x[i])){
//             arrNumTwo.push(x[i]);
//             }
//         }
//         return arrNumTwo;
//     }
console.log(distinctTwo(arrNum));
putInHtml(distinctTwo(arrNum), 'div7');


//Kata #8
function resExpress(){

}
// console.log(resExpress());
// putInHtml( , 'div8');