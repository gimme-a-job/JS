// p166より
'use strict'

const now = new Date();
const year = now.getFullYear();

// "http://www.htmq.com/js/document_writeln.shtml"より
document.open();
// document.writeln("今年は " + year + " 年です");
document.getElementById('output').insertAdjacentHTML("beforeend", ("今年は " + year + " 年です") );
document.close();