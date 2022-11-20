// 'use strict';

// const table = document.getElementById('table');

// /* 問題文より */ // 参考 p145
// // オブジェクトの作成
// // let jsbook = { title: 'Javascript入門', price: 2500, stock: 3, addTax: function(price){return price * 1.10;} };
// let jsbook = { title: 'Javascript入門', price: 2500, stock: 3 }; // 検証用

// startTableRow(table);

// // p147より
// for(let p in jsbook)
// {
//     /* id有り */
//     // if(p === addTax) setTableData(table, p, jsbook.addTax(jsbook.price));
//     // else
//     // {
//     //     setTableData(table, p, jsbook[p]);
//     // }

//     /* id無し */
//     if(p === addTax) setTableData(table, jsbook.addTax(jsbook[price]));
//     else
//     {
//         setTableData(table, jsbook[p]);
//     }
// }

// endTableRow(table);

// function startTableRow(HTMLElement)
// {
//     HTMLElement.insertAdjacentHTML("beforeend", "<tr>" );
// }

// function endTableRow(HTMLElement)
// {
//     HTMLElement.insertAdjacentHTML("beforeend", "</tr>" );
// }

// function startTableData(HTMLElement)
// {
//     HTMLElement.insertAdjacentHTML("beforeend", "<td>" );
// }

// function startTableData(HTMLElement, id)
// {
//     HTMLElement.insertAdjacentHTML("beforeend", ('<td id="' + id + '">') );
// }

// function endTableData(HTMLElement)
// {
//     HTMLElement.insertAdjacentHTML("beforeend", "</td>" );
// }

// function setTableData(HTMLElement, Data)
// {
//     startTableData(HTMLElement);

//     HTMLElement.insertAdjacentHTML("beforeend", Data );

//     endTableData(HTMLElement);
// }

// function setTableData(HTMLElement, id, Data)
// {
//     startTableData(HTMLElement,id);

//     HTMLElement.insertAdjacentHTML("beforeend", Data );

//     endTableData(HTMLElement);
// }

/* 上では動かないので作り直し */
// 参考 "https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces"
// 参考 "https://so-zou.jp/web-app/tech/programming/javascript/dom/node/element/html/table/"
// 参考 "https://pg-happy.jp/javascript-table.html"

'use strict';

// const table = document.getElementById('table'); /* <table id=???>を使う場合
const tables = document.getElementById('Tables');

/* 問題文より */ // 参考 p145
// オブジェクトの作成
let jsbook = { title: 'Javascript入門', price: 2500, stock: 3, addTax: function (price) { return price * 1.10; } };
// let jsbook = { title: 'Javascript入門', price: 2500, stock: 3, addTax: function(){return jsbook.price * 1.10;} }; // 出来んのかもしんないけど上手くいかないンゴねぇ
// let jsbook = { title: 'Javascript入門', price: 2500, stock: 3 }; // 検証用

let TableHeaders = [];
let TableData = [];
for (let p in jsbook) {
    TableHeaders.push(p);
    if (p === "addTax") TableData.push(jsbook[p](jsbook['price']));
    else TableData.push(jsbook[p]);
}

// 検証用
console.log(typeof TableHeaders);
console.log(TableHeaders);
for(let p in TableHeaders)
{
    console.log(p);
    console.log(TableHeaders[p]);
}
console.log(typeof TableData);
console.log(TableData);
for(let p in TableData)
{
    console.log(p);
    console.log(TableData[p]);
}

/* <table id=???>を使う場合
setTableHeadersRow(table, TableHeaders);
setTableDataRow(table, TableData);

/* <div id=???>とかを使う場合 */
createTable(tables, TableHeaders, TableData);

function setTableHeader(TableRow, header) { /* 孫 */
    let th = document.createElement("th");
    th.insertAdjacentHTML("beforeend", header);
    TableRow.appendChild(th);
}

function setTableHeadersRow(Table, TableHeaders) { /* 子 */ // ファンクション名がダサい？
    let tr = document.createElement("tr");
    for (let header of TableHeaders) setTableHeader(tr, header); // p128より
    Table.appendChild(tr);
}


function setTableData(TableRow, data) { /* 孫 */
    let td = document.createElement("td");
    td.insertAdjacentHTML("beforeend", data);
    TableRow.appendChild(td);
}

function setTableDataRow(Table, TableData) { /* 子 */
    let tr = document.createElement("tr");
    for (let data of TableData) setTableData(tr, data); // p128より
    Table.appendChild(tr);
}

function createTable(Tables, TableHeaders, TableData) { /* 現世代 */
    let table = document.createElement("table");

    // "https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces"より
    setAttributes(table);

    setTableHeadersRow(table, TableHeaders);
    setTableDataRow(table, TableData);
    setUnits(table, 1, "円");
    setUnits(table, 3, "円");
    Tables.appendChild(table);
}

function setAttributes(Table)
{
    // "https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces"より
    Table.setAttribute("border", "10");
    Table.setAttribute("cellspacing", "10");
    Table.setAttribute("cellpadding", "10");
}

function setUnits(Table, column, Unit) //完成したテーブルに単位をつける処理
{
    // 参考 "https://so-zou.jp/web-app/tech/programming/javascript/dom/node/element/html/table/"
    for(let i=1; i<Table.rows.length; i++)
    {
        //参考 "https://magazine.techacademy.jp/magazine/28585"
        // Table.rows[i].cells[column].innerText += Unit;
        const cell = Table.rows[i].cells[column].innerText;
        Table.rows[i].cells[column].innerText = Number(cell).toLocaleString() + Unit;
        
    }
}