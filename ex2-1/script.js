// p166,p169より
'use strict'

const now = new Date();
const day = now.getDay();

let day_lang;

// p209 より
switch (day) {
    case 0: //日曜
    case 6: //土曜
        day_lang = "休日";
        break;

    case 1: //月曜
    case 2: //火曜
    case 3: //水曜
    case 4: //木曜
    case 5: //金曜
        day_lang = "平日";
        break;
}

// "http://www.htmq.com/js/document_writeln.shtml"より
document.open();
// document.writeln("今日は" + day_lang + "です");
document.getElementById('output').insertAdjacentHTML("beforeend", ("今日は" + day_lang + "です") );
document.close();