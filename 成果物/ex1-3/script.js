'use strict'

// "http://www.htmq.com/js/document_writeln.shtml"より
document.open();
// p180より
// document.writeln("乱数の値は 「" + Math.floor((Math.random()*6) +1) +  "」 となります");
// document.writeln("乱数の値は 「" + Math.floor((0*6) +1) +  "」 となります"); // 検証用
// document.writeln("乱数の値は 「" + Math.floor((0.99999*6) +1) +  "」 となります"); // 検証用
// document.writeln("乱数の値は 「" + Math.floor((1*6) +1) +  "」 となります"); // 検証用 [7]が出力されるが、そもそもMath.randomは１未満らしい
document.getElementById('output').insertAdjacentHTML("beforeend", ("乱数の値は 「" + Math.floor((Math.random()*6) +1) +  "」 となります") );
document.close();