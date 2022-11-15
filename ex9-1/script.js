'use strict'

const tables = document.getElementById('Tables');

let TableHeaders = [];
TableHeaders.push("タイトル");
TableHeaders.push("税抜き価格");
TableHeaders.push("在庫数");
let TableData = [];

// p272,273 // 書写してるだけでよく分からンゴねぇ⇒処理の順番が難しい？
$(document).ready(function () {

    // ファイルの読み込み
    $.ajax({ url: 'data.json', dataType: 'json' })

        .done(function (data) { // データが下載できたときの処理

            // console.log(data); // 検証用１
            data.forEach(function (item, index) {
                // TableHeaders.push(item.id); // "JSON"ファイルからヘッダーを取る場合
                TableData.push(item.value);
                // console.log(item);// 検証用２
            });

            // 検証用
            // console.log(typeof TableHeaders);
            // console.log(TableHeaders);
            // for (let p in TableHeaders) // (6-1)では動くがこちらでは動かない
            // {
            //     console.log(p);
            //     console.log(TableHeaders[p]);
            // }
            // console.log(typeof TableData);
            // console.log(TableData);
            // for (let p in TableData) // (6-1)では動くがこちらでは動かない
            // {
            //     console.log(p);
            //     console.log(TableData[p]);
            // }

            createTable(tables, TableHeaders, TableData);

        })

        .fail(function () { // データが下載できなかったときの処理
            window.alert('読み込みエラー');
        });

});

/* ここだとダメみたいなので読み込み時の処理につっこみます */

// // 検証用
// console.log(typeof TableHeaders);
// console.log(TableHeaders);
// for(let p in TableHeaders) // (6-1)では動くがこちらでは動かない
// {
//     console.log(p);
//     console.log(TableHeaders[p]);
// }
// console.log(typeof TableData);
// console.log(TableData);
// for(let p in TableData) // (6-1)では動くがこちらでは動かない
// {
//     console.log(p);
//     console.log(TableData[p]);
// }

// createTable(tables, TableHeaders, TableData);

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
    setUnits(table, 1, "円")
    setUnits(table, 2, "冊")
    Tables.appendChild(table);
}

function setAttributes(Table) {
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