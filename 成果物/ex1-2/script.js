// p166より
'use strict'

const now = new Date();
const hour = now.getHours();
const min = now.getMinutes();

// "http://www.htmq.com/js/document_writeln.shtml"より
document.open();
// document.writeln("今は " + hour + " 時 " + min + " 分です");
document.getElementById('output').insertAdjacentHTML("beforeend", ("今は " + hour + " 時 " + min + " 分です") );
document.close();