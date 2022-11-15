'use strict'

// p125より
let random = [makeRandom(), makeRandom()]

const index1 = 0;
const index2 = 1;

// "http://www.htmq.com/js/document_writeln.shtml"より
document.open();

let random1 = random[index1];
let random2 = random[index2];

let str = "";

// // p081 より
// if(random[index1] === random[index2])
// {
//     // document.write("乱数");
//     // document.write((index1 + 1));
//     // document.write(" 「");
//     // document.write(random[index1]);
//     // document.write("」 ")
//     document.write(getRandom(index1, random[index1]));

//     document.write("と");

//     // document.write("乱数");
//     // document.write((index2 + 1));
//     // document.write(" 「");
//     // document.write(random[index2]);
//     // document.write("」 ")
//     document.write(getRandom(index2, random[index2]));

//     document.writeln("の値は同じ。");

// }
// else if(random[index1] > random[index2])
// {
//     // document.write("乱数");
//     // document.write((index1 + 1));
//     // document.write(" 「");
//     // document.write(random[index1]);
//     // document.write("」 ")
//     document.write(getRandom(index1, random[index1]));

//     document.write("は");

//     // document.write("乱数");
//     // document.write((index2 + 1));
//     // document.write(" 「");
//     // document.write(random[index2]);
//     // document.write("」 ")
//     document.write(getRandom(index2, random[index2]));

//     document.writeln("より大きい。");
// }
// else if(random[index1] < random[index2])
// {
//     // document.write("乱数");
//     // document.write((index1 + 1));
//     // document.write(" 「");
//     // document.write(random[index1]);
//     // document.write("」 ")
//     document.write(getRandom(index1, random[index1]));

//     document.write("は");

//     // document.write("乱数");
//     // document.write((index2 + 1));
//     // document.write(" 「");
//     // document.write(random[index2]);
//     // document.write("」 ")
//     document.write(getRandom(index2, random[index2]));

//     document.writeln("より小さい。");
// }

// p081 より
if(random1 === random2)
{
    // document.write(getRandom(index1, random1));

    // document.write("と");

    // document.write(getRandom(index2, random2));

    // document.writeln("の値は同じ。");

    str += getRandom(index1, random1);

    str += "と";

    str += getRandom(index2, random2);

    str += "の値は同じ。";

}
else if(random1 > random2)
{
    // document.write(getRandom(index1, random1));

    // document.write("は");

    // document.write(getRandom(index2, random2));

    // document.writeln("より大きい。");

    str += (getRandom(index1, random1));

    str += ("は");

    str += (getRandom(index2, random2));

    str += ("より大きい。");

}
else if(random1 < random2)
{
    // document.write(getRandom(index1, random1));

    // document.write("は");

    // document.write(getRandom(index2, random2));

    // document.writeln("より小さい。");

    str += (getRandom(index1, random1));

    str += ("は");

    str += (getRandom(index2, random2));

    str += ("より小さい。");

}

str += "<br>";

document.getElementById('output').insertAdjacentHTML("beforeend", str );

document.close();


// "https://www.javadrive.jp/javascript/function/index4.html"より
function makeRandom(){
    return Math.floor(Math.random()*10);
  }

function getRandom(index, random){ // もっとマシな感じにしたくはあるが
    return ("乱数" + (index + 1) + " 「" + random + "」 "); 
}

function getRandDiff(random1, random2){
    return ("2つの乱数の差は 「" + Math.abs(random1-random2) + "」 です。");
}