'use strict';

const output = document.getElementById('output');

let animals = [];
animals.push("シマウマ");
animals.push("ゾウ");
animals.push("ツチノコ");
animals.push("ライオン");
animals.push("ヤギ");
animals.push("ライオン");

const animal = animals[makeRandom(animals.length)];

output.insertAdjacentHTML("beforeend", (animal+"を表示しています") );

// "https://www.javadrive.jp/javascript/function/index4.html"より
function makeRandom(length) {
    return Math.floor(Math.random() * length);
}