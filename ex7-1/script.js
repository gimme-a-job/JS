'use strict'

const form = document.getElementById('form');
// const input = form.word.value; // これだと動かない
let input; // 入力された名前
const elements = form.elements; // ラヂオボタングループ

let elements_lang = [];
elements_lang.push("炎属性");
elements_lang.push("水属性");
elements_lang.push("草属性");

// p159より
form.onsubmit = function(event)
{
    // event.preventDefault(); // p164より // 無い方の動きの方が好きな方

    input = form.word.value;

    let checkedValue;
    // for(let radio in elements) if(radio.checked) checkedValue = radio.value; // この書き方はできない？
    for(let i=0; i<elements.length; i++) if(elements.item(i).checked) checkedValue = elements.item(i).value;

    // const element = elements_lang[elements.item(1).value]; // テスト用
    const element = elements_lang[checkedValue];
    

    let str = "";
    str = "入力された名前は「" + input + "」、" + "選択された属性は「" + element + "」。";
    window.alert(str);  

};