'use strict'

const toggle = document.getElementById('toggle'); // これでも無理⇒錣山親方のおかげで動いた！
const text = document.getElementById('text'); // これでも無理⇒錣山親方のおかげで動いた！

let msgs = [];
msgs.push("クリックされると文字が変化します"); // 初期表示文章
msgs.push("クリックされました");
msgs.push("ホアンさんは漫画を読むのが好きです")

text.textContent = msgs[0];

let count = 0; // 14-Sep-22 錣山親方より"let"が抜けておるとの金言

text.onclick = function(event){ // これだと上手くいかない⇒錣山親方のおかげで動いた！
// toggle.onclick = function(event){ // これでも無理⇒錣山親方のおかげで動いた！
// text.addEventListener('click', function (event) { // これでも無理⇒錣山親方のおかげで動いた！
// toggle.addEventListener('click', function (event) { // これでも無理⇒錣山親方のおかげで動いた！
    
    event.preventDefault();

    text.textContent = msgs[(next())];
    }; // こっちか
// }); // こっちか(どっちかを使ってね)

// p266より書写
// $(document).ready(function(){ // これでも無理⇒相変わらず動かん
//     $('#toggle').on('click', function(){
//         $('#text').textContent = msgs(next());
//     });
// });

function next() {
    if (count === (msgs.length - 1)) count = 0;
    else count++;
    return count;
}